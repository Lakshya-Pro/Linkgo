var a = document.querySelector(".javanav");
var button = new Audio("beep.mp3");
var m = new Audio("die.wav");
var l = new Audio("gameover.mp3");
a.addEventListener("click", function anime(){
var h = a.classList.add("anime");
setTimeout(f, "100");
function f(){
    a.classList.remove("anime");
    
}
});



var but = $(".javanav").click(function click(){
  
 
    button.play();
    $(".nav-item").addClass("back");
  
   $(".mainb").addClass("myFoot");
  $(".name").addClass("show");
  });
var no = $(".home").click(function fail(){

    m.play();
  no.fadeOut();

    setTimeout(function hello(){
     no.fadeIn();
    }, "200");
    no.text(" HomePage Only");
   setTimeout(function back(){
no.text("Home");
   }, "1000");
}
);  

var nav1 = $(".nav1").click(function so(){

    l.play();
nav1.animate({opacity: "0.7"});
setTimeout(function back(){
nav1.animate({opacity: "1.0"});
})
});  var nav2 = $(".nav2").click(function so(){

    l.play();
nav2.animate({opacity: "0.7"});
setTimeout(function back(){
nav2.animate({opacity: "1.0"});
})
});   var nav3 = $(".nav3").click(function so(){
    
    l.play();
nav3.animate({opacity: "0.7"});
setTimeout(function back(){
nav3.animate({opacity: "1.0"});
})
});




var flash = $(".wav").on("click", function aer(){
    setTimeout(function fu(){
        var name = prompt("What Is Your Name, If Dont Want To Give Click Cancel, But the name will  Remain YourName.");
        if(name == null){
            mix = "UnknownUser";
        }
        var cap = name.slice(0, 1).toUpperCase();
        var min = name.slice(1, name.length).toLowerCase();
     mix = cap + min;
        if(name == ""){
            mix = "UnknownUser"
            
        }
     
           
      
  He(mix);

       flash.fadeOut().css("visibility", "none");
      $(".about").addClass("margin");
    
    
        setTimeout(function su()
        {alert("Welcome "+ mix + " To Place Where You Can Explore Without Going Anywhere. From Ceo Lakshya-pro.")}, "1000");
   
    }, "200");
    


});
function He(mix){
$(".name").after("<h4></h4>");
$(".yname").text( mix);
}

$(".bio").click(function bio(){
var bio = prompt("Please Enter Your Job You Do, ex.Doctor, Surgeon, Engineer etc. If Dont Want To Give Cancel.And It Should Be a Word NoT A Sentence");
$(".job").html(bio);
if(bio == null){
    $(".job").html("Work As Student - Default");
}

if(bio.length > 30){
    bio.slice(30, 100);
}
var cap1 = bio.slice(0, 1).toUpperCase();
var min2 = bio.slice(1, bio.length).toLowerCase();
mix1 = cap1 + min2;
$(".job").text("Works As " + mix1).addClass("cbio mbio");
$(".jobline").css({"width": "80%"});
$(".bio").fadeOut();
$(".bioa").html("Job");


    if(bio == ""){
        $(".job").html("Work As Student - Default");
    }


});

var feed1 = $(".feed1").click(function feed(){
    
var feed = prompt("Thank You We Appreciate That You Liked And Enjoyed The Experience, What Is The Reasons You Liked The Website. From Ceo Lakshya");
alert("Thanks For The FeedBack");
$(".feed1").css("border", "3px solid");
$(".feed2").css("border", "0");
$(".feed3").css("border", "0");
});


var feed1 = $(".feed2").click(function feed(){
    
    var feed = prompt("Thank You We Appreciate That You Felt That This Not A Bad Website, What Is The Reasons You Said This Website Works Fine. From Ceo Lakshya");
    alert("Thanks For The FeedBack");
    $(".feed1").css("border", "0");
    $(".feed3").css("border", "0");
    $(".feed2").css("border", "3px solid white");
    
    });

    var feed1 = $(".feed3").click(function feed(){
    
        var feed = prompt("You Are Not Enjoying And Liking The Experience Of The Website, Sorry For That! You Can Note Reasons That Made This Website be Disliked By You, We Will Work On That.From Ceo Lakshya");
        alert("Thanks For The FeedBack");
        $(".feed3").css("border", "3px solid white");
        $(".feed2").css("border", "0");
$(".feed1").css("border", "0");
        });
    $(".digit2").click(function digit2(){
        random2 = Math.round(Math.random() * 99 + 1);
        if(random2 < 10){
            random2 = random2 + 10;
        }
        $(".randomno").text(random2);

        $(".randomno").addClass("downran");
    });
    $(".digit3").click(function digit2(){
        random3 = Math.round(Math.random() * 999 + 1);
       if(random3 < 100){
           random3 = random3 + 100;
       }
        $(".randomno").text(random3);

        $(".randomno").addClass("downran");
    });
$(".random").click(function paper(){


setTimeout(function time(){
var randomnumber = Math.round(Math.random() * 30000);

$(".randomno").text(randomnumber);

$(".randomno").addClass("downran");
$(".random").css({"opacity": "0.9", "background-color": "red"});
setTimeout(function animation(){
$(".random").css({"opacity": "1.0" ,"background-color": "black"});
}, "200");


});
});


var feed1 = $(".go1").click(function feed(){
    
   
    alert("You Like Minecraft When Its Streamed");
    $(".go1").css("border", "3px solid");
    $(".go2").css("border", "0");
    $(".go3").css("border", "0");
    });
    
    
    var feed1 = $(".go2").click(function feed(){
        
      
        alert("You Like Pubg/Pubg Mobile When Its Streamed");
        $(".go3").css("border", "0");
        $(".go1").css("border", "0");
        $(".go2").css("border", "3px solid white");
        
        });
    
        var feed1 = $(".go3").click(function feed(){
        
          
            alert("You Like Fortnite When Its Streamed");
            $(".go3").css("border", "3px solid white");
            $(".go2").css("border", "0");
    $(".go1").css("border", "0");
            });

$(".buttonhello").on("click", function extendhello(){
var hometotarget = $(".homeweare").addClass("homedesign home2").text("WE ARE AT HOME - POSITION");
hometotarget.fadeIn();
var butonhello = $(".buttonhello").addClass("second2").html( "<a href='helloworld.html' class='afterlink' target='blank'> GO TO HELLOWORLD - TARGET </a>");
});
$("#wave1").click(function crool(){
$(".mhead1").addClass("borderafter");

setTimeout(function android(){
    $(".mhead1").removeClass("borderafter");
}, "200");

});

$("#wave2").click(function crool(){
    $(".mhead2").addClass("borderafter1");
    
    setTimeout(function android(){
        $(".mhead2").removeClass("borderafter1");
    }, "200");
    
    });

$(".topfoot").click(function hello(){
window.scrollTo(0, 0);
});






