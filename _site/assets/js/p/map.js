$( document ).ready(function (){ 
	
	//declare vars
	var width = $("article").width(),
		height = 500;  
	
	var projection = d3.geo.albers()
						.scale(width)
						.translate([width / 2, height / 2]);

	var path = d3.geo.path()
    			.projection(projection)
    			.pointRadius(1);

	var map = d3.select("#map").append("svg")
    				.attr("width", width)
    				.attr("height", height);				

	queue()
    	.defer(d3.json, "/projects/map/us.json")
    	.defer(d3.tsv, "/projects/map/airports.tsv")
    	.await(ready);

	function ready(error, us, airports) {
		  map.append("path")
    	  	.datum(topojson.feature(us, us.objects.land))
      		.attr("class", "land")
      		.attr("d", path)
      		.attr("style", "fill: rgb(27, 28, 121)");   

      	map.append("g")
      		.attr("class", "state")
      		.selectAll("path")
      		.data(topojson.feature(us, us.objects.states).features)
      		.enter()
      		.append("path") 
      		.attr("d", path)
      		.attr("style", "fill: rgb(210, 204, 204)"); 

      	map.append("path")
      		.datum({type: "MultiPoint", coordinates: airports})
          .attr("class", "points")
      		.attr("d", path); 
}

}); // end .ready() 