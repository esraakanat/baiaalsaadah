let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");
let menuEl= document.querySelector(".menu");
let headerEl=document.querySelector("header");


menuBtn.addEventListener("click",()=>{
    menuEl.classList.add("menu-active");
})
closeBtn.addEventListener("click",()=>{
    menuEl.classList.remove("menu-active");
})

window.addEventListener("scroll",()=>{
headerEl.classList.toggle("header-active",scrollY>0)
})