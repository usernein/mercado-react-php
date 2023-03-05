<?php

require_once(__DIR__ . '/../../config/database.php');
require_once(__DIR__ . '/../helpers/QueryBuilder.php');

class Product
{
    private $pdo;
    public $id;
    public $name;
    public $price;
    public $category_id;
    public $available_amount;
    public $measurement;
    public $category;

    public function __construct()
    {
        global $pdo;
        $this->pdo = $pdo;
    }


    public function load()
    {
        // $query = $this->pdo->prepare('SELECT * FROM products WHERE id = :id');
        $query = $this->pdo->prepare('
            select p.*, to_jsonb(c.*) as category
            from products p inner join categories c on p.category_id = c.id
            where p.id = :id
        ');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        $this->id = $result['id'];
        $this->name = $result['name'];
        $this->price = $result['price'];
        $this->category_id = $result['category_id'];
        $this->available_amount = $result['available_amount'];
        $this->measurement = $result['measurement'];

        $this->category = json_decode($result['category'] ?: '{}', true);
    }

    public function delete()
    {
        $query = $this->pdo->prepare('DELETE FROM sales_products WHERE product_id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();

        $query = $this->pdo->prepare('DELETE FROM products WHERE id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        return $query->rowCount();
    }

    public function store()
    {
        $result = false;
        if ($this->id) {
            $query = $this->pdo->prepare('SELECT * FROM products WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);
        }

        if ($result) {
            $data = [
                'name' => $this->name,
                'price' => $this->price,
                'category_id' => $this->category_id,
                'available_amount' => $this->available_amount,
                'measurement' => $this->measurement,
            ];
            $query_str = QueryBuilder::buildUpdateQuery("products", $data);
            $query = $this->pdo->prepare($query_str);

            $data["id"] = $this->id;
            $query->execute(QueryBuilder::parametrize($data));
        } else {
            # insert the product
            $query = $this->pdo->prepare('INSERT INTO products (name, description, price, category_id, available_amount, measurement) VALUES (:name, :description, :price, :category_id, :available_amount, :measurement)');
            $query->bindValue(':name', $this->name, PDO::PARAM_STR);
            $query->bindValue(':price', $this->price, PDO::PARAM_INT);
            $query->bindValue(':category_id', $this->category_id, PDO::PARAM_INT);
            $query->bindValue(':available_amount', $this->available_amount, PDO::PARAM_INT);
            $query->bindValue(':measurement', $this->measurement, PDO::PARAM_STR);

            $query->execute();
            $this->id = $this->pdo->lastInsertId();
        }
    }

    static public function getAll(): array
    {
        global $pdo;
        $query = $pdo->prepare('
            select p.*, to_jsonb(c.*) as category
            from products p inner join categories c on p.category_id = c.id
        ');
        $query->execute();
        $rows = $query->fetchAll(PDO::FETCH_ASSOC);
        
        $results = [];
        foreach ($rows as $row) {
            $row['category'] = json_decode($row['category'] ?: '{}', true);
            unset($row['category_id']);
            $results[] = $row;
        }

        return $results;
    }
}
