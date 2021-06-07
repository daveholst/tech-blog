const postForm = document.querySelector('#new-post');


postForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const postData = Object.fromEntries(data.entries());
  try {
    const response = await axios.post('/api/post', postData)
    window.location.replace("/");
    console.log(postData);
  } catch (error) {

    console.error(error);
  }
});

