
    var btn = document.getElementById('second-id');
    btn.addEventListener('click',function (event){
        event.preventDefault();
        let input = document.getElementById('new-id');
        let inputValue = input.value;
        console.log(inputValue);
        let postContainer = document.getElementById('post-container');
        postContainer.innerText = inputValue;

    })

