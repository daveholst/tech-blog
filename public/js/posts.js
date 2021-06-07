const allPostDeleteBtns = document.querySelectorAll('.post-delete-button')
const allCommentBtns = document.querySelectorAll('.comment-on-post')
const allCommentForms = document.querySelectorAll('.comment-form')
const allPostBtns = document.querySelectorAll('.post-comment-button')

allPostDeleteBtns.forEach(button => {
  button.addEventListener('click', async (event) => {
    postId = event.target.dataset.postId;
    console.log(event.target.dataset.postId);
    await axios.delete(`/api/post/${postId}`)
    window.location.assign("/");
  })
});
// show / hide comment form
allCommentBtns.forEach(button => {
  button.addEventListener('click', () => {
    allCommentForms.forEach(form => {
      form.classList.toggle('is-hidden')
    });
  })
});
console.log(allPostBtns);
// post comments
allCommentForms.forEach(form => {

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const postId = event.target[1].dataset.postId
      const data = new FormData(event.target);
      const commentData = Object.fromEntries(data.entries());
      response = await axios.post('/api/comment/',{ postId, content: commentData.content })
      window.location.assign('/')
    } catch (error) {
      console.error(error);
    }

  })
});

