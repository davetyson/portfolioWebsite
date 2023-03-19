// Declare portfolioApp
const portfolioApp = {};

// Declare all functions

// Menu Animations
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

// Footer Year function
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
        portfolioApp.image1.classList='imageBoxReveal imageReveal image1';
    })
}
portfolioApp.hideProjectImage1 = () => {
    portfolioApp.project1Container.addEventListener('mouseleave', () => {
        portfolioApp.image1.classList='imageBox imageExit image1';
    })
}
//Project 2
portfolioApp.showProjectImage2 = () => {
    portfolioApp.project2Header.addEventListener('mouseover', () => {
        portfolioApp.image2.classList='imageBoxReveal imageReveal image2';
    })
}
portfolioApp.hideProjectImage2 = () => {
    portfolioApp.project2Container.addEventListener('mouseleave', () => {
        portfolioApp.image2.classList='imageBox imageExit image2';

    })
}
// Project 3
portfolioApp.showProjectImage3 = () => {
    portfolioApp.project3Header.addEventListener('mouseover', () => {
        portfolioApp.image3.classList='imageBoxReveal imageReveal image3';
    })
}
portfolioApp.hideProjectImage3 = () => {
    portfolioApp.project3Container.addEventListener('mouseleave', () => {
        portfolioApp.image3.classList='imageBox imageExit image3';
    })
}
// Project 4
portfolioApp.showProjectImage4 = () => {
    portfolioApp.project4Header.addEventListener('mouseover', () => {
        portfolioApp.image4.classList='imageBoxReveal imageReveal image4';
    })
}
portfolioApp.hideProjectImage4 = () => {
    portfolioApp.project4Container.addEventListener('mouseleave', () => {
        portfolioApp.image4.classList='imageBox imageExit image4';
    })
}
// Project 5
portfolioApp.showProjectImage5 = () => {
    portfolioApp.project5Header.addEventListener('mouseover', () => {
        portfolioApp.image5.classList='imageBoxReveal imageReveal image5';
    })
}
portfolioApp.hideProjectImage5 = () => {
    portfolioApp.project5Container.addEventListener('mouseleave', () => {
        portfolioApp.image5.classList='imageBox imageExit image5';
    })
}

// Project 6
portfolioApp.showProjectImage6 = () => {
    portfolioApp.project6Header.addEventListener('mouseover', () => {
        portfolioApp.image6.classList='imageBoxReveal imageReveal image6';
    })
}
portfolioApp.hideProjectImage6 = () => {
    portfolioApp.project6Container.addEventListener('mouseleave', () => {
        portfolioApp.image6.classList='imageBox imageExit image6';
    })
}

// Functions to change the page colour when user selects a different one
// Function to change page colour to yellow
portfolioApp.changeYellow = () => {
        portfolioApp.yellow.addEventListener('click', function() {
        portfolioApp.html.classList = "yellow";
        localStorage.setItem("colour", "yellow");
    })
}
// Function to change page colour to blue
portfolioApp.changeBlue = () => {
    portfolioApp.blue.addEventListener('click', () => {
        portfolioApp.html.classList = "blue";
        localStorage.setItem("colour", "blue");
    })
}
// Function to change page colour to green
portfolioApp.changeGreen = () => {
    portfolioApp.green.addEventListener('click', () => {
        portfolioApp.html.classList = "green";
        localStorage.setItem("colour", "green");
    })
}
// Function to change page colour to gradient
portfolioApp.changeGradient = () => {
    portfolioApp.gradient.addEventListener('click', () => {
        portfolioApp.html.classList = "gradient";
        localStorage.setItem("colour", "gradient");
    })
}
// End of function declarations

// Initialize portfolioApp
portfolioApp.init = () => {

    // Select elements for menu functions
    portfolioApp.menuButton = document.querySelector('.rotateText');
    portfolioApp.overallMenu = document.querySelector('.menu');
    portfolioApp.menu = document.querySelector('ul');

    // Select elements for footer functions
    portfolioApp.footerP = document.querySelector('.footerP');

    // Select elements for image box functions
    portfolioApp.project1Header = document.querySelector('.project1');
    portfolioApp.project2Header = document.querySelector('.project2');
    portfolioApp.project3Header = document.querySelector('.project3');
    portfolioApp.project4Header = document.querySelector('.project4');
    portfolioApp.project5Header = document.querySelector('.project5');
    portfolioApp.project6Header = document.querySelector('.project6');
    portfolioApp.project1Container = document.querySelector('.project1Container');
    portfolioApp.project2Container = document.querySelector('.project2Container');
    portfolioApp.project3Container = document.querySelector('.project3Container');
    portfolioApp.project4Container = document.querySelector('.project4Container');
    portfolioApp.project5Container = document.querySelector('.project5Container');
    portfolioApp.project6Container = document.querySelector('.project6Container');
    portfolioApp.image1 = document.querySelector('.image1');
    portfolioApp.image2 = document.querySelector('.image2');
    portfolioApp.image3 = document.querySelector('.image3');
    portfolioApp.image4 = document.querySelector('.image4');
    portfolioApp.image5 = document.querySelector('.image5');
    portfolioApp.image6 = document.querySelector('.image6');

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
        localStorage.setItem("colour", "blue");
    } else if (window.localStorage.getItem("colour") === "green") {
        portfolioApp.html.classList = "green";
        localStorage.setItem("colour", "green");
    } else if (window.localStorage.getItem("colour") === "gradient") {
        portfolioApp.html.classList = "gradient";
        localStorage.setItem("colour", "gradient");
    } else {
        portfolioApp.html.classList = "yellow";
        localStorage.setItem("colour", "yellow");
    }

    // Call all functions
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
    portfolioApp.showProjectImage6();
    portfolioApp.hideProjectImage6();
}

// Call portfolioApp initialization
portfolioApp.init();