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