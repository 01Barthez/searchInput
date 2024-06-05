var element = document.querySelector("#typingText");
let texte = element.innerText;

var typed = new Typed(element, {
    strings: [
        "Entrer Votre email...^1000", 
        "Nous Vous Contacterons !^1000", 
        "Merci pour votre visite !^1000"
    ],

    typeSpeed: 25,
    startDelay: 100,
    backSpeed: 20,
    backDelay: 5,
    loop: true,
    loopCount: Infinity,
         
    showCursor: false,
    cursorChar: '|',
    autoInsertCss: true, 
});