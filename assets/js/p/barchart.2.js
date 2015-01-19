var obj = []

$( document ).ready(function (){

//Show values on the x-axis, and categories on the y-axis. 
//Make x-axis a linear scale and y-axis an ordinal scale. 

	//load data from json file 
	d3.json("/projects/barchart-2/data.json", function(error, data){
		// send any errors to the console
		if(error) return console.warn(error);

		//for outside access 
		obj = data; 

		console.log(data); 

		//set widths, heights, and margins
		var barheight = 50,
			margin = {top: 40, right: 40, bottom: 40, left:100},
			width = $("article").width(),
			height = 100 + (barheight * data.length),
			inWidth = width - margin.right - margin.left, //inner width
			inHeight = height - margin.top - margin.bottom; //inner height			 

		// set x axis scale 
		// should be linear scale 
		var x = d3.scale.linear()
					.domain([0, d3.max(data, function(d) { return Number(d.Quantity) })])
					.range([0, inWidth]);

		//set y axis scale
		//should be ordinal scale 
		var y = d3.scale.ordinal()
					.domain(data.map(function(d){ return d.fruits }))
					//.range([0, inHeight])
					.rangeBands([0, barheight * data.length]); 			
		//var for x axis
		var xAxis = d3.svg.axis()
						.scale(x)
						.orient("bottom");
		//var for y axis
		var yAxis = d3.svg.axis()
						.scale(y)
						.orient("left");
				
		//create chart
		var chart = d3.select("#chart").append("svg")
							.attr("class", "chart")
							.attr("width", width)
							.attr("height", height)
							.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
							.append("g");
			//add x axis
			chart.append("g")
					.attr("class", "axis")
					.attr("transform", "translate(" + margin.left + "," + 250 + ")")
					.call(xAxis);
			//add y axis 
			chart.append("g")
					.attr("class", "axis")
					.attr("transform", "translate(" + margin.left + ", 0)")
					.call(yAxis);

			chart.selectAll(".chart")
					.data(data)
					.enter()
					.append('rect')
					.attr("class", "bar")
					.attr("x", margin.left)	
					.attr("y", function(d){ return y(d.fruits)})
					.attr("width", function(d){ return x(d.Quantity) })
					.attr("height", barheight-5)
					.attr("style", "fill: rgb(163, 113, 113)");

	});//end d3.json
}); // .ready() 