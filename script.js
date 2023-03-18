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

// Formspree code to clear contact form after submission
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
        // portfolioApp.html.setAttribute("colour","yellow");
        portfolioApp.html.classList = "yellow";
        window.localStorage.setItem("colour", "yellow");
        // portfolioApp.currentColour = "colour=yellow";
    })
}

// Function to change colour to blue
portfolioApp.changeBlue = () => {
    portfolioApp.blue.addEventListener('click', () => {
        // portfolioApp.html.setAttribute("colour","blue");
        portfolioApp.html.classList = "blue";
        window.localStorage.setItem("colour", "blue");
        // portfolioApp.currentColour = "colour=blue";
    })
}

// Function to change colour to green
portfolioApp.changeGreen = () => {
    portfolioApp.green.addEventListener('click', () => {
        // portfolioApp.html.setAttribute("colour","green");
        portfolioApp.html.classList = "green";
        window.localStorage.setItem("colour", "green");
        // portfolioApp.currentColour = "colour=green";

    })
}

// Function to change colour to gradient
portfolioApp.changeGradient = () => {
    console.log(localStorage);
    portfolioApp.gradient.addEventListener('click', () => {
        // portfolioApp.html.setAttribute("colour","gradient");
        portfolioApp.html.classList = "gradient";
        window.localStorage.setItem("colour", "gradient");
        // console.log(window.localStorage.getItem("colour"));
        // portfolioApp.currentColour = "colour=gradient";
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
        // console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
        localStorage.setItem("colour", "blue");
    } else if (window.localStorage.getItem("colour") === "green") {
        portfolioApp.html.classList = "green";
        // console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
        localStorage.setItem("colour", "green");
    } else if (window.localStorage.getItem("colour") === "gradient") {
        portfolioApp.html.classList = "gradient";
        // console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
        localStorage.setItem("colour", "gradient");
    } else {
        portfolioApp.html.classList = "yellow";
        // console.log(window.localStorage.getItem("colour"));
        localStorage.clear();
        localStorage.setItem("colour", "yellow");
    }

    // COOKIE EXPERIMENTS
    // Pretty sure this is the only way I am going to get the theme colour to stay the same as the most recently picked theme from page to page without it turning back to yellow, but I'm not sure how they work just yet
    // Would need help with this! For now leaving the local storage option which at least give us 2 pages of the right colour before resetting

    // portfolioApp.currentColour = document.cookie;
    // console.log(currentColour);

    // if (portfolioApp.currentColour != "null") {
    //     if (portfolioApp.currentColour = "colour=blue") {
    //         portfolioApp.html.classList = "blue";
    //     } else if (portfolioApp.currentColour = "colour=green") {
    //         portfolioApp.html.classList = "green";
    //     } else if (portfolioApp.currentColour = "colour=gradient") {
    //         portfolioApp.html.classList = "gradient";
    //     } else {
    //         portfolioApp.html.classList = "yellow";
    //     }
    // } else {
    //     document.cookie = "colour=null";
    // }

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