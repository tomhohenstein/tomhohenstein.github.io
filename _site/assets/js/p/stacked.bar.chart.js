$( document ).ready(function (){ 
	//the data for my pie chart 
	var data = [{
				"person": "Chuck",
				"a": "5",
				"b": "3",
				"c": "1",
				"d": "15",
				},
				{
				"person": "Craig",
				"a": "9",
				"b": "7",
				"c": "9",
				"d": "0",
				},
				{
				"person": "Phil",
				"a": "14",
				"b": "4",
				"c": "10",
				"d": "2",
				},
				{
				"person": "Dan",
				"a": "19",
				"b": "8",
				"c": "10",
				"d": "11",
				}];

	//ensure data points are numbers 
	data.forEach(function(d){ 
		d.a = +d.a; 
		d.b = +d.b;
		d.c = +d.c;
		d.d = +d.d; 
	});

	var stacked = [];
	for(i in data ){
		stacked[i] = [];	 
	} 

	//set some initial vars
	var barwidth = 50, 
		margin = {top: 40, right: 40, bottom: 40, left:30},
		width = width = $("article").width(), 
		height = 600,
		inWidth = width - margin.right - margin.left, //inner width
		inHeight = height - margin.top - margin.bottom, //inner height	 
		colors = d3.scale.ordinal()
					.range(["#1f77b4", "#ff7f0e", "#2ca02c", " #d62728"]);

	//make data stackable 
	data.forEach(function(d){
		var y0 = 0;
		d.vals = colors.domain().map(function(key) {   
							return { key: key, y0: y0, y1: (y0 += +d[key]) }; 
				}); 
		console.log(d.vals); 
		console.log(d); 
	});


	//set x and y scales
	var x = d3.scale.ordinal()
				.domain(data.map(function(d){ return d.person; })) // not sure about this
				.rangeBands([0, inWidth], .1);

	var y = d3.scale.linear()
				.domain([0, d3.max(data, function(d){ return d.total; })]) // not sure about this 
				.range([0, inWidth]);			
	
	//prep the x and y axes 
	var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom");

	var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.tickFormat(d3.format(".2s"));

	//create the chart 
	var chart = d3.select("#chart")
				.append("svg")
				.attr("width", inWidth)
				.attr("height", inHeight)
				.append("g");
				//.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	//add the x and y axes
	chart.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(" + margin.left + "," + (inHeight - margin.bottom + 2) + ")")
				.call(xAxis);

    chart.append("g")
    			.attr("class", "y axis")
    			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    			.call(yAxis); 

    person = chart.selectAll(".person")
    			.data(data)
    			.enter()
    			.append("rect")
    			.attr("width", barwidth)
    			.attr("height", function(d){ return d.y0 })
    			.attr("x", function(d, i){ return x(i) })
    			.attr("y", function(d){ return y(0) }); 


}); // .ready() 