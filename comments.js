const commentButton = document.querySelectorAll('.comment');
const comment = document.querySelector('.comment-modal');
const commentCross = document.querySelector('.cross');
const bigDiv = document.querySelector('.big-div')

function showComments(){
    bigDiv.style.display = "inherit";
    comment.style.display = "flex";
}

function hideComments(){
    bigDiv.style.display = "none";
    comment.style.display = "none";
}

bigDiv.addEventListener('click', hideComments);
for (let i of commentButton){
    i.addEventListener('click', showComments);
}