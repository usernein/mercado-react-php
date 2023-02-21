<?php
require_once(__DIR__.'/../../models/Category.php');
require_once(__DIR__.'/../../helpers/response.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    # return specified category if a id is passed in query params
    if (isset($_GET['id'])) {
        $category = new Category($_GET['id']);
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
    $category->description = $_POST['description'];
    $category->tax_percentage = $_POST['tax_percentage'];
    $category->store();

    $status_code = isset($_POST['id']) ? 200 : 201;
    Response::json($category, $status_code);
}