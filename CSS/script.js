// show nav
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}
if(navToggle){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

// show cards
const newsinfo= document.querySelectorAll('.news__info');
let newscard = document.querySelectorAll('.news__card');

newscard.forEach(n=>{
    n.addEventListener('click',()=>{
        n.classList.toggle('show-cards');
    });
});

// hidden nav
const navlinks = document.querySelectorAll('.nav__link');
navlinks.forEach(n=>n.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
}));