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
      .defer(d3.json, "/projects/choropleth-map/us.json")
    	.defer(d3.json, "/projects/choropleth-map/state.topo.clinics.json")
    	.defer(d3.csv, "/projects/choropleth-map/clinics.csv")
    	.await(ready);

	function ready(error, us, state, clinics) {

	   //quantize state clinic counts 
     var color_data = [];
     state.objects.state.geometries.forEach(
        function(d){ 
          color_data[d.id] = d.properties.count; 
        });
     //us data
     map.append("path")
          .datum(topojson.feature(us, us.objects.land))
          .attr("class", "land")
          .attr("d", path)
          .attr("style", "fill: rgb(6, 6, 6)"); 
    //state data 
    var color_scale = d3.scale.quantize()
        .domain(d3.values(color_data).sort(d3.ascending))
        .range(["#ffffcc","#a1dab4","#41b6c4","#225ea8"]);

  	map.append("g")
  		.attr("class", "state")
  		.selectAll("path")
  		.data(topojson.feature(state, state.objects.state).features)
  		.enter()
  		.append("path") 
  		.attr("d", path)
  		.style("fill", function(d){ return color_scale(d.properties.count) });
      
    var legend = map.selectAll("g.legend")
                  .data(color_scale.range())
                  .enter()
                  .append("g")
                  .attr("class", "legend");

    legend.append("rect")
          .attr("x", width-110)
          .attr("y", function(d, i) { return i * 20; })
          .attr("width", "20")
          .attr("height", "10")
          .style("stroke", "black")
          .style("stroke-width", 1)
          .style("fill", function(d){ return d; })

    legend.append("text")
          .attr("x", width-80)
          .attr("y", function(d, i){ return i * 20; })
          .attr("dy", "0.8em")
          .text(function(d, i){ 
                var extent = color_scale.invertExtent(d);
                return Math.round(extent[0]) + " - " + Math.round(extent[1]);
          })

    //clinic data
  	map.append("path")
  		.datum({type: "MultiPoint", coordinates: clinics})
       	.attr("class", "points")
  		.attr("d", path); 
}

}); // end .ready() 