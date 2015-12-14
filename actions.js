'use strict';

var timeout = null;

window.onload = function(e){
	console.log('¡The page is ready!');

	var head 		= document.querySelector('.content .head'),
		hover 		= document.querySelector('.hover'),
		nav 		= document.querySelector('.nav_left'),
		nav_ul 		= document.querySelector('.nav_left ul'),
		nav_ul_li 	= document.querySelector('.nav_left ul li'),
		body 		= document.querySelector('body'),
		buttons 	= document.querySelectorAll('.controls button');

	face_1.onclick = function(e){
		remove_active();
		this.className = "active";
		rotate(head, 0, 0);
		pause_animation(head);
	}

	face_2.onclick = function(e){
		remove_active();
		this.className = "active";
		rotate(head, -90, 0);
		pause_animation(head);
	}

	face_3.onclick = function(e){
		remove_active();
		this.className = "active";
		rotate(head, 0, -90);
		pause_animation(head);
	}

	face_4.onclick = function(e){
		remove_active();
		this.className = "active";
		rotate(head, 0, 90);
		pause_animation(head);
	}

	face_5.onclick = function(e){
		remove_active();
		this.className = "active";
		rotate(head, 0, 180);
		pause_animation(head);
	}

	face_6.onclick = function(e){
		remove_active();
		this.className = "active";
		rotate(head, 90, 0);
		pause_animation(head);
	}

	hover.onmouseover = function(){
		body.className = "active";
		nav.onmouseout = function(){
			body.className = "";
		}
		nav_ul.onmouseover = function(){
			body.className = "active";
		}
		nav_ul.onmouseout = function(){
			body.className = "active";
		}
		nav_ul_li.onmouseover = function(){
			body.className = "active";
		}
		nav_ul_li.onmouseout = function(){
			body.className = "active";
		}
	}

}

// remove class active for all buttons
function remove_active(){
	var buttons = document.querySelectorAll('.controls button');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].className = "";
	};
}

// rotate the cube
function rotate(obj, x, y){
	obj.style.transform = "rotatex("+ x +"deg) rotatey("+ y +"deg)";
	obj.style.webkitTransform = "rotatex("+ x +"deg) rotatey("+ y +"deg)";
}

// function to pause animation
function pause_animation(obj){
	obj.style.animation = "head 4s infinite ease-in-out";
	obj.style.webkitAnimation = "head 4s infinite ease-in-out";

	clearTimeout(timeout);

	timeout = setTimeout(function(){
		obj.style.animation = "head 4s infinite ease-in-out, rotate 10s infinite ease";
		obj.style.webkitAnimation = "head 4s infinite ease-in-out, rotate 10s infinite ease";
	},5000);
}