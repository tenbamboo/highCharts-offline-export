# highCharts-offline-export
highCharts offline export ,https replace,no service can export,js export 

	import:
	<script src="highcharts.js"></script>
	<script src="exporting.min.js"></script>
	<script src="rgbcolor.min.js"></script>
	<script src="canvg.min.js"></script>


	replace highcharts code as a.post function(or  you can see js/replace.js file):


	a.post = function(a, b) {
		var canvas = document.createElement("canvas");
		    canvas.style.display = "none";
		    canvas.setAttribute("id", "canvasTemp");
		    document.body.appendChild(canvas); 
		    
		    canvg(canvas, b.svg);

		var canvasDone = document.getElementById("canvasTemp");
		var base64 = canvasDone.toDataURL("image/png");
		var aTemp = document.createElement("a");

			aTemp.setAttribute("href", base64);
			aTemp.setAttribute("download", "export.png");
			aTemp.click();
			document.body.removeChild(canvas);
	}

