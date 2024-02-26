function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation for demonstration
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Try again.');
    }
}
