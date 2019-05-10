let btn = document.getElementById("button");
let iconYes = document.getElementById('yes');
let iconNo = document.getElementById('no');
btn.addEventListener('click', turnButton);




function turnButton(){
iconYes.classList.toggle("iconTurnYes");
iconNo.classList.toggle("iconTurnNo");
console.log("działa");
}