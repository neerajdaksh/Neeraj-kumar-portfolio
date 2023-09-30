// ***select element***
const body =document.querySelector("body");
const modeBtn = document.querySelector(".circle");
const showHamBtn = document.querySelector(".hambuger-btn");
const closeBtn = document.querySelector("#close-btn");
const hamburger = document.querySelector(".hamburger");



//*** change mode button function***

const changeBtnMode = (targetElement)=>{
 if(targetElement.classList.contains("circle")){
    if(targetElement.classList.contains("light-circle")){
        targetElement.classList.remove("light-circle");
        targetElement.classList.add("dark-circle");
    }
    else{
        targetElement.classList.remove("dark-circle");
        targetElement.classList.add("light-circle");
    }
 }

 darkMode();
}

//****** add dark mode function*******/
const darkMode=()=>{

  body.classList.toggle("dark");

}



// *** add event listener to modebtn **
modeBtn.addEventListener("click",(e)=>{
    changeBtnMode(e.target);
   
});


// *********** hamburger show function ***********

const showHamburger=()=>{

hamburger.style.transform = 'translateY(0)';
}

// ### hide hamburger ###
const hideHambuger=()=>{
   hamburger.style.transform = "translateY(-11rem)";
}


showHamBtn.addEventListener("click",()=>{
showHamburger();
});

closeBtn.addEventListener("click",()=>{
    hideHambuger();
});

 