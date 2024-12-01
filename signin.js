
  document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Sign In Successful!');
      // Redirect to a dashboard or home page
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password!');
    }
  });
