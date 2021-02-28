// "use strict";
// (function () {
//   window.addEventListener("load", init);

//   function init() {
//     console.log("plz");
//     id("mask-form").addEventListener("submit", result);
//   }

//   function result() {
//     console.log("hi");
//   }

//   // Helper Function
//   function id(idName) {
//     return document.getElementById(idName);
//   }

// })();



//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var starlightBagsScore = 0;
var avocadoScore = 0;
var tentreeScore = 0;
var whimsyRowScore = 0;
// var LasagnaScore = 0;
// var MacCheeseScore = 0;
// var BakedZitiScore = 0;
// var TeriyakiChickenScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// DOM variables for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
// var q2a3 = document.getElementById("q2a3");
// var q2a4 = document.getElementById("q2a4");

// DOM variables for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// DOM variables for question 4
// var q4a1 = document.getElementById("q4a1");
// var q4a2 = document.getElementById("q4a2");
// var q4a3 = document.getElementById("q4a3");
// var q4a4 = document.getElementById("q4a4");

// DOM variables for question 5
// var q5a1 = document.getElementById("q5a1");
// var q5a2 = document.getElementById("q5a2");
// var q5a3 = document.getElementById("q5a3");
// var q5a4 = document.getElementById("q5a4");

// DOM variables for question 6
// var q6a1 = document.getElementById("q6a1");
// var q6a2 = document.getElementById("q6a2");
// var q6a3 = document.getElementById("q6a3");
// var q6a4 = document.getElementById("q6a4");

// DOM variables for results
var result = document.getElementById("result");




//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", starlightBags);
q1a2.addEventListener("click", avocado);
q1a3.addEventListener("click", tentree);
q1a4.addEventListener("click", whimsyRow);

q2a1.addEventListener("click", tentree);
q2a2.addEventListener("click", whimsyRow);
// q2a3.addEventListener("click", Burrito);
// q2a4.addEventListener("click", Burgers);

q3a1.addEventListener("click", starlightBags);
q3a2.addEventListener("click", avocado);
q3a3.addEventListener("click", tentree);
q3a4.addEventListener("click", whimsyRow);

// q4a1.addEventListener("click", SpaghettiMeatballs);
// q4a2.addEventListener("click", ShoyuRamen);
// q4a3.addEventListener("click", Burrito);
// q4a4.addEventListener("click", Burgers);

// q5a1.addEventListener("click", SpaghettiMeatballs);
// q5a2.addEventListener("click", ShoyuRamen);
// q5a3.addEventListener("click", Burrito);
// q5a4.addEventListener("click", Burgers);

// q6a1.addEventListener("click", SpaghettiMeatballs);
// q6a2.addEventListener("click", ShoyuRamen);
// q6a3.addEventListener("click", Burrito);
// q6a4.addEventListener("click", Burgers);


function show_image(src, width, height, alt) {
    var omg = document.createElement("formImage");
    omg.src = src;
    omg.width = width;
    omg.height = height;
    omg.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(omg);
}

//#TODO: Define SpaghettiMeatballs quiz functions here
function starlightBags() {
  starlightBagsScore += 1;
  questionCount = questionCount + 1;
  if (questionCount >= 3){
      updateResult();
  }
}

// Define ShoyuRamen quiz functions here

function avocado() {
  avocadoScore += 1;
  questionCount += 1;
  if (questionCount >= 3){
      updateResult();
  }
}

// Define Burrito quiz functions here

function tentree() {
  tentreeScore += 1;
  questionCount += 1;
  if (questionCount >= 3){
      updateResult();
  }
}

// Define Burgers quiz functions here

function whimsyRow() {
  whimsyRowScore += 1;
  questionCount += 1;
  if (questionCount >= 3){
      updateResult();
  }
}

// Define Lasagna quiz functions here

// function Lasagna() {
//   LasagnaScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// // Define MacChesse quiz functions here

// function MacChesse() {
//   MacChesseScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// // Define BakedZiti quiz functions here

