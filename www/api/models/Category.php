<?php

require_once(__DIR__.'/../../config/database.php');
require_once(__DIR__.'/../helpers/QueryBuilder.php');

class Category {
    private $pdo;
    public $id;
    public $name;
    public $tax_percentage;
    public $created_at;
    public $products;


    public function __construct() {
        global $pdo;
        $this->pdo = $pdo;
    }

    public function load() {
        // $query = $this->pdo->prepare('SELECT * FROM categories WHERE id = :id');
        $query = $this->pdo->prepare("
            select c.*, jsonb_object_agg(p.id, to_jsonb(p) - 'category_id') products
            from products p
            inner join categories c on p.category_id = c.id
            where c.id = :id
            group by c.id
        ");
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        $this->id = $result['id'];
        $this->name = $result['name'];
        $this->tax_percentage = $result['tax_percentage'];
        $this->created_at = $result['created_at'];

        $this->products = array_values(json_decode($result['products'] ?: '[]', true));
    }

    public function delete() {
        $query = $this->pdo->prepare('DELETE FROM products WHERE category_id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();

        $query = $this->pdo->prepare('DELETE FROM categories WHERE id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        return $query->rowCount();
    }

    public function store() {
        $result = false;
        if ($this->id) {
            $query = $this->pdo->prepare('SELECT * FROM categories WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);
        }

        if ($result) {
            $data = [
                'name' => $this->name,
                'tax_percentage' => $this->tax_percentage,
            ];

            $query_str = QueryBuilder::buildUpdateQuery('categories', $data);
            $query = $this->pdo->prepare($query_str);

            $data["id"] = $this->id;
            $query->execute(QueryBuilder::parametrize($data));
        } else {
            # insert the product
            $query = $this->pdo->prepare('INSERT INTO categories (name, tax_percentage) VALUES (:name, :tax_percentage)');
            $query->bindValue(':name', $this->name, PDO::PARAM_STR);
            $query->bindValue(':tax_percentage', $this->tax_percentage, PDO::PARAM_INT);
            $query->execute();
            $this->id = $this->pdo->lastInsertId();
        }
    }

    static public function getAll() {
        global $pdo;
        $query = $pdo->prepare("
            select c.*, jsonb_object_agg(p.id, to_jsonb(p) - 'category_id') products
            from products p
            inner join categories c on p.category_id = c.id
            group by c.id
        ");
        $query->execute();
        $rows = $query->fetchAll(PDO::FETCH_ASSOC);

        $categories = [];
        foreach ($rows as $row) {
            $row['products'] = array_values(json_decode($row['products'] ?: '[]', true));
            $categories[] = $row;
        }

        return $categories;
    }

}