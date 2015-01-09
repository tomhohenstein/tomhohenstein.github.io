//depends on d3.min.js and jquery 
$( document ).ready(function (){
	//data obj 
	obj = [];

	d3.json("gps_major_counts.json", function(err, data){

		//reformat data a little bit :( 
		for (var key in data){
			var num = +data[key]
			obj.push({"d": key, "v": num});  
		}
		//sort obj by key
		obj.sort(function(a, b) { return d3.ascending(a.d, b.d);})
		
		if($( window ).width() < 600 ){
			var wind =  $( window ).width();
		} else {
			var wind = 600; 
		}
		//set width of chart and height of each bar
		
		var margin = {top: 40, right: 40, bottom: 40, left: 40}, //set margins
		barHeight = 30, //set bar height 
		width = wind - (margin.right + margin.left), //set inner width
		height = (barHeight * obj.length) - margin.bottom - margin.top; //set inner height 
		
		//set linear scale 
		var x = d3.scale.linear()
					.domain([0, d3.max(obj, function(d) { return d.v })])
					.range([0, width-30]);

		var y = d3.scale.ordinal()
					.domain(obj.map(function(d){ return d.d }))
    				.rangeBands([0, barHeight * obj.length]);			

		//x axis var 
		var xAxis = d3.svg.axis()
    					.scale(x)
    					.orient("bottom");

    	var yAxis  = d3.svg.axis()
    					.scale(y)
    					.orient("left");				
    	//add chart
    	var chart = d3.select("#chart")
						.attr("width", width + margin.right + margin.left)
						.attr("height", barHeight * obj.length + margin.top + margin.bottom);

		//add bars
    	var bar = chart.selectAll(".bar")
						.data(obj)
						.enter().append("g")
						.attr("transform", function(d, i) { return "translate(50," + y(d.d) + ")"; })
						.attr("class", "bar")
						.attr("data-index-number", function(d, i){ return i })
						.attr("id", function(d){ return d.d })
						.attr("y", function(d) { return y(d.v) });

			bar.append("rect")
				.attr("width", function(d) { return x(d.v)})
				.attr("height", barHeight - 1);

			bar.append("text")
				.attr("x", function(d) { return x(d.v) + 3; })
				.attr("y", barHeight / 2)
				.attr("dy", ".35em")
				.text(function(d) { return d.v; });
	
		//add x axis 
		chart.append("g")
  			.attr("class", "x axis")
  			.attr("transform", "translate(50," + barHeight * obj.length + ")")
  			.call(xAxis);

  		//add y axis 
		chart.append("g")
		      .attr("class", "y axis")
		      .attr("transform", "translate(50,0)")
		      .call(yAxis);

		function update(n){ 

			//sort obj based on selection 
			if(n == 1){
				obj.sort(function(a, b) { return d3.ascending(a.d, b.d);})
			} else if (n == 2) {
				obj.sort(function(a, b) { return d3.descending(a.d, b.d);})
			} else if (n == 3) {
				obj.sort(function(a, b) { return d3.descending(a.v, b.v);})
			} else if (n == 4) {
				obj.sort(function(a, b) { return d3.ascending(a.v, b.v);})
			}
			//update y axis
			y.domain(obj.map(function(d){ return d.d }))
			//transitions 
			var transition = chart.transition().duration(750),
		        	delay = function(d, i) { return i * 50; };

		    transition.selectAll(".bar")
		        .delay(delay)
		        .attr("transform", function(d) { return "translate(50," + y(d.d) + ")"; });
	
		    transition.select(".y.axis")
		        .call(yAxis)
		      	.selectAll("g")
		        .delay(delay);		    
		}
		//update when #sort changes 
		$( ".dropdown-menu li a" ).click(function(){	
			$("#sorted").text("Sorted: " + $(this).text());
			update($(this).attr("data-val"));
		}); 
	});
});