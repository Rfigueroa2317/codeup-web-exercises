(function () { // *** CASEY'S TODO FOR JQUERY-LECTURE ON 6/3/2021 ***
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';

    function addClickEvents(elementsToBind, color1, color2) {
        let handlerBlueBckGnd = function () {
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }

    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    //make sure the DOM is loaded first
    document.addEventListener("DOMContentLoaded", function () {
        addListeners();
        console.log('DOM is fully loaded');
    });

    //parent method for adding all listeners
    function addListeners() {
        //get the elements to add listener and change image
        let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
        addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
        addEvents(cardContainers, 'images/question.png', 'mouseout');
    }

    //add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType) {
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            addEventListener('mouseover', changeImage())
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }

    //actual function to swap images
    function changeImage(card, imgPath) {
        card.setAttribute('src', imgPath);
        $('div, img').hover(
            function () {
                $(this).getElementById('')
            })
    }
})();

// TODO: refactor the below snippet from your starter js code to use jQuery instead of Vanilla JS DOM

//make sure the DOM is loaded first
document.addEventListener("DOMContentLoaded", function () {
    addListeners();
});

//parent method for adding all listeners
function addListeners() {
    //get the elements to add listener and change image
    let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
    addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
    addEvents(cardContainers, 'images/question.png', 'mouseout');
}

//add mouseover/mouseout events to all selected elements
function addEvents(cardContainers, imgPath, listenerType) {
    cardContainers.forEach((cc) => {
        let card = cc;
        //create listener which will call function change the image
        addEventListener('mouseover', changeImage)
        let listener = function (event) {
            let cardImg = card.querySelector(".card .card-img-top");
            changeImage(cardImg, imgPath);
        };
        cc.addEventListener(listenerType, listener);
    });
}

//actual function to swap images
function changeImage(card, imgPath) {
    card.setAttribute('src', imgPath);
    $('div, img').hover(
        function () {
            $(this).getElementById('')
        })
}


// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

let hoverIn = function(){
    // let attributeValue = $(this).attr('data-attribute')
    // // console.log(attributeValue);
    // $(this).find('.card-title').text(attributeValue);
    // // console.log($('.card-title').text());
    $(this)
        .find('.card-title')
        .text($(this))
        .attr('data-attribute');
    // this is the refactor way. look into it as it may be better to write it like this. \\
}

let hoverOut = function(){
    $(this).find('.card-title').text('card');
}
$('.col-md-3').hover(hoverIn, hoverOut);


// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

// $(document).ready(function(){
//     $(this).toggleClass.click('.list-group-item').css({
//         'text-transform': 'uppercase',
//         'color':'red'
//     });
// })








// *** DOM ASSESSMENT PRACTICE *** \\

// TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'

$(this).getElementById('submitBtn').css()()


//answer #1\\

$(document).ready(function () {
    $('#submitBtn').click(function () {
        $('#override-bootstrap').css('background-color', 'red');
    })
})

//------------------------------------------\\

// TODO: When the user clicks a .card-text element, change its background color to 'red'

$(document).ready(function () {
    $('.card-body').click(function () {
        $(this).css('background-color', 'red');
    })
})

//maybe work on this to make sure you're getting it right\\

//------------------------------------------\\

//TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'. When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)

$(document).ready(function () {
    $('#resetBtn').click()(function () {
        location.reload()
    })
})

// look at the BOM section in the curriculum that has an easy solution to this problem *** \\

//------------------------------------------------------\\

// TODO: When the user clicks the element with the id #main-title, its text font size doubles

$(document).ready(function (){
    $('#main-title').click(function (){
        $(this).css('font-size','200%')
    })
})