// DOM practice \\

// function changeColor(obj) {
//     obj.style.color = "Peru";
//}
function changeColor(obj) {
    obj.style.color = 'purple';
}
//
// document.getElementById("myBtn").onclick = changeBackgroundColorToMediumOrchid;
    document.getElementById("myBtn").onclick = changeBackgroundColorToLightBlue;
//
// function changeBackgroundColorToMediumOrchid(){
//     document.querySelector('body').style.background = "MediumOrchid";
// }
    function changeBackgroundColorToLightBlue(){
        document.querySelector('body').style.background ='LightBlue';
    }
// function removeLetterFromH1(){
//     var h1 = document.querySelector('h1')
//     h1.textContent = h1.textContent.slice(0, -1);
// }
    function addLetterToH1(){
        var h1 = document.querySelector('h1')
        h1.textContent = h1.textContent.slice(0, 1);
    }
//
// function mOver(obj) {
//     obj.innerHTML = "GET OFF ME!"
// }
    function mOver(obj){
        obj.innerHTML = "Hello There!";
    }
//
// function mOut(obj) {
//     obj.innerHTML = "thank you"
//}
    function mOut(obj){
        obj.innerHTML = 'have a great day!';
    }

    var input = document.querySelector('input');
    var log = document.getElementById('values');

    input.addEventListener('input', updateValue)

function updateValue(e){
    log.textContent = e.target.value;
}