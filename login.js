document.addEventListener('DOMContentLoaded', function() {
    var showRegister = document.getElementById('show-register');
    var showLogin = document.getElementById('show-login');
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    var loginHeader = document.querySelector('#container h2');

    showRegister.addEventListener('click', function(event) {
        event.preventDefault();
        var warningContainer = document.getElementById('register-warning');  
        warningContainer.innerHTML = '';
        var errorContainer = document.getElementById('login-warning');
        errorContainer.innerHTML = '';
        console.log("register clicked");
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
        loginHeader.textContent = 'Register an Account';
        document.documentElement.style.setProperty('--form-title', '"Register"');
        showLogin.style.display = 'block';
        showRegister.style.display = 'none';
    });

    showLogin.addEventListener('click', function(event) {
        event.preventDefault();
        var warningContainer = document.getElementById('register-warning');  
        warningContainer.innerHTML = '';
        var errorContainer = document.getElementsByClassName('error');
        errorContainer.innerHTML = '';
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
        loginHeader.textContent = 'Login to Chatroom';
        document.documentElement.style.setProperty('--form-title', '"Login"');
        showRegister.style.display = 'block';
        showLogin.style.display = 'none';
    });
});

// Get the email field and the warning container
var emailField = document.getElementById('login-username');
// Add an event listener for the blur event of the email field    
var warning = document.getElementById('login-warning');  

emailField.addEventListener('focus', function() {
    warning.innerHTML = '';
});

emailField.addEventListener('blur', async function() {
    // Clear the warning container
    warning.innerHTML = '';
    // Validate the email domain
    var email = emailField.value;
    if (!email) {
        warning.textContent = 'Missing Email Address!!';
    } else if (!email.endsWith('@connect.hku.hk')) {
        warning.textContent = 'Please enter a valid HKU @connect email address.';
    } 
    else{try {
            const bodyData = 'check.php?email=' + encodeURIComponent(email);
            const response = await fetch(bodyData, {method: 'GET'});
            const data = await response.json(); // This is the parsed JSON
            console.log(data); // Log the parsed JSON to the console
            if (data.success) {
                if (data.found) {
                    warning.innerHTML = "";
                } else {
                    warning.innerHTML = "Cannot find your email record";
                }
            }
        } catch(err) {
            console.log('Error when checking the email:', err);
        }
    }
});

// Get the login form and add an event listener for the submit event
var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    // Clear the warning container
    var warningContainer = document.getElementById('login-warning');
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

var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    var warning = document.getElementById('login-warning');  
    warning.innerHTML = '';

    // Check if all required fields are filled
    var email = emailField.value;
    var password = document.getElementById('login-password').value;
    if (!email) {
        warning.textContent = 'Missing Email Address!!';
        // Prevent the form submission
        event.preventDefault();
    }
    if (!password) {
        warning.textContent = 'Please provide the password';
        // Prevent the form submission
        event.preventDefault();
    }
});

// Get the register form fields and the warning container
var registerEmailField = document.getElementById('register-username');
var registerPasswordField = document.getElementById('register-password');
var registerConfirmField = document.getElementById('confirm-password');
var registerWarning = document.getElementById('register-warning');
const registerForm = document.getElementById('register-form');


// Clear the warning when the email field is focused
registerEmailField.addEventListener('focus', function() {
    registerWarning.innerHTML = '';
});

// Clear the warning when the password field is focused
// Add an event listener for the blur event of the email field
registerEmailField.addEventListener('blur', async function() {
    // Clear the warning container
    console.log("blur");
    registerWarning.innerHTML = '';

    // Validate the email domain
    var email = registerEmailField.value;
    if (!email) {
        registerWarning.textContent = 'Missing Email Address!!';
    } else if (!email.endsWith('@connect.hku.hk')) {
        registerWarning.textContent = 'Please enter a valid HKU @connect email address.';
    } else{
        try {
            const bodyData = 'check.php?email=' + encodeURIComponent(email);
            const response = await fetch(bodyData, {method: 'GET'});
            const data = await response.json(); // This is the parsed JSON
            console.log(data); // Log the parsed JSON to the console
            if (data.success) {
                if (data.found) {
                    registerWarning.innerHTML = "You have registered before!!";
                } else {
                    registerWarning.innerHTML = "";
                }
            }
        } catch(err) {
            console.log('Error when checking the email:', err);
        }
    
    }
});

// Add an event listener for the blur event of the password field
registerPasswordField.addEventListener('blur', function() {
    // Clear the warning container
    registerWarning.innerHTML = '';

    // Validate the password
    var password = registerPasswordField.value;
    if (!password) {
        registerWarning.textContent = 'Missing Password!!';
    } 
});

// Add an event listener for the blur event of the confirm password field
registerConfirmField.addEventListener('blur', function() {
    // Clear the warning container
    registerWarning.innerHTML = '';

    // Validate the confirm password
    var password = registerPasswordField.value;
    var confirmPassword = registerConfirmField.value;
    if (password !== confirmPassword) {
        registerWarning.textContent = 'Passwords do not match!!';
    } 
});

registerForm.addEventListener('submit', function(event) {
    // Clear the warning container
    registerWarning.innerHTML = '';

    // Validate the confirm password
    var password = registerPasswordField.value;
    var confirmPassword = registerConfirmField.value;
    if (password !== confirmPassword) {
        registerWarning.textContent = 'Passwords do not match!!';
    } 
});

loginForm.addEventListener('submit', function(event) {
    const loginWarning = document.getElementById('login-warning');
    
    // Check if the register-warning is not empty
    if (loginWarning.textContent.trim() !== '') {
        // If the register-warning is not empty, prevent the form submission
        console.log("warning");
        event.preventDefault();
    }
});

registerForm.addEventListener('submit', function(event) {
    const registerWarning = document.getElementById('register-warning');
    
    // Check if the register-warning is not empty
    if (registerWarning.textContent.trim() !== '') {
        // If the register-warning is not empty, prevent the form submission
        console.log("warning");
        event.preventDefault();
    }
});