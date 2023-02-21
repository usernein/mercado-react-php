<?php

class Response {
    static public function json($data, $status = 200) {
        header('Content-Type: application/json');
        http_response_code($status);
        echo json_encode($data, JSON_PRETTY_PRINT);
        exit();
    }

    static public function error($status = 400) {
        http_response_code($status);
        exit();
    }
}