<?php
session_start();

// Connect to the database
$db = new mysqli('mydb', 'dummy', 'c3322b', 'db3322');
unset($error);
$error = null;

if ($db->connect_error) {
    die('Connection failed: ' . $db->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['type'] === 'login') {
        // Get the username and password from the POST data
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Prepare a SQL statement to select the user with the provided username
        $stmt = $db->prepare('SELECT * FROM account WHERE email = ?');
        $stmt->bind_param('s', $username);
        $stmt->execute();

        // Get the result of the query
        $result = $stmt->get_result();

        // Fetch the user from the database
        $user = $result->fetch_assoc();

        // If the user was found and the provided password matches the hashed password in the database
        if ($user && password_verify($password, $user['password'])) {
            // The login credentials are valid
            // Store the user ID in the session
            $_SESSION['user_id'] = $user['id'];

            // Redirect to the chat page
            header('Location: chat.php');
            exit;
        } else {
            // The login credentials are not valid
            $error = 'Invalid username or password';
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
                    <label for="login-username">Username:</label>
                    <input type="text" id="login-username" name="username" required>
                    <label for="login-password">Password:</label>
                    <input type="password" id="login-password" name="password" required>
                    <input type="submit" value="Login">
                </form>
            </div>
            <p id="show-register">Don't have an account? <a href="#">Register</a>            
            <?php 
                if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($error)): ?>
                    <p class="error"><?php 
                    echo $error; ?></p>
            <?php endif; ?></p>

            <div id="register-container" class="form-container">
                <form id="register-form" method="POST" action="login.php">
                    <input type="hidden" name="type" value="register">
                    <label for="register-username">Username:</label>
                    <input type="text" id="register-username" name="username" required>
                    <label for="register-password">Password:</label>
                    <input type="password" id="register-password" name="password" required>
                    <input type="submit" value="Register">
                </form>
            </div>
            <p id="show-login" style="display: none;">Already have an account? <a href="#">Login</a></p>
    </div>
    <script src="login.js"></script>
</body>
</html>
