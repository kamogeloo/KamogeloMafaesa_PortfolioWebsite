//First card
//movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//animate items on card
const title = document.querySelector (".info h1");
const illustration = document.querySelector (".illustration img");
const description = document.querySelector (".info h3");



//moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container.addEventListener("mouseenter", (e) => {

    card.style.transition = "none";

    //pop out effect
title.style.transform = "translateZ(150px)"; 
illustration.style.transform = "translateZ(200px)"; 
description.style.transform = "translateZ(115px)"; 


});



  //animate out
  container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title.style.transform = "translateZ(0px)";
      illustration.style.transform = "translateZ(0px)"; 
      description.style.transform = "translateZ(0px)"; 
      
  });



  //Second card
//movement animation
const card1 = document.querySelector(".caard");
const container1 = document.querySelector(".cont");

//animate items on card
const title1 = document.querySelector (".infor h1");
const illustration1 = document.querySelector (".illustrationn img");
const description1 = document.querySelector (".infor h3");



//moving animation event
container1.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card1.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container1.addEventListener("mouseenter", (e) => {

    card1.style.transition = "none";

    //pop out effect
title1.style.transform = "translateZ(150px)"; 
illustration1.style.transform = "translateZ(200px)"; 
description1.style.transform = "translateZ(100px)"; 


});



  //animate out
  container1.addEventListener("mouseleave", (e) => {
      card1.style.transition = "all 0.5s ease";
      card1.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title1.style.transform = "translateZ(0px)";
      illustration1.style.transform = "translateZ(0px)"; 
      description1.style.transform = "translateZ(0px)"; 
      
  });

  //Third card
//movement animation
const card2 = document.querySelector(".card3");
const container2 = document.querySelector(".container3");

//animate items on card
const title2 = document.querySelector (".info3 h1");
const illustration2 = document.querySelector (".illustration3 img");
const description2 = document.querySelector (".info3 h3");



//moving animation event
container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card2.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container2.addEventListener("mouseenter", (e) => {

    card2.style.transition = "none";

    //pop out effect
title2.style.transform = "translateZ(150px)"; 
illustration2.style.transform = "translateZ(200px)"; 
description2.style.transform = "translateZ(100px)"; 


});



  //animate out
  container2.addEventListener("mouseleave", (e) => {
      card2.style.transition = "all 0.5s ease";
      card2.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title2.style.transform = "translateZ(0px)";
      illustration2.style.transform = "translateZ(0px)"; 
      description2.style.transform = "translateZ(0px)"; 
      
  });

  //Fourth card
//movement animation
const card3 = document.querySelector(".card4");
const container3 = document.querySelector(".container4");

//animate items on card
const title3 = document.querySelector (".info4 h1");
const illustration3 = document.querySelector (".illustration4 img");
const description3 = document.querySelector (".info4 h3");



//moving animation event
container3.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card3.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container3.addEventListener("mouseenter", (e) => {

    card3.style.transition = "none";

    //pop out effect
title3.style.transform = "translateZ(100px)"; 
illustration3.style.transform = "translateZ(100px)"; 
description3.style.transform = "translateZ(50px)"; 


});



  //animate out
  container3.addEventListener("mouseleave", (e) => {
      card3.style.transition = "all 0.5s ease";
      card3.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title3.style.transform = "translateZ(0px)";
      illustration3.style.transform = "translateZ(0px)"; 
      description3.style.transform = "translateZ(0px)"; 
      
  });

  //Fifth card
//movement animation
const card4 = document.querySelector(".card5");
const container4 = document.querySelector(".container5");

//animate items on card
const title4 = document.querySelector (".info5 h1");
const illustration4 = document.querySelector (".illustration5 img");
const description4 = document.querySelector (".info5 h3");



//moving animation event
container4.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card4.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container4.addEventListener("mouseenter", (e) => {

    card4.style.transition = "none";

    //pop out effect
title4.style.transform = "translateZ(100px)"; 
illustration4.style.transform = "translateZ(120px)"; 
description4.style.transform = "translateZ(50px)"; 


});



  //animate out
  container4.addEventListener("mouseleave", (e) => {
      card4.style.transition = "all 0.5s ease";
      card4.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title4.style.transform = "translateZ(0px)";
      illustration4.style.transform = "translateZ(0px)"; 
      description4.style.transform = "translateZ(0px)"; 
      
  });

  //Sixth card
