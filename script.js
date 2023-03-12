const menuButton = document.querySelector('.rotateText');
const overallMenu = document.querySelector('.menu');
const footerP = document.querySelector('.footerP');
let currentYear = new Date().getFullYear();
footerP.innerHTML = `© Dave Tyson ${currentYear}`;

menuButton.addEventListener('mouseover', function(){
    const menu = document.querySelector('ul');
    menu.style.opacity='100%';
    menu.classList='runMenuAnimation';
    overallMenu.addEventListener('mouseleave', function(){
        menu.style.opacity='0%';
        menu.classList='menuSlideBack';
    });
});