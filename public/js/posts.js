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
      if (document.querySelector('#nav-login').textContent.includes('Log In')) {
        window.location.assign('/please-login')
      } else {
        form.classList.toggle('is-hidden')
      }
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
// show buttons if logged in
const allCommentControls = document.querySelectorAll('.comment-controls');

allCommentControls.forEach(controls => {
  if (!document.querySelector('#nav-login').textContent.includes('Log In')) {
    controls.classList.toggle('is-hidden');
  }
});

// delete comments
let allDeleteBtns = document.querySelectorAll('.comment-delete-button')

allDeleteBtns.forEach(button => {
  button.addEventListener('click', async (event) => {
    try {
      if (document.querySelector('#nav-login').textContent.includes('Log In')) {
        window.location.assign('/please-login')
      } else {
        const commentId = event.target.dataset.commentId
        response = await axios.delete(`/api/comment/${commentId}`);
        window.location.assign('/');
      }

    } catch (error) {
      console.error(error)
    }

  })
});
