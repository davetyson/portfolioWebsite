const portfolioApp = {};

portfolioApp.menuReturn = () => {
    portfolioApp.overallMenu.addEventListener('mouseleave', function(){
        portfolioApp.menu.style.opacity='0%';
        portfolioApp.menu.classList='menuSlideBack';
    });
}

portfolioApp.menuStart = () => {
        portfolioApp.menuButton.addEventListener('mouseover', function(){
            portfolioApp.menu.style.opacity='100%';
            portfolioApp.menu.classList='runMenuAnimation'
            portfolioApp.menuReturn();
    });
}   

portfolioApp.footerYear = () => {
    let currentYear = new Date().getFullYear();
    portfolioApp.footerP.innerHTML = `© Dave Tyson ${currentYear}`;
}

portfolioApp.init = () => {
    portfolioApp.menuButton = document.querySelector('.rotateText');
    portfolioApp.overallMenu = document.querySelector('.menu');
    portfolioApp.footerP = document.querySelector('.footerP');
    portfolioApp.menu = document.querySelector('ul')
    portfolioApp.menuStart();
    portfolioApp.footerYear();
}

portfolioApp.init();


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