---
layout: post
title: Year Group Clustering 
project: true
category: project
css: 
javascript:
---
This project should be a fun one. I have always wanted to see what classes first year students take and how that is distributed by subject. Are a lot of first year students taking clasess in math? biology? history? If this project is successful, we will accomplish just that feat. 

Resources: 

* [Mike Bostock's Clustered Force Layout 1](http://bl.ocks.org/mbostock/1747543) on bl.ocks.org

Tasks: Build a demo cluster graph
<style>


.link {
    stroke: #777;
    stroke-width: 2px;
}
</style>
<div id="svg"></div>


<!-- load d3 --> 
<script src="{{ site.baseurl }}/projects/instruction-network/d3/d3.min.js"></script>
<script>
//canvas size 
var width = 500,
    height = 500,
    padding = 10,
    clusterPadding =5,
    maxRadius = 40;

var data = {
	"nodes":[
		{
			"index": 0, 
			"color": "red", 
			"size": 50, 
			"labal": "class", 
			"cluster": 1
		},
		{
			"index": 1, 
			"color": "red", 
			"size": 3, 
			"labal": "class 1",
			"cluster": 1
		},
		{
			"index": 2, 
			"color": "blue", 
			"size": 10, 
			"labal": "class 2",
			"cluster": 2
		},
		{
			"index": 3, 
			"color": "blue", 
			"size": 5, 
			"labal": "class 3",
			"cluster": 2
		},
		{
			"index": 4, 
			"color": "blue", 
			"size": 5, 
			"labal": "class 3",
			"cluster": 2
		},
		{
			"index": 5, 
			"color": "blue", 
			"size": 39, 
			"labal": "class 3",
			"cluster": 2
		}],
	"links":[
		{
			"source":0,
			"target":1
		}]
	}; 

	//add svg to dom 
	var svg = d3.select("#svg").append("svg")
    			.attr("width", width)
    			.attr("height", height);

	//load d3 force 
	var force = d3.layout.force()
				.size([width, height]) //size
				.gravity(.2) //gravity
				.charge(function(d){ return  d.size * -30 }) //charge between elements
				.nodes(data.nodes)
				.on("tick", tick)
				.on("end", end)
				.start(); 

	//draw nodes - issue with x, y 
	var node = svg.selectAll('.node')
					.data(data.nodes)
					.enter().append('circle')
					.attr('class','node')
					.attr('r', function(d) { return d.size; })
					.style('fill',function(d) {return d.color})
					.style('stroke',function(d) {return d.color})
					.call(force.drag);

	//turn force on and sent function for each tick
	function tick(e){
		/*
		node.attr('cx', function(d) { return d.x; })
        	.attr('cy', function(d) { return d.y; });
    	*/
    	

    	node.attr("cx", function(d) { return d.x; })
      		.attr("cy", function(d) { return d.y; });
	};
	function end(e){
		//alert(data.nodes);
	}

	function cluster(num){
		console.log(num); 

	}

</script>