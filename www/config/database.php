<?php

# Get PostgreSQL connection info from database.env
$data = parse_ini_file(__DIR__.'/./database.env');
$db_host = $data['DB_HOST'];
$db_port = $data['DB_PORT'];
$db_name = $data['DB_NAME'];
$db_user = $data['DB_USER'];
$db_pass = $data['DB_PASS'];

# Connect to a PostgreSQL database using PDO
$dsn = "pgsql:host={$db_host};port={$db_port};dbname={$db_name}";
$pdo = new PDO($dsn, $db_user, $db_pass);