function toggleMenu(){

const menu =
document.getElementById("mobileMenu");

if(!menu) return;

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}

document.addEventListener("DOMContentLoaded",()=>{

const user =
JSON.parse(localStorage.getItem("currentUser"));

const loginLinks =
document.querySelectorAll('a[href="login.html"]');

if(user){

loginLinks.forEach(link=>{
link.textContent="Profile";
link.href="profile.html";
});

}

});
