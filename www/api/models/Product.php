<?php

require_once(__DIR__.'/../../config/database.php');

class Product {
    private $pdo;
    public $id;
    public $name;
    public $description;
    public $price;
    public $category_id;
    public $available_amount;
    
    public function __construct($id = null, $name = '', $description = '', $price = 0, $category_id = 0, $available_amount = 0) {
        global $pdo;
        $this->pdo = $pdo;
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->category_id = $category_id;
        $this->available_amount = $available_amount;
    }

    public function load() {
        $query = $this->pdo->prepare('SELECT * FROM products WHERE id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        $this->id = $result['id'];
        $this->name = $result['name'];
        $this->description = $result['description'];
        $this->price = $result['price'];
        $this->category_id = $result['category_id'];
        $this->available_amount = $result['available_amount'];
    }

    public function store() {
        $result = false;
        if ($this->id) {
            $query = $this->pdo->prepare('SELECT * FROM products WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);
        }

        if ($result) {
            # update the product
            $query = $this->pdo->prepare('UPDATE products SET name = :name, description = :description, price = :price, category_id = :category_id, available_amount = :available_amount WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->bindValue(':name', $this->name, PDO::PARAM_STR);
            $query->bindValue(':description', $this->description, PDO::PARAM_STR);
            $query->bindValue(':price', $this->price, PDO::PARAM_INT);
            $query->bindValue(':category_id', $this->category_id, PDO::PARAM_INT);
            $query->bindValue(':available_amount', $this->available_amount, PDO::PARAM_INT);
            $query->execute();
        } else {
            # insert the product
            $query = $this->pdo->prepare('INSERT INTO products (name, description, price, category_id, available_amount) VALUES (:name, :description, :price, :category_id, :available_amount)');
            $query->bindValue(':name', $this->name, PDO::PARAM_STR);
            $query->bindValue(':description', $this->description, PDO::PARAM_STR);
            $query->bindValue(':price', $this->price, PDO::PARAM_INT);
            $query->bindValue(':category_id', $this->category_id, PDO::PARAM_INT);
            $query->bindValue(':available_amount', $this->available_amount, PDO::PARAM_INT);
            $query->execute();
            $this->id = $this->pdo->lastInsertId();
        }
    }

    static public function getAll(): array {
        global $pdo;
        $query = $pdo->prepare('SELECT * FROM products');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
}