// LEARNING HTML SECTION

// DOM Selectors

let reflect = document.getElementById("reflect");
let self = document.getElementById("self");
let judge = document.getElementById("judge");
let learning = document.getElementById("learning");
let learning2 = document.getElementById("learning-2");
let learning3 = document.getElementById("learning-3");

// Event listener

reflect.addEventListener("click", showArticle);
self.addEventListener("click", showArticle2);
judge.addEventListener("click", showArticle3);


// Function

function showArticle(e) {
    if(learning2.classList.contains("display-none") && learning3.classList.contains("display-none")) {
        learning.classList.toggle("display-none");
    } else {
        learning2.classList.add("display-none");
        learning3.classList.add("display-none");
        learning.classList.toggle("display-none");
    }
}

function showArticle2(e) {
    if(learning.classList.contains("display-none") && learning3.classList.contains("display-none")) {
        learning2.classList.toggle("display-none");
    } else {
        learning.classList.add("display-none");
        learning3.classList.add("display-none");
        learning2.classList.toggle("display-none");
    }
}

function showArticle3(e) {
    if(learning.classList.contains("display-none") && learning2.classList.contains("display-none")) {
        learning3.classList.toggle("display-none");
    } else {
        learning.classList.add("display-none");
        learning2.classList.add("display-none");
        learning3.classList.toggle("display-none");
    }
}

// MRPBA SECTION 

// DOM Selectors

let btn1 = document.getElementById("btn-1"); 
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let close1 = document.getElementById("close-1");
let close2 = document.getElementById("close-2");
let close3 = document.getElementById("close-3");

// Event Listeners
btn1.addEventListener("click", showDiv);
btn2.addEventListener("click", showDiv2);
btn3.addEventListener("click", showDiv3);
close1.addEventListener("click", showDiv);
close2.addEventListener("click", showDiv2);
close3.addEventListener("click", showDiv3);

// showDiv function

function showDiv(e) {
    document.getElementById("div-1").classList.toggle("display-none"); 
}

function  showDiv2(e) {
    document.getElementById("div-2").classList.toggle("display-none"); 
}

function  showDiv3(e) {
    document.getElementById("div-3").classList.toggle("display-none"); 
}

