
let increment = document.getElementById("Incrementbtn");
let decrement = document.getElementById("Decrementbtn");
let reset = document.getElementById("Resetbtn");
let count = document.getElementById("countvalue");

decrement.addEventListener("click" , () =>{

const value = Number(count.innerText);

if( value > 0){
  count.innerText = value -1
}else{
  alert("negitive value not allowed")
}

});

increment.addEventListener("click" , () =>{

  const value = Number(count.innerText);
  if(value >= 10){
    alert("more then 10 is not allowed")

  }else{
    count.innerText = value + 1
  }
})

reset.addEventListener("click" , () =>{

  count.innerText = 0
})