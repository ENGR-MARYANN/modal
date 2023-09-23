const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const btu = document.querySelector(".btu");
const menu = document.querySelector("#menu");
const sideNav = document.querySelector(".sideNav");
const close = document.querySelector("#close");
btn.addEventListener("click",()=>{
    popup.classList.add("open-popup");
    
});
btu.addEventListener("click",()=>{
    popup.classList.remove("open-popup");
    
});
menu.addEventListener("click",()=>{
    sideNav.classList.add("show");
});
close.addEventListener("click",()=>{
    sideNav.classList.remove("show");
});