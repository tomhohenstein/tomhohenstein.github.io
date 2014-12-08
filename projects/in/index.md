---
layout: post
title: Instruction Network
---
<style>

.link {
    stroke: #777;
    stroke-width: 0.5px;
}

.blue {
	background-color: blue; 
}

.node {
    fill: #ccc;
    stroke: #fff;
    stroke-width: 5px;
}

.red {
	background-color: red; 
}


</style>

This project attempts to represent instructional statistics as a network graph. All personal data has been removed and replaced with either letters for librarians (A, B, C ...) or numbers for faculty (1, 2, 3, ...). 


<div id="svg"></div>

#End 

<script src="{{ site.baseurl }}/projects/in/d3/d3.min.js"></script>
<script>

//canvas size 
var width = 800,
    height = 500,
    data;

//add svg to dom 
var svg = d3.select("#svg").append("svg")
    .attr("width", width)
    .attr("height", height);


d3.json("in.json", function(error, links){
	if(error) return console.warn(error);
	
	//create nodes - a, b c, d, and e are librarians
	var nodes = [
			{
				"label": "A",
				"color": "blue",
				"size": 10
			},
			{
				"label": "B",
				"color": "blue",
				"size": 10
			},
			{
				"label": "C",
				"color": "blue",
				"size": 10
			},
			{
				"label": "D",
				"color": "blue",
				"size": 10
			},
			{
				"label": "E",
				"color": "blue",
				"size": 10
				
			}];
		
	// add faculty faculty nodes (1-159)
	for(i = 0; i<160; i++){
		nodes.push({
			"label": i,
			"color": "red",
			"size": 5
		}); 
	}

	//links are the json file 
	var force = d3.layout.force()
        .size([width, height])
        .nodes(nodes)
        .links(links);
    //set the link distance 
    force.linkDistance(1);
    //draw links first
    var link = svg.selectAll('.link')
		.data(links)
		.enter().append('line')
		.attr('class', 'link');

	//draw nodes - issue with x, y 
	var node = svg.selectAll('.node')
		.data(nodes)
		.enter().append('circle')
		.style('fill',function(d) {return d.color})
		.attr('class','node')
		.attr('r',function(d) {return d.size})
		.attr('id', function(d) {return d.label});

	force.on('end', function(){
		
	   node.attr('cx', function(d) { return d.x; })
	       .attr('cy', function(d) { return d.y; })

       link.attr('x1', function(d) { return d.source.x; })
	        .attr('y1', function(d) { return d.source.y; })
	        .attr('x2', function(d) { return d.target.x; })
	        .attr('y2', function(d) { return d.target.y; });

	});
	force.start(); 
});

//force functions 

</script>
