const input = document.querySelector("#input");
const typing = document.querySelector("#typing");
const inputField = document.querySelector("#inputField");
const fieldContaineur = document.querySelector("#fieldContaineur");
const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector('#submitBtn');
const mouse = document.querySelector('#mouse');
const mouse2 = document.querySelector('#mouse2');

window.addEventListener('click', (e)=>{
    if(fieldContaineur.contains(e.target)){
        fieldContaineur.classList.add("active");
    }else{
        fieldContaineur.classList.remove("active");
    }
    
    if(e.target === typing || typing.contains(e.target)){
        typing.style.display = "none";
        input.style.display = "block"
    }else{     
        if(e.target !== input && !input.contains(e.target) && input.value === ""){
            typing.style.display = "flex";
            input.style.display = "none"
        }else{
            typing.style.display = "none";
            input.style.display = "block"
        }
    }
});

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(input.value !== '' && isValidEmail(input.value)){
        // fieldContaineur.submit();
        window.location.href = "mailto:kenwoubarthez@gmail.com?subject=Email de contact&body=" + encodeURIComponent(input.value);
        alert("Les données ont bien été envoyé");
        input.value = "";
    }else{
        alert('veillez entrer une addresse valide !');
        input.value = "";
    }
})

submitBtn.addEventListener('mousemove', (e)=>{
    let x = e.offsetX;
    let y = e.offsetY;

    mouse.style.display = "block";
    mouse.style.left = x+"px";
    mouse.style.top = y+"px";

    mouse2.style.display = "block";
    mouse2.style.left = x+"px";
    mouse2.style.top = y+"px";

    console.log(x,y);
})

submitBtn.addEventListener('mouseout', (e)=>{
    mouse.style.display = "none";
})

submitBtn.addEventListener('mouseout', (e)=>{
    mouse2.style.display = "none";
})
