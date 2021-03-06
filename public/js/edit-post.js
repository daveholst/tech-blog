// save edits to db

const editPostForm = document.querySelector('#edit-post');

editPostForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const newPostData = Object.fromEntries(data.entries());
  const { postId } = event.target.dataset;
  try {
    const response = await axios.put(`/api/post/${postId}`, newPostData);
    // reload page
    window.location.assign('/dashboard');
  } catch (error) {
    console.error(error);
  }
});
