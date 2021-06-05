const signupForm = document.querySelector('#signup-form')

// handle signup submission
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target);
  const data = new FormData(event.target);
  const signupData = Object.fromEntries(data.entries());
  console.log(signupData);

})