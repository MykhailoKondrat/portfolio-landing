import $ from 'jquery';
import 'bootstrap';
import "./scss/main.scss";

//
$(document).ready(function(){
	$( window ).scroll(function() {

	//$( ".navbar" ).animate({"margin":"0"},"slow");
	if ($(window).scrollTop() >= 200) { 
               $( ".navbar" ).css("box-shadow"," 0px -1px 43px -16px rgba(0,0,0,0.75)"); 
                
           }else {
               $( ".navbar" ).css("box-shadow"," none"); 
           	
           }
	})

	if ($(window).width() <= 767.93) {  

             $(".nav-item").attr({"data-toggle":"collapse","data-target":".navbar-collapse"});
             $(".navbar-toggler-icon").add(".nav-link").on("click", function(){
    			 $(".navbar-toggler-icon").toggleClass("active-toggler");
   			 });
       }  
    
});