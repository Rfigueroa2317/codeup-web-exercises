// *** THIS IS AN EXAMPLE TO TRY TO GET SOMETHING HAPPEN ***

var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
var str = 'No key pressed';
document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            str = console.log('Left Key pressed!');
            break;
        case 38:
            str = 'Up Key pressed!';
            break;
        case 39:
            str = 'Right Key pressed!';
            break;
        case 40:
            str = 'Down Key pressed!';
            break;
    }
}