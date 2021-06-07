const allPostDeleteBtns = document.querySelectorAll('.post-delete-button')

allPostDeleteBtns.forEach(button => {
  button.addEventListener('click', async (event) => {
    postId = event.target.dataset.postId;
    console.log(event.target.dataset.postId);
    await axios.delete(`/api/post/${postId}`)
    window.location.assign("/");
  })
});