//movement animation
const card5 = document.querySelector(".card6");
const container5 = document.querySelector(".container6");

//animate items on card
const title5 = document.querySelector (".info6 h1");
const illustration5 = document.querySelector (".illustration6 img");
const description5 = document.querySelector (".info6 h3");



//moving animation event
container5.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card5.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container5.addEventListener("mouseenter", (e) => {

    card5.style.transition = "none";

    //pop out effect
title5.style.transform = "translateZ(100px)"; 
illustration5.style.transform = "translateZ(100px)"; 
description5.style.transform = "translateZ(50px)"; 


});



  //animate out
  container5.addEventListener("mouseleave", (e) => {
      card5.style.transition = "all 0.5s ease";
      card5.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title5.style.transform = "translateZ(0px)";
      illustration5.style.transform = "translateZ(0px)"; 
      description5.style.transform = "translateZ(0px)"; 
      
  });


  //Seventh card
//movement animation
const card6 = document.querySelector(".card7");
const container6 = document.querySelector(".container7");

//animate items on card
const title6 = document.querySelector (".info7 h1");
const illustration6 = document.querySelector (".illustration7 img");
const description6 = document.querySelector (".info7 h3");



//moving animation event
container6.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card6.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container6.addEventListener("mouseenter", (e) => {

    card6.style.transition = "none";

    //pop out effect
title6.style.transform = "translateZ(100px)"; 
illustration6.style.transform = "translateZ(100px)"; 
description6.style.transform = "translateZ(50px)"; 


});



  //animate out
  container6.addEventListener("mouseleave", (e) => {
      card6.style.transition = "all 0.5s ease";
      card6.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title6.style.transform = "translateZ(0px)";
      illustration6.style.transform = "translateZ(0px)"; 
      description6.style.transform = "translateZ(0px)"; 
      
  });

  //Eighth card
//movement animation
const card7 = document.querySelector(".card8");
const container7 = document.querySelector(".container8");

//animate items on card
const title7 = document.querySelector (".info8 h1");
const illustration7 = document.querySelector (".illustration8 img");
const description7 = document.querySelector (".info8 h3");



//moving animation event
container7.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card7.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container7.addEventListener("mouseenter", (e) => {

    card7.style.transition = "none";

    //pop out effect
title7.style.transform = "translateZ(100px)"; 
illustration7.style.transform = "translateZ(100px)"; 
description7.style.transform = "translateZ(50px)"; 


});



  //animate out
  container7.addEventListener("mouseleave", (e) => {
      card7.style.transition = "all 0.5s ease";
      card7.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title7.style.transform = "translateZ(0px)";
      illustration7.style.transform = "translateZ(0px)"; 
      description7.style.transform = "translateZ(0px)"; 
      
  });


  //Nineth card
//movement animation
const card8 = document.querySelector(".card9");
const container8 = document.querySelector(".container9");

//animate items on card
const title8 = document.querySelector (".info9 h1");
const illustration8 = document.querySelector (".illustration9 img");
const description8 = document.querySelector (".info9 h3");



//moving animation event
container8.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card8.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container8.addEventListener("mouseenter", (e) => {

    card8.style.transition = "none";

    //pop out effect
title8.style.transform = "translateZ(100px)"; 
illustration8.style.transform = "translateZ(100px)"; 
description8.style.transform = "translateZ(50px)"; 


});



  //animate out
  container8.addEventListener("mouseleave", (e) => {
      card8.style.transition = "all 0.5s ease";
      card8.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title8.style.transform = "translateZ(0px)";
      illustration8.style.transform = "translateZ(0px)"; 
      description8.style.transform = "translateZ(0px)"; 
      
  });

  //Tenth card
//movement animation
const card9 = document.querySelector(".card10");
const container9 = document.querySelector(".container10");

