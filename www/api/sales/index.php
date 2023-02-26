<?php
require_once(__DIR__.'/../models/Sale.php');
require_once(__DIR__.'/../helpers/common.php');
require_once(__DIR__.'/../helpers/response.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    # return specified sale if a id is passed in query params
    if (isset($_GET['id'])) {
        $sale = new Sale($_GET['id']);
        $sale->load();
        if (!$sale->id) {
            Response::error(404);
        }
        Response::json($sale);
    } else {
        $sales = Sale::getAll();
        Response::json($sales);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $sale = new Sale();

    if (isset($_POST['id'])) {
        $sale->id = $_POST['id'];
    }
    $sale->cart = $_POST['cart'];
    $sale->date = $_POST['date'];
    $sale->store();

    $status_code = isset($_POST['id']) ? 200 : 201;
    Response::json($sale, $status_code);
}