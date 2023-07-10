var textArray = ["Magnificance. Intelligence. Courage.", "Man Iao Chan"];
//the index for the first set of words is 0, while the index for the 2nd set is 1
function switchText() {
    var textElement = document.getElementById("textswitcher");
    var currentIndex = textArray.indexOf(textElement.innerHTML); //current index = 0 at the beginning 
    var newIndex = (currentIndex +1)% textArray.length;
    //Since current index is 0, we add 1 and modulo 2
    textElement.innerHTML=textArray[newIndex];
    //the HTML words need to be changed to the text array set of the new index
}
setInterval(switchText,2000);

function setTheme() {
    var currentHour = new Date().getHours();
    var bodyElement = document.getElementsByTagName("body")[0]; 
    //[0] indicates the first <body> tag in the HTML file,
    //which is the opening of <body> instead of </body>
    if (currentHour >= 6 && currentHour < 18){
        bodyElement.classList.remove("body-dark-mode");
        bodyElement.classList.add("body-light-mode");
    }else{
        bodyElement.classList.remove("body-light-mode");
        bodyElement.classList.add("body-dark-mode");
    }
    }
setTheme();

