"use strict"

$("li").hover(function(event) {
 	$(this).fadeTo(1000,0.25);},
 	function() {
 	$(this).fadeTo(500,1);
 });
 
$("li").click(function() {
	$(this).css("background-color", "orange");
	// function() {
//  	$("li").css("background","rgb(96, 146, 246)");
});	 
 
 $("li").click(function() {
 $(this).html("Clicked!");
 });

// 
// $("#developer").hover(function() {
//         $("#coder").fadeTo(1000,0.4);
//         $("#my_pic").animate({right:'110px'}, 1500);
//     }, function(){
//         $("#coder").fadeTo(1000,1);
//         $("#my_pic").animate({right:'0px'}, 500);            
//     });