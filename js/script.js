// Check IF Is Local Storage Color Option
let mainColor = localStorage.getItem("color_option");

if(mainColor !== null){
    document.documentElement.style.setProperty("--main-color", mainColor);

    // Remove class Active for all colors list
    document.querySelectorAll(".ul-color li").forEach(ele => {
        ele.classList.remove("active");

        if(ele.dataset.color === mainColor){
            ele.classList.add("active");
        }
    });
}


// Start Links In Header

let myHeader = document.querySelector(".header");
let butt = document.querySelectorAll(".scroll-option button");
let scrollNavLocalStorage = localStorage.getItem("scrollNav-option");

if(scrollNavLocalStorage !== null){
    butt.forEach((e) =>{
        e.classList.remove("active");
    });
    if(scrollNavLocalStorage === "sticky"){
        myHeader.style.position = "sticky";
        document.querySelector(".scroll-option .yes").classList.add("active");
    }else{
        myHeader.style.position = "absolute";
        document.querySelector(".scroll-option .no").classList.add("active");
    }
};

butt.forEach((e) =>{
    e.addEventListener("click", (ele) =>{
        if(e.dataset.scroll === "yes"){
            myHeader.style.position = "sticky";
            localStorage.setItem("scrollNav-option", "sticky");
        }else{
            myHeader.style.position = "absolute";
            localStorage.setItem("scrollNav-option", "absolute");
        };
        handelActive(ele);
    });
});



let myLinks = document.querySelectorAll(".links li");
transitionLinks(myLinks)

// End Links In Header


/* Start Change Landing BackgroundImage*/ 

// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let backgroundInterval;

// Check IF Is Local Storage Background Option

let backgroundLocalStorage = localStorage.getItem("background_option");

if(backgroundLocalStorage !== null){
    if(backgroundLocalStorage === "true"){
        backgroundOption = true;
        
    }else{
        backgroundOption = false;
        
    }

    // Remove Active Class From All Element
    document.querySelectorAll(".random-background button").forEach(e => {
        e.classList.remove("active");
    });

    if(backgroundLocalStorage === "true"){
        document.querySelector(".random-background .yes").classList.add("active");
    }else{
        document.querySelector(".random-background .no").classList.add("active");
    }
}

// Select Landing Page Element
let landingPage = document.querySelector(".landing"); 

// Get Array Of Image
let arrayImage = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];




function randomizImage(){
    if(backgroundOption === true){

        backgroundInterval = setInterval(function(){
    
            // Get Random Number
                let randomImage = Math.floor(Math.random() * arrayImage.length);
            
            // Change Background Image Url
                landingPage.style.backgroundImage = 'url("../uploads/image/'+ arrayImage[randomImage] +'")';
            }, 10000)
        }
}


// Disable and turn on the random background feature

let randomBackground = document.querySelectorAll(".random-background button");

