<?php
    session_start();
    session_destroy();
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
            <form id="login-form" method="POST" action="check.php">
                <input type="hidden" name="type" value="login">
                <label for="login-username">Email:</label>
                <input type="text" id="login-username" name="user">
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" value="Login">
            </form>
        </div>
        <p id="show-register">Don't have an account? <a href="#">Register</a>            
            <p class="error" id="login-warning"> 
            </p>
        </p>

        <div id="register-container" class="form-container">
            <form id="register-form" method="POST" action="check.php">
                <input type="hidden" name="type" value="register">
                <label for="register-username">Email:</label>
                <input type="text" id="register-username" name="user">
                <label for="register-password">Password:</label>
                <input type="password" id="register-password" name="password">
                <label for="confirm-password">Confirm:</label>
                <input type="password" id="confirm-password" name="confirm-password">
                <input type="submit" value="Register">
            </form>
        </div>
        <p id="show-login" style="display: none;">Already have an account? <a href="#">Login</a></p>
        <p class="error" id="register-warning">
        </p>
    </div>
    <script src="login.js"></script>
</body>
</html>

