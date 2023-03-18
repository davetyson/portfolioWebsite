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

// Functions to reveal & hide the different project images
// Project 1
portfolioApp.showProjectImage1 = () => {
    portfolioApp.project1Header.addEventListener('mouseover', () => {
        portfolioApp.image1.classList='imageOverlayReveal imageReveal image1';
    })
}
portfolioApp.hideProjectImage1 = () => {
    portfolioApp.project1Container.addEventListener('mouseleave', () => {
        portfolioApp.image1.classList='imageOverlay imageExit image1';
    })
}

//Project 2
portfolioApp.showProjectImage2 = () => {
    portfolioApp.project2Header.addEventListener('mouseover', () => {
        portfolioApp.image2.classList='imageOverlayReveal imageReveal image2';
    })
}
portfolioApp.hideProjectImage2 = () => {
    portfolioApp.project2Container.addEventListener('mouseleave', () => {
        portfolioApp.image2.classList='imageOverlay imageExit image2';

    })
}

// Project 3
portfolioApp.showProjectImage3 = () => {
    portfolioApp.project3Header.addEventListener('mouseover', () => {
        portfolioApp.image3.classList='imageOverlayReveal imageReveal image3';
    })
}
portfolioApp.hideProjectImage3 = () => {
    portfolioApp.project3Container.addEventListener('mouseleave', () => {
        portfolioApp.image3.classList='imageOverlay imageExit image3';
    })
}

// Project 4
portfolioApp.showProjectImage4 = () => {
    portfolioApp.project4Header.addEventListener('mouseover', () => {
        portfolioApp.image4.classList='imageOverlayReveal imageReveal image4';
    })
}
portfolioApp.hideProjectImage4 = () => {
    portfolioApp.project4Container.addEventListener('mouseleave', () => {
        portfolioApp.image4.classList='imageOverlay imageExit image4';
    })
}

// Project 5
portfolioApp.showProjectImage5 = () => {
    portfolioApp.project5Header.addEventListener('mouseover', () => {
        portfolioApp.image5.classList='imageOverlayReveal imageReveal image5';
    })
}
portfolioApp.hideProjectImage5 = () => {
    portfolioApp.project5Container.addEventListener('mouseleave', () => {
        portfolioApp.image5.classList='imageOverlay imageExit image5';
    })
}

// Function to change colour to yellow
portfolioApp.changeYellow = () => {
        portfolioApp.yellow.addEventListener('click', function() {
        portfolioApp.html.classList = "yellow";
        localStorage.setItem("colour", "yellow");
    })
}

// Function to change colour to blue
portfolioApp.changeBlue = () => {
    portfolioApp.blue.addEventListener('click', () => {
        portfolioApp.html.classList = "blue";
        localStorage.setItem("colour", "blue");
    })
}

// Function to change colour to green
portfolioApp.changeGreen = () => {
    portfolioApp.green.addEventListener('click', () => {
        portfolioApp.html.classList = "green";
        localStorage.setItem("colour", "green");
    })
}

// Function to change colour to gradient
portfolioApp.changeGradient = () => {
    portfolioApp.gradient.addEventListener('click', () => {
        portfolioApp.html.classList = "gradient";
        localStorage.setItem("colour", "gradient");
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

    // // Select elements for project overlays
    // portfolioApp.project1 = document.querySelector('.project1');
    // portfolioApp.project2 = document.querySelector('.project2');
    // portfolioApp.project3 = document.querySelector('.project3');
    // portfolioApp.project4 = document.querySelector('.project4');
    // portfolioApp.project5 = document.querySelector('.project5');
    // portfolioApp.smallInfoLinks = document.querySelector('.smallInfoLinks');
    // portfolioApp.project1p = document.querySelectorAll('.project1P');
    // portfolioApp.imageOverlay = document.querySelector('.imageOverlay');
    // portfolioApp.displayedImage = document.createElement('img');

    portfolioApp.project1Header = document.querySelector('.project1')
    portfolioApp.project2Header = document.querySelector('.project2')
    portfolioApp.project3Header = document.querySelector('.project3')
    portfolioApp.project4Header = document.querySelector('.project4')
    portfolioApp.project5Header = document.querySelector('.project5')
    portfolioApp.project1Container = document.querySelector('.project1Container')
    portfolioApp.project2Container = document.querySelector('.project2Container')
    portfolioApp.project3Container = document.querySelector('.project3Container')
    portfolioApp.project4Container = document.querySelector('.project4Container')
    portfolioApp.project5Container = document.querySelector('.project5Container')
    portfolioApp.image1 = document.querySelector('.image1');
    portfolioApp.image2 = document.querySelector('.image2');
    portfolioApp.image3 = document.querySelector('.image3');
    portfolioApp.image4 = document.querySelector('.image4');
    portfolioApp.image5 = document.querySelector('.image5');

    // Select elements for colour change script
    portfolioApp.html = document.querySelector('html');
    portfolioApp.yellow = document.querySelector('.yellowP');
    portfolioApp.blue = document.querySelector('.blueP');
    portfolioApp.green = document.querySelector('.greenP');
    portfolioApp.gradient = document.querySelector('.gradientP');

    // Check for the current colour theme in local storage and apply on page load
    portfolioApp.currentColour = localStorage.getItem("colour");

    if (window.localStorage.getItem("colour") === "blue") {
        portfolioApp.html.classList = "blue";
        localStorage.clear();
        localStorage.setItem("colour", "blue");
    } else if (window.localStorage.getItem("colour") === "green") {
        portfolioApp.html.classList = "green";
        localStorage.clear();
        localStorage.setItem("colour", "green");
    } else if (window.localStorage.getItem("colour") === "gradient") {
        portfolioApp.html.classList = "gradient";
        localStorage.clear();
        localStorage.setItem("colour", "gradient");
    } else {
        portfolioApp.html.classList = "yellow";
        localStorage.clear();
        localStorage.setItem("colour", "yellow");
    }

    // Call functions
    portfolioApp.menuStart();
    portfolioApp.footerYear();
    portfolioApp.formspreeClear();
    portfolioApp.changeYellow();
    portfolioApp.changeBlue();
    portfolioApp.changeGreen();
    portfolioApp.changeGradient();
    portfolioApp.showProjectImage1();
    portfolioApp.hideProjectImage1();
    portfolioApp.showProjectImage2();
    portfolioApp.hideProjectImage2();
    portfolioApp.showProjectImage3();
    portfolioApp.hideProjectImage3();
    portfolioApp.showProjectImage4();
    portfolioApp.hideProjectImage4();
    portfolioApp.showProjectImage5();
    portfolioApp.hideProjectImage5();
}

// Initialize portfolioApp
portfolioApp.init();