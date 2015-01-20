$( document ).ready(function (){ 
	//the data for my pie chart 
	var data = [{
				"person": "Tom",
				"value": "5"
				},
				{
				"person": "Sara",
				"value": "9"
				},
				{
				"person": "Dino",
				"value": "14"
				},
				{
				"person": "Little Foot",
				"value": "19"
				}];

	//make sure all values are numbers
	data.forEach(function(d){ 
		d.value = +d.value; 
	});

	//set some vars
	var width = width = $("article").width(), 
		height = 500, 
		radius = Math.min(width, height) / 2, //make the radius half of the shortest of the two values
		colors = d3.scale.category10();

	//create arc var
	var arc = d3.svg.arc()
				.outerRadius(radius-10)
				.innerRadius(0);

	//create pie var for pie chart
	var pie = d3.layout.pie()
				.sort(null)
				.value(function(d) { return d.value });			

	//create chart
	var chart = d3.select("#chart")
					.append("svg")
					.attr("width", width)
					.attr("height", height)
					.append("g")
					.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var g = chart.selectAll(".arc")
				.data(pie(data))
				.enter()
				.append("g")
				.attr("class","arc");

	g.append("path")
		.attr("d", arc)
		.style("fill", function(d, i){ return colors(i) });

	g.append("text")
		.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) //centers text 	
		.attr("dy", ".35em") //text y location 
		.style("text-anchor", "middle")
		.text(function(d) { 
			var t = d.data.person + " (" + d.data.value + ")";
			return  t
		});

}); // .ready() 