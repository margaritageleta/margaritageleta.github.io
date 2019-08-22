window.onload = function(){
	var menu_item = document.getElementsByClassName("button_menu");
	menu_item[1].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		//document.getElementById("list_menu").style.backgroundColor = "black";
		document.getElementById("submenu_bar").style.top = '243px';
		
		document.getElementById("prod_list_menu").style.opacity = '1';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		
		document.getElementById("prod_list_menu").style.display = "grid";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	menu_item[2].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(204, 255, 255)";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '1';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "grid";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";
	};
	menu_item[3].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "#074A6F";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '1';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "grid";
		document.getElementById("contact_list_menu").style.display = "none";
	};
	menu_item[4].onmouseover = function() {
		document.getElementById("list_menu").style.height = '200px';
		document.getElementById("list_menu").style.backgroundColor = "rgb(217, 255, 204)";
		document.getElementById("submenu_bar").style.top = '243px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '1';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "grid";
	};
	menu_item[0].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	menu_item[5].onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";
	};
	document.getElementById("header").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	document.getElementById("main").onmouseover = function() {
		document.getElementById("list_menu").style.height = '0px';
		document.getElementById("submenu_bar").style.top = '43px';
		///*
		document.getElementById("prod_list_menu").style.opacity = '0';
		document.getElementById("brand_list_menu").style.opacity = '0';
		document.getElementById("news_list_menu").style.opacity = '0';
		document.getElementById("contact_list_menu").style.opacity = '0';
		//*/
		document.getElementById("prod_list_menu").style.display = "none";
		document.getElementById("brand_list_menu").style.display = "none";
		document.getElementById("news_list_menu").style.display = "none";
		document.getElementById("contact_list_menu").style.display = "none";

	};
	
}