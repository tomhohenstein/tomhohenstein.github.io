---
layout: post
title: Instruction Network
---
<style>

.link {
    stroke: rgb(25, 25, 25);
    stroke-width: 0.5px;
}

.node {
    fill: #ccc;
    stroke: #fff;
    stroke-width: 5px;
}

text {
	color: black;

}

</style>

This project attempts to represent instructional statistics as a network graph. All personal data has been removed and replaced with either letters for librarians (A, B, C ...) or numbers for faculty (1, 2, 3, ...). 


<div id="svg"></div>

<div id="information"></div> 

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



d3.json("node.json", function(error, nodes){
	if(error) return console.warn(error);
	
	d3.json("edge.json", function(error, links){
		if(error) return console.warn(error);

		//links are the json file 
		var force = d3.layout.force()
	        .size([width, height])
	        .gravity(0.8)
	        .charge(-500)
	        .linkStrength(0.4)
	        .nodes(nodes)
	        .links(links);
	    //set the link distance 
	    force.linkDistance(20);

	    var drag = force.drag()
    		.on("dragstart", dragstart);

	    //draw links first
	    var link = svg.selectAll('.link')
			.data(links)
			.enter().append('line')
			.attr('class', 'link');

		//draw nodes - issue with x, y 
		var node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('circle')
			.attr('class','node')
			.style('fill',function(d) {return d.color})
			.style('stroke',function(d) {return d.color})
			.attr('r',function(d) {return d.size})
			.attr('id', function(d) {return d.label})
			.on("click", click)
			.on("dblclick", dblclick)
			.call(drag);

		force.on('tick', function(){
			
		   node.attr('cx', function(d) { return d.x; })
		       .attr('cy', function(d) { return d.y; })

	       link.attr('x1', function(d) { return d.source.x; })
		        .attr('y1', function(d) { return d.source.y; })
		        .attr('x2', function(d) { return d.target.x; })
		        .attr('y2', function(d) { return d.target.y; });

		});
		force.start(); 
	});
	
});
//force functions 
function click(d) {
	console.log(d);  
	d3.select(this).append("text")
		.attr("x", 12)
		.attr("dy", ".4em")
		.text(d.label); 
	d3.select(this).append("text")
}
function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}

</script>
