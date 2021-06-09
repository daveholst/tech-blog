// const allEditPostBtns = document.querySelectorAll('.edit-post-button')

// editPostBtns.forEach(editButton => {
//   editButton.addEventListener('click', ())
// });

// save edits to db
// const editPostForm = document.querySelector('#edit-post');

// editPostForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const data = new FormData(event.target);
//   const newPostData = Object.fromEntries(data.entries());

//   const { postId } = event.target.dataset;

//   try {
//     const response = await axios.put(`/api/post/${postId}`, newPostData);
//     // reload page
//     window.location.assign('/dashboard');
//   } catch (error) {
//     console.error(error);
//   }
// });

// delete post

const allDeleteButtons = document.querySelectorAll('.post-delete-button');
console.log(allDeleteButtons);

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
