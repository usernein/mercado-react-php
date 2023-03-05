<?php
require_once(__DIR__.'/../models/Sale.php');
require_once(__DIR__.'/../helpers/common.php');
require_once(__DIR__.'/../helpers/response.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    # return specified sale if a id is passed in query params
    if (isset($_GET['id'])) {
        if (!is_numeric($_GET['id'])) {
            Response::error(400);
        }
        $sale = new Sale();
        $sale->id = $_GET['id'];
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
    $sale->finished = $_POST['finished'];
    $sale->store();
    $sale->load();

    $status_code = isset($_POST['id']) ? 200 : 201;
    Response::json($sale, $status_code);
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $sale = new Sale();
    $sale->id = $_GET['id'];
    if ($sale->delete() === 0) {
        Response::error(404);
    }
    Response::json([]);
}