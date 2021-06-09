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
