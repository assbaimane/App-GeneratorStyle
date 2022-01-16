// Formater for html element
let buttonFormater = document.querySelectorAll("button");
buttonFormater.forEach(element => {
    element.classList.add("btn","col-1","m-1");
    if (element.classList.contains("borderStyle")){
        element.style.width = "50px";
        element.classList.add("bg-light");
    }
    else if(!element.classList.contains("bg")){
        element.classList.add("bg-light");
    }
});

let inputFormater = document.querySelectorAll("input");
inputFormater.forEach(element => {
    element.style.width = "60px";
    element.classList.add("m-1","border");
    if(element.type == "number"){
        element.defaultValue = 3;
    }else{}
});

// Functions
function colorPicker(){
    let picker = document.querySelector("input");
    picker.defaultValue = picker.value;
}

// Event Handler 
let inputValues = document.querySelector("#commands")
let customizedBox = document.querySelector("#generatedBox");

// Event Listener on all inputs & buttons
inputValues.addEventListener("click",(event)=> {
    if(event.target.classList.contains("bg")){
        customizedBox.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    }
    else if(event.target.classList.contains("borderStyle")){
        customizedBox.style.border = getComputedStyle(event.target).border;
    }
    else if(event.target.classList.contains("top")){
        customizedBox.style.borderTop = getComputedStyle(event.target).borderTop;
    }
    // ____________________________________________
    //      |
    //      |
    //     \/
    // VOIR ICI PQ CA NE SE RAFRAICHIT PAS DIRECTEMENT
    else if(event.target.type == "color"){
        colorPicker();
        customizedBox.style.backgroundColor = event.target.value;
    }
    else if(event.target.type == "number"){
        console.log(customizedBox.style.borderWidth);
        customizedBox.style.borderTop = getComputedStyle(event.target).borderTop;
        customizedBox.style.borderRight = getComputedStyle(event.target).borderRight;
        customizedBox.style.borderBottom = getComputedStyle(event.target).borderBottom;
        customizedBox.style.borderLeft = getComputedStyle(event.target).borderLeft;
        customizedBox.style.borderRadius = getComputedStyle(event.target).borderRadius;
        customizedBox.style.borderWidth = (event.target.value)+"px";
    }
});