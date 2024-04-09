<?php

    header('Content-Type: application/json');
    $dbconn = mysqli_connect('mydb', 'dummy', 'c3322b', 'db3322') or die('Could not connect: ' . mysqli_error($dbconn));

    if (mysqli_connect_errno()) {
        echo json_encode(['success' => false, 'message' => 'Connection error.']);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($_POST['type'] === 'login') {
            // Get the username and password from the POST data
            $email = $_POST['user'];
            $password = $_POST['password'];

            // Prepare a SQL statement to select the user with the provided username
            $query = 'SELECT * FROM account WHERE useremail ="'.$email.'"';
            $result = mysqli_query($dbconn, $query) or die('Query failed: ' . mysqli_error($dbconn));
            // print_r($query);
            if (mysqli_num_rows($result) > 0) {
                if ($password === mysqli_fetch_assoc($result)['password']) {
                    session_start();
                    $_SESSION['email'] = $email;
                    header('Location: chat.php');
                } else {
                    $loginerror = 'Failed to Login. Incorrect password!!';
                }
            }
            else {
                $loginerror = 'Failed to Login. Unknown user!!';
            }
        } else {
            if ($_POST['type'] === 'register') {
                // Get the username and password from the POST data
                $email = $_POST['user'];
                $password = $_POST['password'];
                
                // Prepare a SQL statement to check if the email already exists
                $query = 'SELECT * FROM account WHERE useremail = "'.$email.'"';
                $result = mysqli_query($dbconn, $query) or die('Query failed: ' . mysqli_error($dbconn));
                
                if (mysqli_num_rows($result) > 0) {
                    $registererror = 'This email is already registered!';
                } else {
                    $query = 'INSERT INTO account (useremail, password) VALUES ("'.$email.'", "'.$password.'")';
                    $result = mysqli_query($dbconn, $query) or die('Query failed: ' . mysqli_error($dbconn));
                    session_start();
                    $_SESSION['email'] = $email;
                    header('Location: chat.php');
                }
            }
        }
    }

?>