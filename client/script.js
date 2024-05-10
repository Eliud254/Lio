document.getElementById('loginBtn').addEventListener('click', function() {
  var loginContainer = document.getElementById('loginContainer');
  var signupContainer = document.getElementById('signupContainer');
  var pricingDashboard = document.getElementById('pricingDashboard');
  
  // Toggle visibility of login form
  if (loginContainer.classList.contains('show-login')) {
    loginContainer.classList.remove('show-login');
  } else {
    loginContainer.classList.add('show-login');
    signupContainer.classList.remove('show-signup');
    pricingDashboard.classList.remove('show-pricing');
  }
});

document.getElementById('signupLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var signupContainer = document.getElementById('signupContainer');
  var loginContainer = document.getElementById('loginContainer');
  var pricingDashboard = document.getElementById('pricingDashboard');

  // Toggle visibility of signup form
  if (signupContainer.classList.contains('show-signup')) {
    signupContainer.classList.remove('show-signup');      
  } else {
    signupContainer.classList.add('show-signup');
    loginContainer.classList.remove('show-login');
    pricingDashboard.classList.remove('show-pricing');
  }
});

document.getElementById('pricingBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var pricingDashboard = document.getElementById('pricingDashboard');
  var loginContainer = document.getElementById('loginContainer');
  var signupContainer = document.getElementById('signupContainer');

  // Toggle visibility of pricing dashboard
  if (pricingDashboard.classList.contains('show-pricing')) {
    pricingDashboard.classList.remove('show-pricing');      
  } else {
    pricingDashboard.classList.add('show-pricing');
    loginContainer.classList.remove('show-login');
    signupContainer.classList.remove('show-signup');
  }
});