//animate items on card
const title9= document.querySelector (".info10 h1");
const illustration9 = document.querySelector (".illustration10 img");
const description9 = document.querySelector (".info10 h3");



//moving animation event
container9.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card9.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container9.addEventListener("mouseenter", (e) => {

    card9.style.transition = "none";

    //pop out effect
title9.style.transform = "translateZ(100px)"; 
illustration9.style.transform = "translateZ(100px)"; 
description9.style.transform = "translateZ(50px)"; 


});



  //animate out
  container9.addEventListener("mouseleave", (e) => {
      card9.style.transition = "all 0.5s ease";
      card9.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title9.style.transform = "translateZ(0px)";
      illustration9.style.transform = "translateZ(0px)"; 
      description9.style.transform = "translateZ(0px)"; 
      
  });

  //Elevnth card
//movement animation
const card10 = document.querySelector(".card11");
const container10 = document.querySelector(".container11");

//animate items on card
const title10 = document.querySelector (".info11 h1");
const illustration10 = document.querySelector (".illustration11 img");
const description10 = document.querySelector (".info11 h3");



//moving animation event
container10.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card10.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container10.addEventListener("mouseenter", (e) => {

    card10.style.transition = "none";

    //pop out effect
title10.style.transform = "translateZ(100px)"; 
illustration10.style.transform = "translateZ(100px)"; 
description10.style.transform = "translateZ(50px)"; 


});



  //animate out
  container10.addEventListener("mouseleave", (e) => {
      card10.style.transition = "all 0.5s ease";
      card10.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title10.style.transform = "translateZ(0px)";
      illustration10.style.transform = "translateZ(0px)"; 
      description10.style.transform = "translateZ(0px)"; 
      
  });
  //Twelveth card
//movement animation
const card11 = document.querySelector(".card12");
const container11 = document.querySelector(".container12");

//animate items on card
const title11 = document.querySelector (".info12 h1");
const illustration11 = document.querySelector (".illustration12 img");
const description11 = document.querySelector (".info12 h3");



//moving animation event
container11.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card11.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container11.addEventListener("mouseenter", (e) => {

    card11.style.transition = "none";

    //pop out effect
title11.style.transform = "translateZ(100px)"; 
illustration11.style.transform = "translateZ(100px)"; 
description11.style.transform = "translateZ(50px)"; 


});
 //Thirteenth card
//movement animation
const card12 = document.querySelector(".card13");
const container12 = document.querySelector(".container13");

//animate items on card
const title12 = document.querySelector (".info13 h1");
const illustration12 = document.querySelector (".illustration13 img");
const description12 = document.querySelector (".info13 h3");



//moving animation event
container12.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card12.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container12.addEventListener("mouseenter", (e) => {

    card12.style.transition = "none";

    //pop out effect
title12.style.transform = "translateZ(100px)"; 
illustration12.style.transform = "translateZ(100px)"; 
description12.style.transform = "translateZ(50px)"; 


});



  //animate out
  container12.addEventListener("mouseleave", (e) => {
      card12.style.transition = "all 0.5s ease";
      card12.style.transform = `rotateY(0deg) rotateX(0deg)`;

      //pop back effect
      title12.style.transform = "translateZ(0px)";
      illustration12.style.transform = "translateZ(0px)"; 
      description12.style.transform = "translateZ(0px)"; 
      
  });
   //14th card
//movement animation
const card13 = document.querySelector(".card14");
const container13 = document.querySelector(".container14");

//animate items on card
const title13 = document.querySelector (".info14 h1");
const illustration13 = document.querySelector (".illustration14 img");
const description13 = document.querySelector (".info14 h3");



//moving animation event
container13.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card13.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container13.addEventListener("mouseenter", (e) => {

    card13.style.transition = "none";

    //pop out effect
title13.style.transform = "translateZ(100px)"; 
illustration13.style.transform = "translateZ(100px)"; 
description13.style.transform = "translateZ(50px)"; 


});
 //15th card
//movement animation
const card14 = document.querySelector(".card15");
const container14 = document.querySelector(".container15");

