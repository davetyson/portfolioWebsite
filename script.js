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

// Formspree code to clear form after submission
portfolioApp.formspreeClear = () => {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
    }
}

// Function to change colour to yellow
portfolioApp.changeYellow = () => {
    portfolioApp.yellow.addEventListener('click', function() {
        portfolioApp.html.classList = "yellow";
    })
}

// Function to change colour to blue
portfolioApp.changeBlue = () => {
    portfolioApp.blue.addEventListener('click', () => {
        portfolioApp.html.classList = "blue";
    })
}

// Function to change colour to green
portfolioApp.changeGreen = () => {
    portfolioApp.green.addEventListener('click', () => {
        portfolioApp.html.classList = "green";
    })
}

// Function to change colour to gradient
portfolioApp.changeGradient = () => {
    portfolioApp.gradient.addEventListener('click', () => {
        portfolioApp.html.classList = "gradient";
    })
}

// Initialize variables and functions needed for script
portfolioApp.init = () => {
    // Select elements for menu script
    portfolioApp.menuButton = document.querySelector('.rotateText');
    portfolioApp.overallMenu = document.querySelector('.menu');
    portfolioApp.menu = document.querySelector('ul');

    // Select elements for footer script
    portfolioApp.footerP = document.querySelector('.footerP');

    // Select elements for colour change script
    portfolioApp.html = document.querySelector('html');
    portfolioApp.yellow = document.querySelector('.yellowP');
    portfolioApp.blue = document.querySelector('.blueP');
    portfolioApp.green = document.querySelector('.greenP');
    portfolioApp.gradient = document.querySelector('.gradientP');

    // Call functions
    portfolioApp.menuStart();
    portfolioApp.footerYear();
    portfolioApp.formspreeClear();
    portfolioApp.changeYellow();
    portfolioApp.changeBlue();
    portfolioApp.changeGreen();
    portfolioApp.changeGradient();
}

// Initialize portfolioApp
portfolioApp.init();