$(window).load(function(){
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  });

$(".swipe-area").swipe({
      swipeStatus:function(event, phase, direction, distance, duration, fingers)
            {
              if (phase=="move" && direction =="right") {
                 $(".container").addClass("open-sidebar");
                 return false;
                }
                if (phase=="move" && direction =="left") {
                     $(".container").removeClass("open-sidebar");
                     return false;
                }
            }
  }); 

  $("body").css("display", "none");
  $("body").fadeIn(1500);

  $("a.transition").click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(1000, redirectPage);      
  });
       
  function redirectPage() {
      window.location = linkLocation;
  }  

  
  
});


// 	var answer = prompt ("Hello");

// switch (answer) {
//   case "Hello":
//     alert("Hello there!");
//     break;
//   case "How are you?":
//     alert("I am good.");
//     break;
//   case "How is you day?":
//     alert("so far, so good.");
//     break;
// }

// function bb(bee,honey) {
//   if (bee === honey) {
//     return true;
//   } else {
//     return false;
// }
  

//  var logodesign = {
//  	"logo": "swezinery",
//  	"colors": 2,
//  	"size": "square",
//  	"style" : ["typography", "geometric", "qrcode", "asian"]
// };
// 	logo.name = "Swe Zin Thant"
// 	logodesign["edge"] = "round";

// 	delete logodesign.size;

// 	things.hasownProperty("logo");
// 	things.hasownProperty("typeface");
