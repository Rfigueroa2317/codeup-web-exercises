// todo #1 \\
// $('#all-caps').hide();
//
// $('span').hide();
//
// $('.show-me').show();
//
// // todo #2 \\
//
// $('#pink').css('background-color','pink');
//
// $('#orange').css('background-color','orange');
//
// $('#pink').hide();

// curriculum exercises \\
// id selectors \\

// $('#exercises').show();
// alert('this is the exercises id.');

// $('#line-1').show();

// $('#header').show();
// alert('this is the header id.');


// Class selectors \\

// $('.Codeup').css({
//     'border-weight': '1px',
//     'border-style': 'solid',
//     'color': 'red',
// });
// ** giving this to an id of codeup wont change it. the above code is only for the class 'Codeup', not the id ** \\


// Element Selectors \\

// $('li').css({
//     'font-size': '20px',
// });
//
// $('h1, p, li').css({
//     'color': 'goldenrod',
// });

// $(document).ready(function(){
//     alert(new Date());
//     alert("h1 says 'JQuery exercises'");
// });


// Multiple Selectors \\

// look for ALL h1 AND all li and all p
// $(h1, p, li)
// $('* h1, * p, * li').css({
//     'color': 'blue',
// });
//
//
//
// $('div p') // all paragraph elements inside of any div element
// $('div, p') // all divs AND all paragraphs
// $('div ul li') // ALL li's inside of any ul only if that ul is inside of any div


// ======================================================= \\

//  *** MOUSE EVENTS ***  \\

// .2

$('#header').click(
    function () {
        $(this).css('background-color', 'lightblue');
    })


// .3

$('div, p').dblclick(
    function () {
        $(this).css('font-size', '18px');
    })


// .4

// $('ul, li').mouseenter(function (){
//         $(this).css('color','red');
// });
//
// $('ul, li').mouseleave(function (){
//         $(this).css('color','black');
// });

$(' li').hover(
    function () {
        $(this).css('color', 'red');
    },
    function () {
        $(this).css('color', 'black');
    }
)