const navlist= document.getElementById('navlist');
const hamburger= document.getElementById('hamburger');

// Click eventt

hamburger.addEventListener('click',()=>{
navlist.classList.toggle('navlist-active');
})