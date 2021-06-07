
let allDeleteBtns = document.querySelectorAll('.comment-delete-button')

allDeleteBtns.forEach(button => {
  button.addEventListener('click', async (event) => {
    console.log(event.target.dataset);
  })
});