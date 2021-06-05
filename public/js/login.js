const loginModal = document.querySelector('#login-modal');
const loginButton = document.querySelector('#nav-login');
const modalBackgrounds = document.querySelector(".modal-background")
const closeLoginModal = document.querySelector('#login-close');

// Modal handlers
// open when login from nav is clicked
loginButton.addEventListener('click', () => {
  loginModal.classList.toggle('is-active');
})

// close when modal-background is clicked
modalBackgrounds.addEventListener('click', () => {
  loginModal.classList.toggle('is-active');
})

// close when model 'X' is clicked
closeLoginModal.addEventListener('click', () => {
  loginModal.classList.toggle('is-active');
})