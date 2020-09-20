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

		function colorchange() {
			var titles = document.querySelectorAll(".unit");
			var i = titles.length;
			while (i--) {
				titles[i].setAttribute("style", "color:magenta");
				//function above from here: https://isabelcastillo.com/set-style-attribute-for-multiple-elements-javascript
}
 
};