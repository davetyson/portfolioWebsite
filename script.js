const menuButton = document.querySelector('.rotateText');
const overallMenu = document.querySelector('.menu');
const footerP = document.querySelector('.footerP');
let currentYear = new Date().getFullYear();
footerP.innerHTML = `© Dave Tyson ${currentYear}`;
const projectList = document.querySelector('.projects');

menuButton.addEventListener('mouseover', function(){
    const menu = document.querySelector('ul');
    menu.style.opacity='100%';
    menu.classList='runMenuAnimation';
    overallMenu.addEventListener('mouseleave', function(){
        menu.style.opacity='0%';
        menu.classList='menuSlideBack';
    });
});

// setTimeout(() => {
//      projectList.style='overflow: hidden';
// }, "300");

// setTimeout(() => {if (projectList.scrollHeight >= 717) {
//     // projectList.style='overflow: auto'
//     projectList.style='justify-content: end';
// }
// else {
//     // // projectList.style='overflow: auto'
//     // projectList.classList='mainSlideUp projects flexbox';
// }
// }, "301");

  

//scroll height 717
//what if I say...
    // if scroll height >= 717 then
        // apply class of justify-content: end
    // else
        // remove class of justify-content: end