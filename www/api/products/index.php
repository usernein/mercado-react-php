<?php
require_once(__DIR__.'/../models/Product.php');
require_once(__DIR__.'/../helpers/response.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    # return specified product if a id is passed in query params
    if (isset($_GET['id'])) {
        $product = new Product($_GET['id']);
        $product->load();
        if (!$product->id) {
            Response::error(404);
        }
        Response::json($product);
    } else {
        $products = Product::getAll();
        Response::json($products);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $product = new Product();

    if (isset($_POST['id'])) {
        $product->id = $_POST['id'];
    }
    $product->name = $_POST['name'];
    $product->description = $_POST['description'];
    $product->price = $_POST['price'];
    $product->category_id = $_POST['category_id'];
    $product->available_amount = $_POST['available_amount'];
    $product->store();

    $status_code = isset($_POST['id']) ? 200 : 201;
    Response::json($product, $status_code);
}