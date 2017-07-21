// grid basic variables
var dimension = 10,
	width = 50,
	height = 50;

function gridData() {
	var data = new Array();

	// rectangle variables
	var rectXpos = 0,
	 	rectYpos = 0,
	 	rectWidth = width,
	 	rectHeight = height;
		click = 0;

	// iterate for rows
	for (var row = 0; row < dimension; row++) {

		// iterate for cells/columns inside rows
		for (var column = 0; column < dimension; column++) {
			// rectClass = "rect" + rectXpos.toString() + rectYpos.toString();
			data.push({
				x: rectXpos,
				y: rectYpos,
				width: rectWidth,
				height: rectHeight,
				// class: rectClass,
				click: click
			});

			// increment the x position. I.e. move it over by 50 (width variable)
			rectXpos += rectWidth;
		}
		// reset the x position after a row is complete
		rectXpos = 0;
		// increment the y position for the next row. Move it down 50 (height variable)
		rectYpos += rectHeight;
	}
	return data;
}

var gridData = gridData();
// I like to log the data to the console for quick debugging
console.log(gridData);

var grid = d3.select("#grid")
	.append("svg")
	.attr("width", width*dimension)
	.attr("height",height*dimension);

var rect = grid.selectAll(".square")
	.data(gridData)
	.enter().append("rect")
	.attr("class","rect")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.style("fill", "#f2f2f2")
	.style("stroke", "#fff")
	.on("click", function(d){
		var Color = ["white" , "red"];

		d3.select(".vline" + d.x.toString() + d.y.toString() + (d.x + 50).toString() + d.y.toString()).style("stroke", nextColor);
		d3.select(".vline" + d.x.toString() + (d.y + 50).toString() + (d.x + 50).toString() + (d.y + 50).toString()).style("stroke", nextColor);
		d3.select(".hline" + d.x.toString() + d.y.toString() + d.x.toString() + (d.y + 50).toString()).style("stroke", nextColor);
		d3.select(".hline" + (d.x + 50).toString() + d.y.toString() + (d.x + 50).toString() + (d.y + 50).toString()).style("stroke", nextColor);

        function nextColor(d){
            var Color = ["white","red"];
            d.switch = d.switch ^ 1;
            var next_Color = Color[d.switch];
            return next_Color;
        }
	});

function hlinegriddata() {
	var data = new Array();

	// line variables
	var hlineX1 = 0,
	 	hlineY1 = 0,
	 	hlineX2 = 0,
	 	hlineY2 = 50,
		click = 0,
        colorSwitch = 0;

	var lineLength = width;

	for (var row = 0; row < dimension; row++) {

		// iterate for cells/columns inside rows
		for (var column = 0; column < dimension + 1; column++) {
			hlineClass = "hline" + hlineX1.toString() + hlineY1.toString() + hlineX2.toString() + hlineY2.toString();
			data.push({
				x1: hlineX1,
				y1: hlineY1,
				x2: hlineX2,
				y2: hlineY2,
				class: hlineClass,
				click: click,
                switch: colorSwitch
			});

	  	    // increment the x position for the next line
	  	    hlineX1 += lineLength;
	  	    hlineX2 += lineLength;
		}

		// reset the x position after a row is complete
		hlineX1 = 0;
		hlineX2 = 0;

		// increment the y position for the next row. Move it down 50 (height variable)
		hlineY1 += lineLength;
		hlineY2 += lineLength;
	}
	return data;
}

var hlinegriddata = hlinegriddata();
// I like to log the data to the console for quick debugging
console.log(hlinegriddata);

var hline = grid.selectAll(".hline")
	.data(hlinegriddata)
	.enter().append("line")
	.attr("class", function(d) { return d.class; })
	.attr("x1", function(d) { return d.x1; })
	.attr("y1", function(d) { return d.y1; })
	.attr("x2", function(d) { return d.x2; })
	.attr("y2", function(d) { return d.y2; })
	.style("stroke", "white")
	.style("stroke-width", "4")
	.style("cursor", "pointer")
	.on("click", function(d){
        var Color = ["white","red"];
        d.switch = d.switch ^ 1;
        var nextColor = Color[d.switch];
        d3.select(this).style("stroke", nextColor);
	});

function vlinegriddata() {
	var data = new Array();

	// line variables
	var vlineX1 = 0,
	 	vlineY1 = 0,
	 	vlineX2 = 50,
	 	vlineY2 = 0,
		click = 0,
        colorSwitch = 0;

	var lineLength = width;

	// iterate for rows
	for (var row = 0; row < dimension; row++) {

		// iterate for cells/columns inside rows
		for (var column = 0; column < dimension + 1; column++) {
			vlineClass = "vline" + vlineX1.toString() + vlineY1.toString() + vlineX2.toString() + vlineY2.toString();
			data.push({
				x1: vlineX1,
				y1: vlineY1,
				x2: vlineX2,
				y2: vlineY2,
				class: vlineClass,
				click: click,
                switch: colorSwitch
			});

	  	    // increment the x position for the next line
	  	    vlineY1 += lineLength;
	  	    vlineY2 += lineLength;
		}

		// reset the x position after a row is complete
		vlineY1 = 0;
		vlineY2 = 0;
		// increment the y position for the next row. Move it down 50 (height variable)
		vlineX1 += lineLength;
		vlineX2 += lineLength;
	}
	return data;
}

var vlinegriddata = vlinegriddata();
// I like to log the data to the console for quick debugging
console.log(vlinegriddata);

var vline = grid.selectAll(".vline")
	.data(vlinegriddata)
	.enter().append("line")
	.attr("class", function(d) { return d.class; })
	.attr("x1", function(d) { return d.x1; })
	.attr("y1", function(d) { return d.y1; })
	.attr("x2", function(d) { return d.x2; })
	.attr("y2", function(d) { return d.y2; })
	.style("stroke", "white")
	.style("stroke-width", "4")
	.style("cursor", "pointer")
	.on("click", function(d){
        var Color = ["white","red"];
        d.switch = d.switch ^ 1;
        var nextColor = Color[d.switch];
        d3.select(this).style("stroke", nextColor);
	});

function resetColor(d){
	grid.selectAll("line").each(function(d, i) {
		d3.select(this).style("stroke", "white");
		d.switch = 0;
	});
}
