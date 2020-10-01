// JavaScript Document

function myAdditionFunction() {
		 var x = document.getElementById("firstNumber").value;
		 var y = document.getElementById("secondNumber").value;
		document.getElementById("addAnswer").innerHTML = Number(x)+Number(y);	
		}

		function mySubtractionFunction() {
		 var a = document.getElementById("firstNumber").value;
		 var b = document.getElementById("secondNumber").value;
		document.getElementById("subtractAnswer").innerHTML = Number(a)-Number(b);	
		}
		
		function myCelsius_toFarenheitFunction() {
			var c = document.getElementById("celsiusNumber").value;
  			document.getElementById("celsiusAnswer").innerHTML = (Number(c)*(9/5) + 32);
		}

		function feetToMiles() {
			var f = document.getElementById("feetNumber").value;
			document.getElementById("milesAnswer").innerHTML = (Number(f)/5280);
		}

		function magentaChange() {

						var titles = document.querySelectorAll(".unit");

						var i = titles.length;

						while (i--) {
							
						titles[i].setAttribute("style", "background:magenta; color:white");}

						var buttons = document.querySelectorAll(".clear");

						var i = buttons.length;

						while (i--) {

										buttons[i].setAttribute("style", "border-color:#ffffff; color:white");

										//function above from here: https://isabelcastillo.com/set-style-attribute-for-multiple-elements-javascript// JavaScript Document
						}
		}
			function cyanChange() {

					var bg = document.querySelectorAll(".unit");

					var y = bg.length;

					while (y--) {
						bg[y].setAttribute("style", "background:cyan; color:black");}
						var cyan_buttons = document.querySelectorAll(".clear");
						var y = cyan_buttons.length;
					while (y--) {
							cyan_buttons[i].setAttribute("style", "border-color:white; color:black");
							//function above from here: https://isabelcastillo.com/set-style-attribute-for-multiple-elements-javascript// JavaScript Document
						}
			
			}
				function yellowChange() {

						var y_titles = document.querySelectorAll(".unit");

						var i = y_titles.length;

						while (i--) {

										y_titles[i].setAttribute("style", "background:yellow; color:black");}

						var y_buttons = document.querySelectorAll(".clear");

						var i = y_buttons.length;

						while (i--) {

										y_buttons[i].setAttribute("style", "border-color:black; color:black");

										//function above from here: https://isabelcastillo.com/set-style-attribute-for-multiple-elements-javascript// JavaScript Document
		}	
				}

//START OF SLIDESHOW			
//The code below is adapted from this w3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
			var slideIndex = 1;
			showSlides(slideIndex);
			// Next/previous controls
			function plusSlides(n) { showSlides(slideIndex += n); }

			// Thumbnail image controls
			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

			function showSlides(n) {
				var i;
				var slides = document.getElementsByClassName("mySlides");
				var dots = document.getElementsByClassName("dot");
				if (n > slides.length) {slideIndex = 1}
				if (n < 1) {slideIndex = slides.length}
				for (i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";}
				for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}
				slides[slideIndex-1].style.display = "block";
				dots[slideIndex-1].className += " active";} 
			//END OF SLIDESHOW