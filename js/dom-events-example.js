const body = document.body; // THIS IS CASEY'S EXAMPLE. DO YOUR OWN****
renderHomePage();
function renderBlogPage(){
    // be sure to empty out the html body before running anything else in this function!
    // calls functions that add components to blog page, like:
    // getNavBar();
    // getBlogArea();
}
function renderHomePage(){
    // be sure to empty out the html body before running anything else in this function!
    // calls functions that add components to blog page, like:
    // getNavBar();
    // whatever else you decide to build for your home page!
}
function addButtonEvent() {
    // adds event and listener to blog form button
}
function addPost() {
    // button listener for adding a blog post to page
}
function buildBlogPost() {
    // orchestrates building a blog post html node
    // uses the three methods below to add children to the blog node that it returns to addPost()
}
function getDateNode() {
    // builds and returns node for the date
}
function getBlogTextNode() {
    // builds and returns node for the post text from the form
}
function getNameNode(){
    // builds and returns node for the name text from the form
}
// Use to remove your static blog-related html and serve it from the DOM as a node
function getBlogArea(){
    body.innerHTML += `<div class="container">
        <div class="row my-5 mx-3 p-2 border">
            <div class="col-12 px-0">
                <form action="">
                    <div class="form-group my-0">
                        <label for="user-input">What's on your mind?</label>
                        <textarea id="user-input" class="form-control"></textarea>
                    </div>
                    <div class="form-group my-1">
                        <label for="user-name">Name</label>
                        <input id="user-name" class="form-control" type="text">
                    </div>
                    <button id="submitBtn" class="btn btn-dark mt-1" type="button">POST</button>
                </form>
            </div>
        </div>
        <div id="blog-container">
        </div>
    </div>`;
}
// Use to remove your static navbar-related html and serve it from the DOM as a node
function getNavBar(){
    body.innerHTML += `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-success" href="#">Evyntful</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link text-white" href="#" onclick="renderHomePage()">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a id="blog" class="nav-link text-white" onclick="renderBlogPage()" href="#">Blog</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropDownMenuButton">
                            <a class="dropdown-item" href="#">Make an element</a>
                            <a class="dropdown-item" href="#">Make another element</a>
                            <a class="dropdown-item" href="#">ANOTHER ONE</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>`;
}