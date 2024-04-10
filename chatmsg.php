<?php
session_start();

$dbconn = mysqli_connect("mydb", "dummy", "c3322b", "db3322");
if (mysqli_connect_errno()) {
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit;
}
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $type = $_POST['type'];
    if($type == 'upload'){
        $time = intval($_POST['time']);
        $_SESSION['last_active'] = $time;
        $user = $_POST['username'];
        $message = mysqli_real_escape_string($dbconn, $_POST['message']);
        $query = "INSERT INTO message (time, message, person) VALUES ('".$time."', '".$message."', '".$user."')";
        $result = mysqli_query($dbconn, $query);
        if ($result) {
            // Fetch the latest messages after inserting a new message
            $query = "SELECT * FROM message WHERE time > " . (time() - 3600);
            $result = mysqli_query($dbconn, $query);
            $messages = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode(['success' => true, 'messages' => $messages]);
        } else {
            echo json_encode(['success' => false, 'error' => mysqli_error($dbconn)]);
        }
    }
} elseif($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM message WHERE time > " . (time() - 3600);
    $result = mysqli_query($dbconn, $query);
    if ($result) {
        $messages = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode(['success' => true, 'messages' => $messages]);
    } else {
        echo json_encode(['success' => false, 'error' => mysqli_error($dbconn)]);
    }
}

$_SESSION['last_active'] = time();
?>