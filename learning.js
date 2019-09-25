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