<?php

// Connect to the database
$dbconn = mysqli_connect('mydb', 'dummy', 'c3322b', 'db3322') or die('Could not connect: ' . mysqli_error($dbconn));
unset($error);
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['type'] === 'login') {
        // Get the username and password from the POST data
        $email = $_POST['email'];
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
                $error = 'Failed to Login. Incorrect password!!';
            }
        }
        else {
            $error = 'Failed to Login. Unknown user!!';
        }
    } else {
        if ($_POST['type'] === 'register') {
            // Get the username and password from the POST data
            $email = $_POST['email'];
            $password = $_POST['password'];

            // Prepare a SQL statement to insert the new user into the database
            $query = 'INSERT INTO account (useremail, password) VALUES ("'.$email.'", "'.$password.'")';
            $result = mysqli_query($dbconn, $query) or die('Query failed: ' . mysqli_error($dbconn));
            // print_r($query);
            session_start();
            $_SESSION['email'] = $email;
            header('Location: chat.php');
        }
    }
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
    <div id = "header">
        <h1>A Simple Chatroom Service</h1>
    </div> 
    <div id = container>       
        <h2>Login to Chatroom</h2>
        <div id="login-container" class="form-container active">      
            <form id="login-form" method="POST" action="login.php">
                <input type="hidden" name="type" value="login">
                <label for="login-username">Email:</label>
                <input type="text" id="login-username" name="email">
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" value="Login">
            </form>
        </div>
        <p id="show-register">Don't have an account? <a href="#">Register</a>            
        <?php 
            if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($error)): ?>
                <p class="error"><?php 
                echo $error; ?></p>
        <?php endif; ?>
        </p>

        <div id="register-container" class="form-container">
            <form id="register-form" method="POST" action="login.php">
                <input type="hidden" name="type" value="register">
                <label for="register-username">Email:</label>
                <input type="text" id="register-username" name="email">
                <label for="register-password">Password:</label>
                <input type="password" id="register-password" name="password">
                <input type="submit" value="Register">
            </form>
        </div>
        <p id="show-login" style="display: none;">Already have an account? <a href="#">Login</a></p>
        <p class="error" id="warning"></p>
    </div>
    <script src="login.js"></script>
</body>
</html>
