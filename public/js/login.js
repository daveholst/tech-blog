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

// * Modal handlers
// open when login from nav is clicked
loginButton.addEventListener('click', () => {
  loginModal.classList.toggle('is-active');
})
// open when signup from nav is clicked
signupButton.addEventListener('click', () => {
  signupModal.classList.toggle('is-active');
})

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

