<?php
require_once(__DIR__.'/../../models/Category.php');
require_once(__DIR__.'/../../helpers/common.php');
require_once(__DIR__.'/../../helpers/response.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    # return specified category if a id is passed in query params
    if (isset($_GET['id'])) {
        if (!is_numeric($_GET['id'])) {
            Response::error(400);
        }
        $category = new Category();
        $category->id = $_GET['id'];
        $category->load();
        if (!$category->id) {
            Response::error(404);
        }
        Response::json($category);
    } else {
        $categories = Category::getAll();
        Response::json($categories);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $category = new Category();

    if (isset($_POST['id'])) {
        $category->id = $_POST['id'];
    }
    $category->name = $_POST['name'];
    $category->tax_percentage = $_POST['tax_percentage'];
    $category->store();
    $category->load();

    $status_code = isset($_POST['id']) ? 200 : 201;
    Response::json($category, $status_code);
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $category = new Category();
    $category->id = $_GET['id'];
    if ($category->delete() === 0) {
        Response::error(404);
    }

    Response::json([]);
}