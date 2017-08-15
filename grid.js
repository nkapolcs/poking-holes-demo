// var dimensionData = [10, 20, 100];

// var select = d3.select('.top-right')
//   .append('select')
//   	.attr('class','changeDimension')
//     .on('change', onchange);
//
// var options = d3.select('.changeDimension')
//   .selectAll('option')
// 	.data(dimensionData).enter()
// 	.append('option')
// 		.text(function (d) { return d; });

// Grid basic variables
var dimension = 10,
	width = 50,
	height = 50;

// Generating the grid rectangles data
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

// Create the svg
var grid = d3.select("#grid")
	.append("svg")
	.attr("width", width*dimension)
	.attr("height",height*dimension);

// Generating the grid lines Data
function linegriddata() {
	var data = new Array();

	// horizontal line (hline) variables
	var hlineX1 = 0,
	 	hlineY1 = 0,
	 	hlineX2 = 0,
	 	hlineY2 = 50;

	// vertical line (vline) variables
	var vlineX1 = 0,
	 	vlineY1 = 0,
	 	vlineX2 = 50,
	 	vlineY2 = 0;

	var lineLength = width,
		click = 0,
		colorSwitch = 0;

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

		// reset the x position after a row is complete
		vlineY1 = 0;
		vlineY2 = 0;
		// increment the y position for the next row. Move it down 50 (height variable)
		vlineX1 += lineLength;
		vlineX2 += lineLength;
	}
	return data;
}

// Generating Vertex data
function circleData() {
	var data = new Array();

	// rectangle variables
	var circleCX = 0,
	 	circleCY = 0,
	 	circleR = 5,
        stepLenght = 50,
		click = 0;

	// iterate for rows
	for (var row = 0; row < dimension+1; row++) {

		// iterate for cells/columns inside rows
		for (var column = 0; column < dimension+1; column++) {
			// circleClass = "circle" + circleCX.toString() + circleCY.toString();
			data.push({
				cx: circleCX,
				cy: circleCY,
				r: circleR,
				// class: circleClass,
				click: click
			});

			// increment the x position. I.e. move it over by 50 (width variable)
			circleCX += stepLenght;
		}
		// reset the x position after a row is complete
		circleCX = 0;
		// increment the y position for the next row. Move it down 50 (height variable)
		circleCY += stepLenght;
	}
	return data;
}

// Reset border colors
function resetColor(d){
	grid.selectAll("line").each(function(d, i) {
		d3.select(this).style("stroke", "white");
		d.switch = 0;
	});
}


// // Select dimension function
// function onchange() {
// 	selectValue = d3.select('.changeDimension').property('value');
// 	var dimension = selectValue;
//
// 	d3.select('svg')
// 		.attr("width", width*dimension)
// 		.attr("height",height*dimension);
//
//
// };



// Render function

// function render(){

    // Grid
    var gridData = gridData();
    // I like to log the data to the console for quick debugging
    console.log(gridData);

    var rect = grid.selectAll(".square")
    	.data(gridData)
    	.enter().append("rect")
    	.attr("class","rect")
    	.attr("x", function(d) { return d.x; })
    	.attr("y", function(d) { return d.y; })
    	.attr("width", function(d) { return d.width; })
    	.attr("height", function(d) { return d.height; })
    	.style("fill", "#f2f2f2")
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



    // Line

    var linegriddata = linegriddata();
    // I like to log the data to the console for quick debugging
    console.log(linegriddata);

    var line = grid.selectAll(".line")
    	.data(linegriddata)
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


    // Circle

    var circleData = circleData();
    // I like to log the data to the console for quick debugging
    console.log(circleData);

    var circle = grid.selectAll(".dot")
    	.data(circleData)
    	.enter().append("circle")
    	.attr("class","dot")
    	.attr("cx", function(d) { return d.cx; })
    	.attr("cy", function(d) { return d.cy; })
    	.attr("r", function(d) { return d.r; })
    	.style("fill", "#c3c3c3")
    	.style("stroke", "white")
    	.style("stroke-width", "3")
    	.style("cursor", "pointer")
    	.on("click", function(d){
            var Color = ["white" , "green"];

            d3.select(".vline" + (d.cx - 50).toString() + d.cy.toString() + d.cx.toString() + d.cy.toString()).style("stroke", nextColor);
            d3.select(".vline" + d.cx.toString() + d.cy.toString() + (d.cx + 50).toString() + d.cy.toString()).style("stroke", nextColor);
            d3.select(".hline" + d.cx.toString() + (d.cy - 50).toString() + d.cx.toString() + d.cy.toString()).style("stroke", nextColor);
            d3.select(".hline" + d.cx.toString() + d.cy.toString() + d.cx.toString() + (d.cy + 50).toString()).style("stroke", nextColor);

            function nextColor(d){
                var Color = ["white","green"];
                d.switch = d.switch ^ 1;
                var next_Color = Color[d.switch];
                return next_Color;
            }
    	});
// }
//
// render();
// setInterval(render,2000);
