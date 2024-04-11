# Web Chat Application

The Web Chat Application is a web-based chat platform that allows users to register, log in, and exchange real-time messages with other users. It is built using PHP, MySQL, JavaScript, and AJAX technologies.
The application allows users to register and log in using their "@connect" email addresses. Once logged in, users can exchange real-time messages with other logged-in users in the chatroom.

Features
User registration and login using "@connect" email addresses
Real-time messaging in the chatroom
Session control to manage user logins and logouts
Client-side validation of user input
Polled updates for new chat messages
Styling and dynamic features using CSS and JavaScript
Requirements
LAMP (Linux, Apache, MySQL, PHP) environment with Docker containers
PHP 7.x or higher
MySQL database (specified as "db3322")

Installation
Set up a LAMP environment with Docker containers.
Clone or download the project repository to your local machine.
Configure the web server to serve the application from the "public_html" directory.
Import the provided SQL statement to create the "account" table in the "db3322" database.
Ensure that the necessary PHP and MySQL configurations are correctly set up.

Usage
Access the application through the web server's URL.
Register or log in using your "@connect" email address.
Once logged in, you will be redirected to the chatroom page.
In the chatroom, you can view and send messages in real-time.
To log out, click the "Logout" button.
Users who attempt to access unauthorized pages will be redirected to the login page.
The application provides client-side validation for registration and login forms.

Files and Components
login.php - User registration and login page.
check.php - PHP program to handle AJAX requests for user authentication and registration.
login.css - CSS styling file for the login page.
login.js - JavaScript file for dynamic features on the login page.
chat.php - Chatroom page for reading and sending messages.
chatmsg.php - PHP program to handle AJAX requests for sending and downloading chat messages.
chat.css - CSS styling file for the chatroom page.
chat.js - JavaScript file for messaging functionality on the chatroom page.
