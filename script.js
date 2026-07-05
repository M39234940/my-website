// ===== Dark Mode =====

const darkBtn = document.getElementById("darkBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});

}

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

}

// ===== Welcome =====// ===== Search =====

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ===== Back To Top =====

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#1565c0";
topBtn.style.color="white";
topBtn.style.display="none";
topBtn.style.cursor="pointer";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

console.log("Welcome to Study With Muskan UPSC");// ===== Visitor Counter =====

let visitors = localStorage.getItem("visitors");

if(!visitors){
    visitors = 1;
}else{
    visitors = parseInt(visitors) + 1;
}

localStorage.setItem("visitors", visitors);

const visitorBox = document.getElementById("visitor");

if(visitorBox){
    visitorBox.innerHTML = visitors;
}

// ===== Welcome Popup =====

setTimeout(() => {
    alert("🙏 Welcome to Study With Muskan UPSC");
}, 1500);

// ===== Countdown Timer =====

const countdownBox = document.getElementById("countdown-box");

if(countdownBox){

function updateCountdown(){// ===== Auto Theme =====

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
document.body.classList.add("dark");
}

// ===== Breaking News =====

const notice=document.querySelector(".topbar");

const news=[
"📢 Daily Current Affairs Updated",
"📚 New PDF Notes Available",
"📝 Daily MCQ Uploaded",
"🎥 Live Class Today at 7 PM",
"💳 Premium Course Available"
];

let i=0;

if(notice){

setInterval(()=>{

notice.innerHTML=news[i];

i++;

if(i>=news.length){

i=0;

}

},4000);

}

// ===== Card Animation =====

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="translateY(0)";

});

});

// ===== Loading Finished =====

window.addEventListener("load",()=>{

console.log("Study With Muskan UPSC Loaded Successfully");

});// ===== Auto Image Slider =====

const sliderImages = [
"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200",
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200"
];

const hero = document.querySelector(".hero");

let current = 0;

if(hero){

setInterval(()=>{

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${sliderImages[current

const examDate = new Date("May 24, 2027 09:30:00").getTime();

const now = new Date().getTime();

const gap = examDate - now;

const days = Math.floor(gap/(1000*60*60*24));

const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((gap%(1000*60*60))/(1000*60));

countdownBox.innerHTML =
days+" Days "+
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}