randomBackground.forEach(bu => {

    bu.addEventListener("click", ele =>{
        handelActive(ele)
        
        if(ele.target.dataset.background === "yes"){
            backgroundOption = true;
            randomizImage();
            localStorage.setItem("background_option", true);

        }else{
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});
randomizImage();


/* End Change Landing BackgroundImage*/


/* Start Setting-Box*/

// Select Element the Setting-Box
let settingBox  = document.querySelector(".setting-box");
let iconSetting = document.querySelector(".icon-setting");
let iconI       = document.querySelector("i");

// Add Class Opening to The item & Delete Class Opening From The item

iconSetting.onclick = function(){
    settingBox.classList.toggle("opening");
    iconI.classList.toggle("fa-spin");
}

const colorLi = document.querySelectorAll(".ul-color li");

colorLi.forEach(li =>{

    li.addEventListener("click", e =>{
        // Set Color On root
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active Class From All Elements
        handelActive(e)
    });
});


// Reset Function

document.querySelector(".reset-option").onclick = function(){

localStorage.clear();
window.location.reload();

};


// Start Option Bullets
let bullButt = document.querySelectorAll(".bullets-option button");

let myBullets = document.querySelector(".nav-bullets");

let localStorageBullets = localStorage.getItem("bullets_option")

if(localStorageBullets !== null){
    bullButt.forEach((but) =>{
        but.classList.remove("active")
    });

    if(localStorageBullets === "block"){
        myBullets.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");
    }else{
        myBullets.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bullButt.forEach( (button) =>{
    button.addEventListener("click", (e) =>{
        if(button.dataset.bullets === "show"){
            myBullets.style.display = "block";
            localStorage.setItem("bullets_option", "block")
        }else{
            myBullets.style.display = "none";
            localStorage.setItem("bullets_option", "none")
        }
        handelActive(e)
    });

});
// End Option Bullets

/* End Setting-Box*/

// Start Navigation Bullets
let navBullets = document.querySelectorAll(".nav-bullets .bullets");

transitionLinks(navBullets)

// End Navigation Bullets

/* Start Header Nabar*/

let myMenu = document.querySelector(".menu-bar");

let linkHeader = document.querySelector(".links");

myMenu.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    linkHeader.classList.toggle("open");
    
}

linkHeader.onclick = function(e){
    e.stopPropagation();
}

document.addEventListener("click", (e) =>{
    if(e.target !== myMenu && e.target !== linkHeader){
        if(linkHeader.classList.contains("open")){

            myMenu.classList.toggle("menu-active");
            linkHeader.classList.toggle("open");
        };
    };
});
/* End Header Nabar*/

/* Start fquality*/

// Select FQuality Selector
let fQuality = document.querySelector(".fquality");

window.onscroll = function(){
    
    // // FQuality Offset Top
    // let offsetTopFquality = fQuality.offsetTop;
    
    // // FQuality Outer Height
    // let outerHeightFquality = fQuality.offsetHeight;

    // // Window Height
    // let windowHeight = this.innerHeight;

    // // Window Scroll Top
    // let windoScrollTop = this.pageYOffset

    
    let fQualityPS = document.querySelectorAll(".fquality .progress span");

    if(this.pageYOffset > (fQuality.offsetTop + fQuality.offsetHeight) - this.innerHeight){
        
        // Loop at The Span Elements
        fQualityPS.forEach(span =>{
            span.style.width = span.dataset.progress;
        });
        
    }else{
        fQualityPS.forEach(span =>{
            span.style.width = "0";
        });
    };

    /* End fquality */


    /* Start Show Gallery is in Window */
    let fgallery = document.querySelector(".fgallery");

    let fgalleryOffsetTop    = fgallery.offsetTop - 600;

    let fgalleryOffsetHeight = fgallery.offsetHeight;

    let windowHeight         = this.innerHeight;

    let windowScrollTop      = this.pageYOffset;

    if(windowScrollTop > (fgalleryOffsetTop + fgalleryOffsetHeight) - windowHeight){
        fgallery.style.opacity = "1";
    }else{
        fgallery.style.opacity = "0";
    }

    /* End Show Gallery is in Window*/
};

/* Start Gallrey  Popup*/

let fGalleryShow = document.querySelectorAll(".fgallery .fgallery-box img");

fGalleryShow.forEach(img =>{
    img.addEventListener("click", (e) =>{
        
        // Create Overlay Element
        let overlay       = document.createElement("div");

        // Add ClassName To Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To Body
        document.body.appendChild(overlay);

        // Creat Popup Box
        let popupBox      = document.createElement("div");
        
        // Add ClassName To PopupBox
        popupBox.className = 'popup-box';

        // Append PopupBox To Overaly
        overlay.appendChild(popupBox);

        // Create Element The Img
        let popupImg       = document.createElement("img");
        
        // Set Image Source
        popupImg.src = img.src;

        // Append PopupImg to PopupBox
        popupBox.appendChild(popupImg);

        // Create CLose Button
        let closeButton = document.createElement("button");

        // Add ClassName To Button
        closeButton.className = 'close-popup'
        // Add TextContent To Button
        closeButton.textContent = 'X';

        // Append CloseButton To PopupBox
        popupBox.appendChild(closeButton)

        
    });
});

// Function Click Button
document.addEventListener("click", (e) =>{
    if(e.target.className == "close-popup"){
        // Remove All Overaly
        document.querySelector(".popup-overlay").remove();
    }
});
/* End Gallrey Popup*/


// Start Function All 

// Start Function The Transition

function transitionLinks(element){
element.forEach((ele) =>{
    ele.addEventListener("click", (e) =>{
        e.preventDefault()
            document.querySelector(e.target.dataset.link).scrollIntoView({
                behavior : 'smooth'
            });
            
        });
    });
    
};

// Start Function Handel Active

function handelActive(elem){
    elem.target.parentElement.querySelectorAll(".active").forEach(e =>{
        e.classList.remove("active");
    });
    elem.target.classList.add("active");
};

// End Function All




