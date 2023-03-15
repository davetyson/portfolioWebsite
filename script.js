// Declare portfolioApp
const portfolioApp = {};

// Menu slide-back (return) function
portfolioApp.menuReturn = () => {
    portfolioApp.overallMenu.addEventListener('mouseleave', function(){
        portfolioApp.menu.style.opacity='0%';
        portfolioApp.menu.classList='menuSlideBack flexbox';
    });
}

//  Menu slide-forward (start) function
portfolioApp.menuStart = () => {
        portfolioApp.menuButton.addEventListener('mouseover', function(){
            portfolioApp.menu.style.opacity='100%';
            portfolioApp.menu.classList='runMenuAnimation flexbox'
            portfolioApp.menuReturn();
    });
}   

// Function to grab current year for footer copyright
portfolioApp.footerYear = () => {
    let currentYear = new Date().getFullYear();
    portfolioApp.footerP.innerHTML = `© Dave Tyson ${currentYear}`;
}

// Initialize variables and functions needed for script
portfolioApp.init = () => {
    portfolioApp.menuButton = document.querySelector('.rotateText');
    portfolioApp.overallMenu = document.querySelector('.menu');
    portfolioApp.footerP = document.querySelector('.footerP');
    portfolioApp.menu = document.querySelector('ul');
    portfolioApp.projects = document.querySelector('projects');
    portfolioApp.menuStart();
    portfolioApp.footerYear();
}

// Initialize portfolioApp
portfolioApp.init();