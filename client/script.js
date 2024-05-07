document.getElementById('loginBtn').addEventListener('click', function() {
  var loginContainer = document.getElementById('loginContainer');
  var signupContainer = document.getElementById('signupContainer');
  
  // Toggle visibility of login form
  if (loginContainer.classList.contains('show-login')) {
    loginContainer.classList.remove('show-login');
  } else {
    loginContainer.classList.add('show-login');
    signupContainer.classList.remove('show-signup'); // Ensure signup form is hidden when showing login form
  }
});

document.getElementById('signupLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var signupContainer = document.getElementById('signupContainer');
  var loginContainer = document.getElementById('loginContainer');

  // Toggle visibility of signup form
  if (signupContainer.classList.contains('show-signup')) {
    signupContainer.classList.remove('show-signup');
  } else {
    signupContainer.classList.add('show-signup');
    loginContainer.classList.remove('show-login'); // Ensure login form is hidden when showing signup form
  }
});
