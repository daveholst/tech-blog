// delete post

const allDeleteButtons = document.querySelectorAll('.post-delete-button');

allDeleteButtons.forEach((delBtn) => {
  delBtn.addEventListener('click', async (event) => {
    console.log('del clicked');
    try {
      const { postId } = event.target.dataset;
      await axios.delete(`api/post/${postId}`);
      window.location.assign('/dashboard');
    } catch (error) {
      console.error(error);
    }
  });
});

// show edit window for comments
const allEditButtons = document.querySelectorAll('.edit-comment-button');

allEditButtons.forEach((editBtn) => {
  editBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const editForm = document.querySelector(
      `#edit-form-${event.target.dataset.commentId}`
    );
    editForm.classList.toggle('is-hidden');
  });
});

// update post from form

const allEditCommentForms = document.querySelectorAll('.edit-comment-form');

allEditCommentForms.forEach((editForm) => {
  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newCommentData = Object.fromEntries(data.entries());
    console.log(newCommentData);
    const { commentId } = event.target.dataset;
    console.log(event.target.dataset);
    try {
      const response = await axios.put(
        `/api/comment/${commentId}`,
        newCommentData
      );
      // reload page
      window.location.assign('/dashboard');
    } catch (error) {
      console.error(error);
    }
  });
});
