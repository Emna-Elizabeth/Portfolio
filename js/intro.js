
const text="I am Emna Elizabeth Jose";
const speed=300;

let i=0;
function typeWriter(){
  if(i<text.length){
    document.getElementById("typewriter").textContent+=text.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}
window.onload=function(){
    typeWriter();
};