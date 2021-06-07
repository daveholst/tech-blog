const postForm = document.querySelector('#new-post');

postForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const data = new FormData(event.target);
    const postData = Object.fromEntries(data.entries());
    const response = await axios.post('/api/post', postData)
    window.location.assign("/");
    console.log(postData);
  } catch (error) {

    console.error(error);
  }
});

