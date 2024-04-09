<?php
    header('Content-Type: application/json');
    $dbconn = mysqli_connect('mydb', 'dummy', 'c3322b', 'db3322');
    if (mysqli_connect_errno()) {
        echo json_encode(['success' => false, 'found'=>false]);
        exit;
    }
    $email = mysqli_real_escape_string($dbconn, $_GET['email']);
    $query = 'SELECT * FROM account WHERE useremail ="'.$email.'"';
    $result = mysqli_query($dbconn, $query) or die('Query failed: ' . mysqli_error($dbconn));
    if (mysqli_num_rows($result)> 0) {   
        echo json_encode(['success'=> true, 'found' => true]);
    } else {
        echo json_encode(['success'=>true, 'found'=>false]);
    }
?>