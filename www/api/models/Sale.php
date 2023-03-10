<?php

require_once(__DIR__ . '/../../config/database.php');
require_once(__DIR__ . '/../helpers/QueryBuilder.php');

class Sale
{
    private $pdo;
    public $id;
    public $created_at;
    public $finished;
    public $products;
    public $taxes_price;
    public $total_price;

    public function __construct()
    {
        global $pdo;
        $this->pdo = $pdo;
    }
    public function load()
    {
        // $query = $this->pdo->prepare('SELECT * FROM sales WHERE id = :id');
        $query = $this->pdo->prepare("
            select
                s.*,
                coalesce (jsonb_object_agg(sp.id, to_jsonb(sp) - 'id' - 'sale_id') filter (
                where sp.id is not null) ,
                '[]') as products
            from
                sales s
            left join sales_products sp on
                sp.sale_id = s.id
            where
                s.id = :id
            group by
                s.id ;
        ");
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        $this->id = $result['id'];
        $this->created_at = $result['created_at'];
        $this->finished = $result['finished'];
        $this->taxes_price = $result['taxes_price'];
        $this->total_price = $result['total_price'];

        $this->products = array_values(json_decode($result['products'] ?: '[]', true));
    }

    public function delete()
    {
        if ($this->products) {
            $rowCount = 0;
            foreach ($this->products as $product) {
                $query = $this->pdo->prepare('DELETE FROM sales_products WHERE sale_id = :s_id AND product_id = :p_id');
                $query->bindValue(':s_id', $this->id, PDO::PARAM_INT);
                $query->bindValue(':p_id', $product->id, PDO::PARAM_INT);
                $query->execute();
                $rowCount += $query->rowCount();
            }
            return $rowCount;
        }
        $query = $this->pdo->prepare('DELETE FROM sales_products WHERE sale_id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();

        $query = $this->pdo->prepare('DELETE FROM sales WHERE id = :id');
        $query->bindValue(':id', $this->id, PDO::PARAM_INT);
        $query->execute();
        return $query->rowCount();
    }

    public function store()
    {
        $result = false;
        if ($this->id) {
            $query = $this->pdo->prepare('SELECT * FROM sales WHERE id = :id');
            $query->bindValue(':id', $this->id, PDO::PARAM_INT);
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);
        }

        if ($result) {
            $data = [
                'finished' => $this->finished,
                'taxes_price' => $this->taxes_price,
                'total_price' => $this->total_price,
            ];

            $filtered = QueryBuilder::filterNotNull($data);
            if (count($filtered) >= 1) {
                $query_str = QueryBuilder::buildUpdateQuery('sales', $data);
                $query = $this->pdo->prepare($query_str);

                $data["id"] = $this->id;
                $query->execute(QueryBuilder::parametrize($data));
            }

            if ($this->products) {
                foreach ($this->products as $product) {
                    $query = $this->pdo->prepare('SELECT * FROM sales_products WHERE sale_id = :s_id AND product_id = :p_id');
                    $query->bindValue(':s_id', $this->id, PDO::PARAM_INT);
                    $query->bindValue(':p_id', $product->id, PDO::PARAM_INT);
                    $query->execute();
                    $result = $query->fetch(PDO::FETCH_ASSOC);
                    if (!$result) {
                        $data = [
                            'product_id' => $product->id,
                            'sale_id' => $this->id,
                            'amount' => $product->amount,
                        ];
                        if ($data['amount'] > 0) {
                            $query = $this->pdo->prepare("INSERT INTO sales_products (product_id, sale_id, amount) VALUES (:product_id, :sale_id, :amount)");
                            $query->execute(QueryBuilder::parametrize($data));
                        }
                        return;
                    }
                    $data = [];
                    $data["s_id"] = $this->id;
                    $data["p_id"] = $product->id;
                    $data["amount"] = $product->amount;

                    if ($data['amount'] <= 0) {
                        $query = $this->pdo->prepare('DELETE FROM sales_products WHERE sale_id = :s_id AND product_id = :p_id');
                        $query->bindValue(':s_id', $this->id, PDO::PARAM_INT);
                        $query->bindValue(':p_id', $product->id, PDO::PARAM_INT);
                        $query->execute();
                        return;
                    }

                    $query_str = QueryBuilder::buildUpdateProductQuery($product);
                    $query = $this->pdo->prepare($query_str);
                    $query->execute(QueryBuilder::parametrize($data));
                }
            }
        } else {
            # insert the product
            $query = $this->pdo->prepare('INSERT INTO sales (finished) VALUES (:finished)');
            $query->bindValue(':finished', strtolower($this->finished) === "true", PDO::PARAM_BOOL);
            $query->execute();
            $this->id = $this->pdo->lastInsertId();

            if ($this->products) {
                $query = $this->pdo->prepare('INSERT INTO sales_products (sale_id, product_id, amount) VALUES (:sale_id, :product_id, :amount)');
                foreach ($this->products as $product) {
                    $query->bindValue(':sale_id', $this->id, PDO::PARAM_INT);
                    $query->bindValue(':product_id', $product->id, PDO::PARAM_INT);
                    $query->bindValue(':amount', $product->amount, PDO::PARAM_INT);
                    $query->execute();
                }
            }
        }
    }

    static public function getAll()
    {
        global $pdo;
        $query = $pdo->prepare("
            select
                s.*,
                coalesce (jsonb_object_agg(sp.id, to_jsonb(sp) - 'id' - 'sale_id') filter (
                where sp.id is not null) ,
                '[]') as products
            from
                sales s
            left join sales_products sp on
                sp.sale_id = s.id
            group by
                s.id ;
        ");
        $query->execute();
        $rows = $query->fetchAll(PDO::FETCH_ASSOC);

        $sales = [];
        foreach ($rows as $row) {
            $row['products'] = array_values(json_decode($row['products'] ?: '[]', true));
            $sales[] = $row;
        }

        return $sales;
    }
}
