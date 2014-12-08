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
</style>

This project attempts to represent instructional statistics as a network graph. All personal data has been removed and replaced with numbers. 

The smaller "redish" circles represent faculty members while the larger "blueish" circles represent librarians. Each line represents an instructional session. 

While this project is far from finished, feel free to click around and drag the circles. 

<div id="svg"></div>

##How this works

Before starting, I need to thank a [series of posts](http://bl.ocks.org/sathomas/11550728) by [sathomas](http://bl.ocks.org/sathomas) on blocks. I was completely lost before I found his posts. 

###Tools
Here are the tools that I used for this project: 

* [d3 javascript](https://github.com/mbostock/d3) library, which can be found [on GitHub](https://github.com/mbostock/d3). 
* [OpenRefine](http://openrefine.org/)
* [SublimeText](http://www.sublimetext.com/) 
* [Convert CSV to JSON](http://www.convertcsv.com/csv-to-json.htm)
* Excel

I would also like to think the [DST4L](http://altbibl.io/dst4l/) classes that Chris Erdmann has organized. 

###Basic Process 

Like many libraries we keep rather detailed instruction statistics. However, outside of doing some basic counting with them - number of sessions and number of student contacts - we don't do much with them. 

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

//load node json file
d3.json("node.json", function(error, nodes){
	if(error) return console.warn(error);
	//load edge json file
	d3.json("edge.json", function(error, links){
		if(error) return console.warn(error);

		//links are the json file 
		var force = d3.layout.force()
	        .size([width, height]) //size
	        .gravity(0.8) //gravity
	        .charge(-500) //charge between elements
	        .linkStrength(0.4) // link strength, rigidity 
	        .nodes(nodes) // adds nodes
	        .links(links); // adds links 
	    //set the link distance 
	    force.linkDistance(20);
	    //enable dragging of nodes
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
		//turn force on and sent function for each tick
		force.on('tick', function(){
			//update node location
		  	node.attr('cx', function(d) { return d.x; })
		       .attr('cy', function(d) { return d.y; })
		    //update link location
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