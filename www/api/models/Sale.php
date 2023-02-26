<?php

require_once(__DIR__.'/../../config/database.php');

class Sale {
    private $pdo;
    public $id;
    public $cart;
    public $date;

    public function __construct($id = 0, $cart = null, $date = null) {
        global $pdo;
        $this->pdo = $pdo;
        $this->id = $id;
        $this->cart = $cart;
        $this->date = $date;
    }

    public function load() {
        $query = $this->pdo->prepare('SELECT * FROM db.sales WHERE id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);
        
        $this->id = $result['id'];
        $this->cart = $result['cart'];
        $this->date = $result['date'];
    }

    public function store() {
        $result = false;
        if ($this->id) {
            $query = $this->pdo->prepare('SELECT * FROM db.sales WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);
        }
        
        if ($result) {
            # update the product
            $query = $this->pdo->prepare('UPDATE db.sales SET cart = :cart, date = :date WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->bindValue(':cart', $this->cart, PDO::PARAM_STR);
            $query->bindValue(':date', $this->date, PDO::PARAM_STR);
            $query->execute();
        } else {
            # insert the product
            $query = $this->pdo->prepare('INSERT INTO db.sales (cart, date) VALUES (:cart, :date)');
            $query->bindValue(':cart', $this->cart, PDO::PARAM_STR);
            $query->bindValue(':date', $this->date, PDO::PARAM_STR);
            $query->execute();
            $this->id = $this->pdo->lastInsertId();
        }
    }

    static public function getAll() {
        global $pdo;
        $query = $pdo->prepare('SELECT * FROM db.sales');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
}