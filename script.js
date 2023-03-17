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
        portfolioApp.html.setAttribute("colour","yellow");
        portfolioApp.html.classList = "yellow";
        window.localStorage.setItem("colour", "yellow");
    })
}

// Function to change colour to blue
portfolioApp.changeBlue = () => {
    portfolioApp.blue.addEventListener('click', () => {
        portfolioApp.html.setAttribute("colour","blue");
        portfolioApp.html.classList = "blue";
        window.localStorage.setItem("colour", "blue");
    })
}

// Function to change colour to green
portfolioApp.changeGreen = () => {
    portfolioApp.green.addEventListener('click', () => {
        portfolioApp.html.setAttribute("colour","green");
        portfolioApp.html.classList = "green";
        window.localStorage.setItem("colour", "green");
    })
}

// Function to change colour to gradient
portfolioApp.changeGradient = () => {
    console.log(localStorage);
    portfolioApp.gradient.addEventListener('click', () => {
        portfolioApp.html.setAttribute("colour","gradient");
        portfolioApp.html.classList = "gradient";
        window.localStorage.setItem("colour", "gradient");
        console.log(window.localStorage.getItem("colour"));
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

    // Check for the current colour theme in local storage and apply on page load
    portfolioApp.currentColour = window.localStorage.getItem("colour");
    console.log(portfolioApp.currentColour);

    // In here I've added 'localStorage.clear' which means that this works perfectly as the user clicks into the 2nd page after choosing a theme, but then on clicking the 3rd page (assuming they have not picked another theme), it will default to yellow again. This is the closest thing to stability/predictability I've got on this so I'm leaving this here for now like this

    if (window.localStorage.getItem("colour") === "blue") {
        portfolioApp.html.classList = "blue";
        console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
    } else if (window.localStorage.getItem("colour") === "green") {
        portfolioApp.html.classList = "green";
        console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
    } else if (window.localStorage.getItem("colour") === "gradient") {
        portfolioApp.html.classList = "gradient";
        console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
    } else {
        portfolioApp.html.classList = "yellow";
        console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
    }

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