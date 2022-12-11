// background image changing in fade
var bgImageArray = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg","bg4.jpeg","bg5.jpeg","bg6.jpeg"],
base = "images/",
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();


// menu changing color when hovered
var menuList = ["about", "webProjects", "videos", "contact"];
function menuClr(menuName){
	var menu = document.getElementById(menuName);
	menu.addEventListener("mouseover", function() {menu.style.backgroundColor = "#9BA66D";});
	menu.addEventListener("mouseout", function() {menu.style.backgroundColor = "transparent";});
}
window.onload=function(){
	const pageSound = document.getElementById("pageTurn");
    for (i = 0; i < menuList.length; i++) {
        menuClr(menuList[i]);
    }
};
