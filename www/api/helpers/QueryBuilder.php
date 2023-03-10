<?php

class QueryBuilder {
    static function filterNotNull ($data) {
        return array_filter($data, function ($value) {
            return $value !== null;
        });
    }
    static function buildUpdateQuery($table, $data) : string {
        $data = QueryBuilder::filterNotNull($data);

        $set_pairs = [];
        foreach (array_keys($data) as $key) {
            $set_pairs[] = "{$key} = :{$key}";
        }

        $set_string = implode(', ', $set_pairs);

        return "UPDATE $table SET $set_string WHERE id = :id";
    }

    static function buildUpdateProductQuery($product) : string {

        $data = QueryBuilder::filterNotNull([
            'amount' => $product->amount,
        ]);

        $set_pairs = [];
        foreach (array_keys($data) as $key) {
            $set_pairs[] = "{$key} = :{$key}";
        }

        $set_string = implode(', ', $set_pairs);

        return "UPDATE sales_products SET $set_string WHERE product_id = :p_id AND sale_id = :s_id";
    }


    static function parametrize($data) {
        $data = QueryBuilder::filterNotNull($data);
        $parameters = [];
        foreach ($data as $key => $value) {
            $parameters[':' . $key] = $value;
        }
        return $parameters;
    }
}