// Selectors

let btn1 = document.getElementById("btn-1"); 

btn1.addEventListener("click", showDiv);

// showDiv function

function showDiv(e) {
    document.getElementById("div-1").classList.toggle("display-none"); 
}