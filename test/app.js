
const togglebtn = document.querySelector('.toggle-btn')
const resume = document.querySelector('.resume-btn')


hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

togglebtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    imag.classList.toggle('hideEmoji')
    imag2.classList.toggle('hideEmoji')
    
})

