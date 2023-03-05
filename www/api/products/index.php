<?php
require_once(__DIR__.'/../models/Product.php');
require_once(__DIR__.'/../helpers/common.php');
require_once(__DIR__.'/../helpers/response.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    # return specified product if a id is passed in query params
    if (isset($_GET['id'])) {
        if (!is_numeric($_GET['id'])) {
            Response::error(400);
        }
        $product = new Product();
        $product->id = $_GET['id'];
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
    $product->price = $_POST['price'];
    $product->category_id = $_POST['category_id'];
    $product->available_amount = $_POST['available_amount'];
    $product->store();
    $product->load();

    $status_code = isset($_POST['id']) ? 200 : 201;

    Response::json($product, $status_code);
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $product = new Product();
    $product->id = $_GET['id'];
    if ($product->delete() === 0) {
        Response::error(404);
    }

    Response::json([]);
}