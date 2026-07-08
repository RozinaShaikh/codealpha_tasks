const images=document.querySelectorAll(".card img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightbox-img");

let current=0;

function openLightbox(index){

current=index;

lightbox.style.display="flex";

lightImg.src=images[current].src;

}

document.querySelector(".close").onclick=()=>{

lightbox.style.display="none";

}

document.getElementById("next").onclick=()=>{

current=(current+1)%images.length;

lightImg.src=images[current].src;

}

document.getElementById("prev").onclick=()=>{

current=(current-1+images.length)%images.length;

lightImg.src=images[current].src;

}

window.onclick=(e)=>{

if(e.target==lightbox){

lightbox.style.display="none";

}

}

function filterSelection(category){

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

if(category=="all"){

card.style.display="block";

}
else{

card.style.display=card.classList.contains(category)
?"block":"none";

}

});

document.querySelectorAll(".filter button").forEach(btn=>btn.classList.remove("active"));

event.target.classList.add("active");

}