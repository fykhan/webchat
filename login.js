document.addEventListener('DOMContentLoaded', function() {
    var showRegister = document.getElementById('show-register');
    var showLogin = document.getElementById('show-login');
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    var loginHeader = document.querySelector('#container h2');

    showRegister.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
        loginHeader.textContent = 'Register an Account';
        document.documentElement.style.setProperty('--form-title', '"Register"');
        showLogin.style.display = 'block';
        showRegister.style.display = 'none';
    });

    showLogin.addEventListener('click', function(event) {
        event.preventDefault();
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
        loginHeader.textContent = 'Login to Chatroom';
        document.documentElement.style.setProperty('--form-title', '"Login"');
        showRegister.style.display = 'block';
        showLogin.style.display = 'none';
    });
});

// Get the email field and the warning container
var emailField = document.getElementById('register-username');

// Add an event listener for the blur event of the email field
emailField.addEventListener('blur', function() {
    // Clear the warning container
    warningContainer.innerHTML = '';

    // Validate the email domain
    var email = emailField.value;
    if (!email.endsWith('@connect.hku.hk')) {
        var warning = document.getElementById('register-warning');
        warning.textContent = 'Please enter a valid HKU @connect email address.';
    }
});

// Get the login form and add an event listener for the submit event
var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    // Clear the warning container
    warningContainer.innerHTML = '';

    // Check if all required fields are filled
    var email = emailField.value;
    var password = document.getElementById('login-password').value;
    if (!email) {
        var warning = document.getElementById('login-warning');
        warning.textContent = 'Missing Email Address!!';
        // Prevent the form submission
        event.preventDefault();
    }
    if (!password) {
        var warning = document.getElementById('login-warning');
        warning.textContent = 'Please provide the password';
        // Prevent the form submission
        event.preventDefault();
    }
});

var registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {
    warningContainer.innerHTML = '';

    // Check if all required fields are filled
    var email = emailField.value;
    var password = document.getElementById('login-password').value;
    if (!email) {
        var warning = document.getElementById('login-warning');
        warning.textContent = 'Missing Email Address!!';
        // Prevent the form submission
        event.preventDefault();
    }
    if (!password) {
        var warning = document.getElementById('login-warning');
        warning.textContent = 'Please provide the password';
        // Prevent the form submission
        event.preventDefault();
    }
});