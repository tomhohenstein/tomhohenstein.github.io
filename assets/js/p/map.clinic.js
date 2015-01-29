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

	var map = d3.select("#clinic").append("svg")
    				.attr("width", width)
    				.attr("height", height);				

	queue()
    	.defer(d3.json, "/projects/map/us.json")
    	.defer(d3.csv, "/projects/map/clinics.csv")
    	.await(ready);

	function ready(error, us, clinics) {
console.log(clinics); 

		map.append("path")
    	  	.datum(topojson.feature(us, us.objects.land))
      		.attr("class", "land")
      		.attr("d", path)
      		.attr("style", "fill: rgb(6, 6, 6)");   

      	map.append("g")
      		.attr("class", "state")
      		.selectAll("path")
      		.data(topojson.feature(us, us.objects.states).features)
      		.enter()
      		.append("path") 
      		.attr("d", path)
      		.attr("style", "fill: rgb(162, 244, 244)"); 
      
      	map.append("path")
      		.datum({type: "MultiPoint", coordinates: clinics})
           	.attr("class", "points")
      		.attr("d", path); 
}

}); // end .ready() 