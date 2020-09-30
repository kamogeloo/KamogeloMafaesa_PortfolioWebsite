
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