// function BakedZiti() {
//   BakedZitisScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// // Define TeriyakiChicken quiz functions here

// function TeriyakiChicken() {
//   TeriyakiChickenScore += 1;
//   questionCount += 1;
//   if (questionCount >= 6){
//       updateResult();
//   }
// }

// Funtion for the results

function updateResult(){
 if (starlightBagsScore >= 2){
         result.innerHTML = "Shop at Starlight Bags (etsy)! These reusable fabric face masks are made from two layers of 100% cotton fabric with elastic ear loops. Wear this mask for protection from dust, wind, bugs, to keep you from touching your face and general face protection. Suitable for daily or occasional wear, for home, the workplace, yard work, home DIY projects and outdoors. This is not a medical device, but may serve as a protective barrier for various daily activities.";
         show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9XFuj7aEdONvY_hiwyp9jY6NGKHWPJ30iCQ&usqp=CAU', '300px', '450px', 'Spaghetti and Meatballs');
         starlightBagsScore = 0;
 }

 else if(avocadocore >= 2){
        result.innerHTML = "Shop at Avocado! These 100% Global Organic Textile Standard (GOTS) organic certified face masks are made with two layers of organic cotton and your choice of tie straps or over-the-ear elastic loops. All face coverings include a pocket for filter insertion (filters sold separately). Coverings are not particulate filtering N95 medical grade masks, but will offer protection and help to inhibit the transmission of germs.";
        show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPP7EROsrYnlGf0GUk9jdqIyoCA41RweCK-A&usqp=CAU', '300px','450px', 'Shoyu Ramen');
        avocadoScore = 0;
 }

 else if(tentreeScore >= 2){
    result.innerHTML = "Shop at Tentree! They have Biodegradable triple-layered mask with space for a filter (filter not included). Made of 100% Fairtrade Organic Cotton, these masks feature Cradle to Cradle Certified™ fabric, solid color face masks, and a tentree logo with adjustable ear straps. These are washable and reusable cloth face masks - wash cold and hang to dry. All masks are pre-washed to ensure they don't change shape (pre-shrunk). Designed in Canada, and ethically made in India.";
    show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEFzA6C08LMcRAsFw3wDpGvTzDDm7qOiXK9w&usqp=CAU', '300px', '450px', 'Burrito');
    tentreeScore = 0;
 }

 else if (whimsyRowScore >= 2){
    result.innerHTML = "Shop at Whimy And Row! They have made a 100% cotton machine washable mask. It's a preventative mask, good for people practicing social distancing (a cool 6' apart). When you buy one, they donate one! NOT MEDICAL GRADE. They made 1,000 and plan to make more & donate to various LA locations that need them the most. They’ll be donating to the Union Rescue Mission, Downtown Women's Center & Midnight Mission.";
    show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHuGlLkBjk9_qz6in7L0UVX38UKHfU9sYZHw&usqp=CAU', '300px', '450px', 'Burger');
    whimsyRowScore = 0;
 } else {
    result.innerHTML = "Shop at OnyxMatter! This is a handmade face covering. It is made of 100% cotton that has been hand-dyed. The face covering has a metal piece in the seam above the nose bridge. There are elastic bands to secure it to your ears and adjustable woven straps to tie around your neck and back of your head. There is a 100% cotton lining with a pocket for the filter. You can use a tissue, paper towel, coffee filter, or vacuum cleaner bag as a filter. After use throw out the filter and wash the fabric.";
 }
}

// else if (LasagnaScore >= 3){
//   result.innerHTML = "You are Lasagna!!"
// }

// else if (MacCheeseScore >= 4){
//   result.innerHTML = "You are Mac and Cheese!!"
// }

// else if (BakedZitiScore >= 3){
//   result.innerHTML = "You are Baked Ziti!!"
// }

// else if (TeriyakiChickenScore >= 3){
//   result.innerHTML = "You are Teriyaki Chicken!!"
// }