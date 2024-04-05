var emailField = document.getElementById('register-username');
var formValid = true;

emailField.addEventListener('blur', function() {
    var warning = document.getElementById('register-warning');
    warning.textContent = '';

    var email = emailField.value;
    if (!email.endsWith('@connect.hku.hk')) {
        warning.textContent = 'Please enter a valid HKU @connect email address.';
        formValid = false;
    }
    else {
        formValid = true;
    }
});

var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    var warning = document.getElementById('login-warning');
    warning.textContent = '';

    var email = emailField.value;
    var password = document.getElementById('login-password').value;
    if (!email || !password) {
        warning.textContent = 'Missing Email Address!!';
        formValid = false;
    }

    if (!formValid) {
        event.preventDefault();
    }
});