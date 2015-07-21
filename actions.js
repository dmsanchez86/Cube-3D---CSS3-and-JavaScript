window.onload = function(e){
	console.log('¡The page is ready!');

	var head 	= document.querySelector('.content .head'),
		face_1 	= document.querySelector('#face_1'),
		face_2 	= document.querySelector('#face_2'),
		face_3 	= document.querySelector('#face_3'),
		face_4 	= document.querySelector('#face_4'),
		face_5 	= document.querySelector('#face_5'),
		face_6 	= document.querySelector('#face_6'),
		hover 	= document.querySelector('.hover'),
		nav 	= document.querySelector('.nav_left'),
		nav_ul 	= document.querySelector('.nav_left ul'),
		nav_ul_li 	= document.querySelector('.nav_left ul li'),
		body 	= document.querySelector('body'),
		buttons = document.querySelectorAll('.controls button');

	var i = 0;

	rotate(head,0,0);

	var interval = setInterval(function(){
		i += 90;
		if(i <= 360)
			rotate(head,0,i);
		else
			i = 0;
	},2500);

	face_1.onclick = function(e){
		clearInterval(interval);
		rotate(head,0,0);
	}

	face_4.onclick = function(e){
		clearInterval(interval);
		rotate(head,0,180);
	}

	face_6.onclick = function(e){
		clearInterval(interval);
		rotate(head,0,90);
	}

	face_3.onclick = function(e){
		clearInterval(interval);
		rotate(head,0,-90);
	}

	face_5.onclick = function(e){
		clearInterval(interval);
		rotate(head,-90,0);
	}

	face_2.onclick = function(e){
		clearInterval(interval);
		rotate(head,90,0);
	}

	hover.onmouseover = function(){
		body.className = "active";
		nav.onmouseout = function(){
			body.className = "";
		}
		nav_ul.onmouseout = function(){
			body.className = "active";
			console.log('nav ul enter!');
		}
		nav_ul_li.onmouseout = function(){
			body.className = "active";
			console.log('nav ul li enter!');
		}
	}

	/*for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function(e){
			console.log(e);
			console.log(this.attributes[0].nodeValue);
		}
	}*/

}

function rotate(obj,x,y){
	obj.style.transform = "rotatex("+ x +"deg) rotatey("+ y +"deg)";
	obj.style.webkitTransform = "rotatex("+ x +"deg) rotatey("+ y +"deg)";
}