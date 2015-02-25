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

	function add_tip (){
		var html_text = d3.select(this).data()[0].data.person + ": " + d3.select(this).data()[0].data.value;

		chart.selectAll("path").transition()
				.duration(200)
				.attr("opacity", 0.2) 

        d3.select(this).transition()
            .duration(200)
            .attr("opacity", 1)
            .attr('d', arc2);
  
       	d3.select(".center-text")
       		.text(html_text);
	}

	function remove_tip(){
		console.log("remove tip");
		chart.selectAll('path').transition()
                .duration(200)
                .attr("opacity", 1)
                .attr('d', arc);
       	d3.select(".center-text")
       		.text("Welcome");
	}

	//create arc var
	var arc = d3.svg.arc()
				.outerRadius(radius-10)
				.innerRadius(radius-90);

	var arc2 = d3.svg.arc()
				.outerRadius(radius-5)
				.innerRadius(radius-95);			

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
		.style("fill", function(d, i){ return colors(i) })
		.on('mouseover', add_tip)
      	.on('mouseout', remove_tip);

      chart.append("text")
   			.attr("text-anchor", "middle")
   			.attr("class", "center-text")
   			.text("Welcome");

}); // .ready() 