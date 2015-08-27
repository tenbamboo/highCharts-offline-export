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