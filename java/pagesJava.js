

function menuClr(menuName){
	var menu = document.getElementById(menuName);
	menu.addEventListener("mouseover", function() {menu.style.backgroundColor = "#C1CF86";});
	menu.addEventListener("mouseout", function() {menu.style.backgroundColor = "transparent";});
}

var menuList = ["about", "webProjects", "videos", "contact"]
var pageName = document.title

window.onload=function(){
    menuList = menuList.filter(e => e !== pageName);
    for (i = 0; i < menuList.length; i++) {
        menuClr(menuList[i]);
    }

};

AOS.init()