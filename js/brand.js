window.onload = function(){
	function changeImage(images, x){    
		var img = document.getElementById("prod_section_1");
    	x++;

    	if(x >= images.length){
        	x = 0;
    	}
    	img.style.backgroundImage = "url('" + images[x] + "')";

    	//fadeImg(img, 100, true);
    	setTimeout("changeImage()", 3000);
	}

	function fadeImg(el, val, fade){
    	if(fade === true){
        	val--;
    	}else{
        	val ++;
    	}

    	if(val > 0 && val < 100){
        	el.style.opacity = val / 100;
        	setTimeout(function(){fadeImg(el, val, fade);}, 10);
    	}
	}

	var images = [];
	var x = 1;
	images[0] = "../img/beauty.jpg";
	images[1] = "../img/altered.jpg";
	setTimeout(changeImage(images, x), 3000);
}