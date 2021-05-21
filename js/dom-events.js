function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {
   var textArea = document.getElementById("user-input")
    var newPost = document.createElement("textarea");
    newPost.innerText = textArea.value
    document.getElementById("blog-container").prepend(newPost)
}


function addReply() {
    var textArea = document.getElementById("reply")
    var newReply = document.createElement("textarea");
    newReply.innerText = textArea.value
    document.getElementById("blog-container").prepend(newReply)
}

addButtonEvent();