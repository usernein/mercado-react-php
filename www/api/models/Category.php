<?php

require_once(__DIR__.'/../../config/database.php');

class Category {
    private $pdo;
    public $id;
    public $name;
    public $description;
    public $tax_percentage;

    public function __construct($id = 0, $name = '', $description = '', $tax_percentage = 0) {
        global $pdo;
        $this->pdo = $pdo;
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->tax_percentage = $tax_percentage;
    }

    public function load() {
        $query = $this->pdo->prepare('SELECT * FROM categories WHERE id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        $this->id = $result['id'];
        $this->name = $result['name'];
        $this->description = $result['description'];
        $this->tax_percentage = $result['tax_percentage'];
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
            # update the product
            $query = $this->pdo->prepare('UPDATE categories SET name = :name, description = :description, tax_percentage = :tax_percentage WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->bindValue(':name', $this->name, PDO::PARAM_STR);
            $query->bindValue(':description', $this->description, PDO::PARAM_STR);
            $query->bindValue(':tax_percentage', $this->tax_percentage, PDO::PARAM_INT);
            $query->execute();
        } else {
            # insert the product
            $query = $this->pdo->prepare('INSERT INTO categories (name, description, tax_percentage) VALUES (:name, :description, :tax_percentage)');
            $query->bindValue(':name', $this->name, PDO::PARAM_STR);
            $query->bindValue(':description', $this->description, PDO::PARAM_STR);
            $query->bindValue(':tax_percentage', $this->tax_percentage, PDO::PARAM_INT);
            $query->execute();
            $this->id = $this->pdo->lastInsertId();
        }
    }

    static public function getAll() {
        global $pdo;
        $query = $pdo->prepare('SELECT * FROM categories');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

}