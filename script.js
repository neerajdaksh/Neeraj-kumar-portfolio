// ***select element***
const body =document.querySelector("body");
const modeBtn = document.querySelector(".circle");



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