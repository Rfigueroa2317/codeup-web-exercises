(function(){ // *** CASEY'S TODO FOR JQUERY-LECTURE ON 6/3/2021 ***
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';
    function addClickEvents(elementsToBind, color1, color2){
        let handlerBlueBckGnd = function(){
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }
    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    //make sure the DOM is loaded first
    document.addEventListener("DOMContentLoaded", function() {
        addListeners();
        console.log('DOM is fully loaded');
    });
    //parent method for adding all listeners
    function addListeners(){
        //get the elements to add listener and change image
        let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
        addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
        addEvents(cardContainers, 'images/question.png', 'mouseout');
    }
    //add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType){
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            addEventListener('mouseover',changeImage())
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }
    //actual function to swap images
    function changeImage(card, imgPath){
        card.setAttribute('src', imgPath);
        $('div, img').hover(
            function(){
                $(this).getElementById('')
        })
    }
})();

// TODO: refactor the below snippet from your starter js code to use jQuery instead of Vanilla JS DOM

//make sure the DOM is loaded first
document.addEventListener("DOMContentLoaded", function() {
    addListeners();
});
//parent method for adding all listeners
function addListeners(){
    //get the elements to add listener and change image
    let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
    addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
    addEvents(cardContainers, 'images/question.png', 'mouseout');
}
//add mouseover/mouseout events to all selected elements
function addEvents(cardContainers, imgPath, listenerType){
    cardContainers.forEach((cc) => {
        let card = cc;
        //create listener which will call function change the image
        addEventListener('mouseover',changeImage)
        let listener = function (event) {
            let cardImg = card.querySelector(".card .card-img-top");
            changeImage(cardImg, imgPath);
        };
        cc.addEventListener(listenerType, listener);
    });
}
//actual function to swap images
function changeImage(card, imgPath){
    card.setAttribute('src', imgPath);
    $('div, img').hover(
        function(){
            $(this).getElementById('')
        })
}