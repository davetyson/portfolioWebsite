const menuButton = document.querySelector('.rotateText');
const overallMenu = document.querySelector('.menu');
// const showMenu = function(){
//     const menu = document.querySelector('ul');
//     menu.style.display="static";
//     console.log('you clicked the menu button');
// }

// menuButton.addEventListener('click', showMenu());

menuButton.addEventListener('mouseover', function(){
    const menu = document.querySelector('ul');
    menu.style.opacity='100%';
    // menu.style.transform='translateX(0%)';
    menu.classList='runMenuAnimation';
    overallMenu.addEventListener('mouseleave', function(){
        // const menu = document.querySelector('ul');
        menu.style.opacity='0%';
        menu.classList='menuSlideBack';
        // menu.style.transform='translateX(-50%)';
    });
});