//animate items on card
const title14 = document.querySelector (".info15 h1");
const illustration14 = document.querySelector (".illustration15 img");
const description14 = document.querySelector (".info15 h3");



//moving animation event
container14.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card14.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container14.addEventListener("mouseenter", (e) => {

    card14.style.transition = "none";

    //pop out effect
title14.style.transform = "translateZ(100px)"; 
illustration14.style.transform = "translateZ(100px)"; 
description14.style.transform = "translateZ(50px)"; 


});
 //16th card
//movement animation
const card15 = document.querySelector(".card16");
const container15 = document.querySelector(".container16");

//animate items on card
const title15 = document.querySelector (".info16 h1");
const illustration15 = document.querySelector (".illustration16 img");
const description15 = document.querySelector (".info16 h3");



//moving animation event
container15.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card15.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container15.addEventListener("mouseenter", (e) => {

    card15.style.transition = "none";

    //pop out effect
title15.style.transform = "translateZ(100px)"; 
illustration15.style.transform = "translateZ(100px)"; 
description15.style.transform = "translateZ(50px)"; 


});
 //17th card
//movement animation
const card16 = document.querySelector(".card17");
const container16 = document.querySelector(".container17");

//animate items on card
const title16 = document.querySelector (".info17 h1");
const illustration16 = document.querySelector (".illustration17 img");
const description16 = document.querySelector (".info17 h3");



//moving animation event
container16.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card16.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container16.addEventListener("mouseenter", (e) => {

    card16.style.transition = "none";

    //pop out effect
title16.style.transform = "translateZ(150px)"; 
illustration16.style.transform = "translateZ(200px)"; 
description16.style.transform = "translateZ(100px)"; 


});

 //18th card
//movement animation
const card17 = document.querySelector(".card18");
const container17 = document.querySelector(".container18");

//animate items on card
const title17 = document.querySelector (".info18 h1");
const illustration17 = document.querySelector (".illustration18 img");
const description17 = document.querySelector (".info18 h3");



//moving animation event
container17.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card17.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container17.addEventListener("mouseenter", (e) => {

    card17.style.transition = "none";

    //pop out effect
title17.style.transform = "translateZ(150px)"; 
illustration17.style.transform = "translateZ(200px)"; 
description17.style.transform = "translateZ(100px)"; 


});

 //19th card
//movement animation
const card18 = document.querySelector(".card19");
const container18 = document.querySelector(".container19");

//animate items on card
const title18 = document.querySelector (".info19 h1");
const illustration18 = document.querySelector (".illustration19 img");
const description18 = document.querySelector (".info19 h3");



//moving animation event
container18.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card18.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container18.addEventListener("mouseenter", (e) => {

    card18.style.transition = "none";

    //pop out effect
title18.style.transform = "translateZ(150px)"; 
illustration18.style.transform = "translateZ(200px)"; 
description18.style.transform = "translateZ(100px)"; 


});

 //20th card
//movement animation
const card19 = document.querySelector(".card20");
const container19 = document.querySelector(".container20");

//animate items on card
const title19 = document.querySelector (".info20 h1");
const illustration19 = document.querySelector (".illustration20 img");
const description19 = document.querySelector (".info20 h3");



//moving animation event
container19.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card19.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container19.addEventListener("mouseenter", (e) => {

    card19.style.transition = "none";

    //pop out effect
title19.style.transform = "translateZ(150px)"; 
illustration19.style.transform = "translateZ(200px)"; 
description19.style.transform = "translateZ(100px)"; 


});

 //21st card
//movement animation
const card20 = document.querySelector(".card21");
const container20 = document.querySelector(".container21");

//animate items on card
const title20 = document.querySelector (".info21 h1");
const illustration20 = document.querySelector (".illustration21 img");
const description20 = document.querySelector (".info21 h3");



//moving animation event
container20.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    card20.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });


  //animating in
container20.addEventListener("mouseenter", (e) => {

    card11.style.transition = "none";

    //pop out effect
title20.style.transform = "translateZ(150px)"; 
illustration20.style.transform = "translateZ(200px)"; 
description20.style.transform = "translateZ(100px)"; 


});