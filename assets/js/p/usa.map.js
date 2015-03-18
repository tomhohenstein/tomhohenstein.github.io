$( document ).ready(function (){ 
 
	var width = $("article").width(),
		height = $("article").width()/2;  
	
	var projection = d3.geo.albersUsa()
						.scale(width)
						.translate([width / 2, height / 2]);

	var path = d3.geo.path()
    			.projection(projection);

	var map = d3.select("#map").append("svg")
    				.attr("width", width)
    				.attr("height", height);				

	queue()
      .defer(d3.json, "/assets/data/usa.json")
    	.await(ready);

	function ready(error, us) {

	   console.log(us);

     //us data    
      map.append("g")
    		.attr("class", "state")
    		.selectAll("path")
    		.data(topojson.feature(us, us.objects.state).features)
    		.enter()
    		.append("path") 
    		.attr("d", path);
 	
    	map.append("g")
    		.attr("class", "counties")
    		.selectAll("path")
    		.data(topojson.feature(us, us.objects.county).features)
    		.enter()
    		.append("path") 
    		.attr("d", path)
        .attr("class", "county");
  	}
}); //eof 