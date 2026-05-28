<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'auspaato_auspicious_user');       // Change to your MySQL username
define('DB_PASS', 'RIy?gr.^hlks&J6S');           // Change to your MySQL password
define('DB_NAME', 'auspaato_auspicious_database');

function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        die(json_encode([
            'success' => false,
            'message' => 'Database connection failed: ' . $conn->connect_error
        ]));
    }

    $conn->set_charset('utf8mb4');
    return $conn;
}
?>