<?php
    // Start the session
    session_start();

    // Check if the user is logged in
    if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
        // If the user is not logged in, redirect them to the login page
        header('Location: login.php');
        exit;
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>Simple Chatroom Service</title>
    <link rel="stylesheet" type="text/css" href="chat.css">
</head>
<body>
    <header>
        <h1>A Simple Chatroom Service</h1>
    </header>
    <div id="chat-container">
        <div id="message-window"></div>
        <div id="input-area">
            <input type="text" id="message-input">
            <button id="send-button">SEND</button>
        </div>
        <button id="logout-button">Logout</button>
    </div>
    <script src="chat.js"></script>
    <script>
        var username = "<?php echo str_replace('@connect.hku.hk', '', $_SESSION['email']); ?>";
    </script>
</body>
</html>