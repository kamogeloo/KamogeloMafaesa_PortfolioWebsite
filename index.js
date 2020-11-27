
//responsiveness
function Responsivemenu(){
    let menubar = document.getElementById("menulist");
    if(menubar.className === "navi"){
        menubar.className += "responsive";
    }
    else{
        menubar.className = "navi";
    }
    }

    //scrolluparrow
    
    let topbutton = document.getElementById("topbtn");
    window.onscroll = function() {scrollTo()};
    console.log('it works');
    
    function scrollTo() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        {
              topbutton.style.display = "block";
    } 
    else {
        topbutton.style.display = "none";
    }
    }

    

    function BacktoTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0;
    
    }

    
//code for menu   credit: https://youtu.be/H4MkGzoACpQ
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li, #button");


hamburger.addEventListener("click", () => {

navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});
});