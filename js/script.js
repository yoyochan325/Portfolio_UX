var textArray = ["Magnificance. Intelligence. Courage.", "Man Iao Chan"];
function switchText() {
    var textElement = document.getElementById("textswitcher");
    var currentIndex = textArray.indexOf(textElement.innerHTML);
    var newIndex = (currentIndex +1)% textArray.length;
    textElement.innerHTML=textArray[newIndex];
}
setInterval(switchText,2000);