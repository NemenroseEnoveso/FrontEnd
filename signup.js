
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Store user credentials (for demonstration purposes)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Sign Up Successful! You can now Sign In.');
    window.location.href = 'SignIn.html'; // Redirect to Sign In
  });

