
// NAV buttons
const loginButton = document.querySelector('#nav-login');
const signupButton = document.querySelector('#nav-signup');
// Login Modal
const loginModal = document.querySelector('#login-modal');
const loginCloseBtn = document.querySelector('#login-close-btn');
const loginBackground = document.querySelector('#login-bg')
// Signup Modal
const signupModal = document.querySelector('#signup-modal');
const signupCloseBtn = document.querySelector('#signup-close-btn');
const signupBackground = document.querySelector('#signup-bg')
// Hamburger
const navMenu = document.querySelector('#nav-menu');
const navBurger = document.querySelector('#burger');
// Login Form
const loginForm = document.querySelector('#login-form')

// * Modal handlers
// open when login from nav is clicked
loginButton.addEventListener('click', async () => {
  if (loginButton.textContent.includes('Log In')) {
    loginModal.classList.toggle('is-active');
  } else {
    try {
      const response = await axios.post('/api/users/logout')
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  }
})

// open when signup from nav is clicked
if (signupButton) {
  signupButton.addEventListener('click', () => {
    signupModal.classList.toggle('is-active');
  })
}
// close when login modal-background is clicked
loginBackground.addEventListener('click', () => {
  loginModal.classList.toggle('is-active');
})

// close login when model 'X' is clicked
loginCloseBtn.addEventListener('click', () => {
  loginModal.classList.toggle('is-active');
})
// close when login modal-background is clicked
signupBackground.addEventListener('click', () => {
  signupModal.classList.toggle('is-active');
})

// close login when model 'X' is clicked
signupCloseBtn.addEventListener('click', () => {
  signupModal.classList.toggle('is-active');
})

// login handler
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const loginData = Object.fromEntries(data.entries());
  const newProgress = document.createElement('progress');
  const newErrorMessage = document.createElement('h3')
  try {
    // add progress bar
    newProgress.classList.add('progress', 'is-medium', 'is-primary', 'mt-4');
    newProgress.textContent = '15%'
    loginForm.appendChild(newProgress);
    const response = await axios.post('/api/users/login', loginData)
    loginForm.removeChild(newProgress);
    // reload page
    window.location.replace("/");

  } catch (error) {
    loginForm.removeChild(newProgress);
    newErrorMessage.classList.add('has-text-danger', 'is-size-4', 'has-text-centered', 'has-text-weight-bold'	);
    newErrorMessage.textContent = 'Incorrect Username or Password'
    loginForm.appendChild(newErrorMessage);

    console.error(error);
  }

})


// !open hamburger -- copypasta from bulma.io docs
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});
// ! end copypasta