---
layout: post
title: D3 Choropleth Map 
css:
tags: [[library juice, D3, map, choropleth]]
javascript:
- l/d3.min.js
- l/queue.v1.min.js
- l/topojson.v1.min.js
- p/map.clinic.js
---

<div id="clinic"></div> 

I am taking a [Library Juice Academy](http://libraryjuiceacademy.com/) class on using [D3](http://d3js.org/). I created this choropleth map for my third assignment. 

```
$( document ).ready(function (){ 

	//declare vars
	var width,
	height;  

	var projection = d3.geo.albers()
		.scale(width)
		.translate([]);

	var path = d3.geo.path()
		.projection(projection)
		.pointRadius(1);

	var map = d3.select("#clinic").append("svg")
		.attr("width", width)
		.attr("height", height);	

	//loads map data - using queue.v1.min.js
	queue()
		.defer(d3.json, "/assets/data/us.json")
		.defer(d3.json, "/assets/data/state.topo.clinics.json")
		.defer(d3.csv, "/assets/data/dialysis.clinics.csv")
		.await(ready);

	//function for when data is loaded
	function ready(error, us, state, clinics) {

		//quantize state clinic counts 
		var color_data = [];
		state.objects.state.geometries.forEach();

		//us data
		map.append("path")
			.datum(topojson.feature(us, us.objects.land))
			.attr("class", "land")
			.attr("d", path)
			.attr("style",); 
		
		//state data 
		var color_scale = d3.scale.quantize()
			.domain()
			.range([]);

		map.append("g")
			.attr("class", "state")
			.selectAll("path")
			.data(topojson.feature(state, state.objects.state).features)
			.enter()
			.append("path") 
			.attr("d", path)
			.style("fill", );

		//adds legend
		var legend = map.selectAll("g.legend")
			.data(color_scale.range())
			.enter()
			.append("g")
			.attr("class", "legend");

		legend.append("rect")
			.attr("x", )
			.attr("y", )
			.attr("width", )
			.attr("height", )
			.style("stroke", )
			.style("stroke-width", )
			.style("fill", )

		legend.append("text")
			.attr("x", )
			.attr("y", )
			.attr("dy", )
			.text()

		//clinic data
		map.append("path")
		.datum({type: "MultiPoint", coordinates: clinics})
		.attr("class", "points")
		.attr("d", path); 
		
	}//end ready funciton 
}); // end .ready() 
```