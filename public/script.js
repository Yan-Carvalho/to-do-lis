const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);

$(document).ready(function(){
  var counter = 9;
window.setInterval(function(){
counter = counter - 3;
if(counter>=0){
  document.getElementById('off').innerHTML=counter;
}
if (counter===0){
  counter=9;
}
$("#tasks").load(window.location.href + " #tasks" );
}, 10);
});