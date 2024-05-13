const image=document.getElementById("image");
function changeImage(){
    if(image.src.includes("./assets/Media (1).jpg")){
        image.src="./assets/Media.jpg";
    }
    else{
        image.src="./assets/Media (1).jpg";
    }
}
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