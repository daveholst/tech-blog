const signupForm = document.querySelector('#signup-form');
const signupContent = document.querySelector('#signup-content');
const progressBar = `<progress class="progress is-small is-primary" max="100">15%</progress>`;
// signup poster

// handle signup submission
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(event.target);
  const data = new FormData(event.target);
  const signupData = Object.fromEntries(data.entries());
  try {
    // add progress bar
    const newProgress = document.createElement('progress');
    newProgress.classList.add('progress', 'is-small', 'is-primary', 'mt-4');
    newProgress.textContent = '15%';
    signupForm.appendChild(newProgress);
    const response = await axios.post('/api/users', signupData);
    console.log(response);
    // reload page
    window.location.replace('/');
  } catch (error) {
    console.error(error);
  }
});
