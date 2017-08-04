function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results){
       return results[1];
   }else{
       return undefined;
   }
}
function setup(){
   var background = getParam("background") || "black";
   var myimages = getParam("myimages") || false;
   if(background == "black"){
       $('body').append("<h1>It's a bit dark in here... Let's brighten things up by writing '?background=' and a color in the url. Try it out!")
   }
   else if(background !== "black"){
       $('body').append("<h1>That's better, but it's still a bit bland. If you see my code here, all my images are set to 'false'. Could you set a parameter to 'images' to not make it false anymore? To add another parameter, just type '&' instead of the '?' next to the parameter you already have.")
   }
   if(background !=="black" && myimages == true) {
     document.body.style.background = background;
   }
}

$.ajax({
	url: "https://random.dog/woof.json",
	success: function(data) {
	console.log(data);
	// Need to change video src
}