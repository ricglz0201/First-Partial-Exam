(() => {
  const userNameInput = document.getElementById('userName');
  const userCommentInput = document.getElementById('userComment');
  const comments = document.getElementById('sectionComments')

  function createCommentNode(name, comment) {
    const commentNode = document.createElement('div');
    commentNode.className = 'comment-box'
    commentNode.innerHTML = `
      <div class="comment-and-name">
        <h4 class="name">${name}</h4>
        <p class="comment">${comment}</p>
      </div>
      <div class="button-side">
        <button id="delete-btn">Delete</button>
      </div>
    `
    return commentNode;
  }

  function removeComment(event) {
    event.preventDefault();
    const comment = event.target.parentNode.parentNode;
    comment.remove();
  }

  function addComment(name, comment) {
    const commentNode = createCommentNode(name, comment);
    commentNode.querySelector('button#delete-btn')
               .addEventListener('click', removeComment);
    comments.appendChild(commentNode);
  }

  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const name = userNameInput.value;
    const comment = userCommentInput.value;
    if(name !== '' && comment != '') {
      addComment(name, comment);
    }
  })
})();
