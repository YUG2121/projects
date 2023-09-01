const text = document.getElementById("heading");

text.addEventListener("keyup", upkey);

function upkey() {

   text.style.backgroundColor = 'pink'
}

text.addEventListener("keydown" , keydown)


function keydown(){

    text.style.backgroundColor = 'red'
}