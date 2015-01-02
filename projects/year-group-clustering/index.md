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
* [Stackoverflow Question anwser](http://stackoverflow.com/questions/23022429/create-node-clusters-focal-points-by-data-attribute-in-d3)

Tasks: Build a demo cluster graph


<div id="svg"></div>

## Structuring the Data 

Detail how the data is structured 

## JavaScript tips 

Dynamically locating the largest node within a cluster 

Moving nodes of a same cluster towards each other. 

<style>
.link {
    stroke: #777;
    stroke-width: 2px;
}
</style>



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
			"cluster": "MA"
		},
		{
			"index": 1, 
			"color": "red", 
			"size": 3, 
			"labal": "class 1",
			"cluster": "MA"
		},
		{
			"index": 2, 
			"color": "blue", 
			"size": 10, 
			"labal": "class 2",
			"cluster": "BIO"
		},
		{
			"index": 3, 
			"color": "blue", 
			"size": 5, 
			"labal": "class 3",
			"cluster": "BIO"
		},
		{
			"index": 4, 
			"color": "blue", 
			"size": 5, 
			"labal": "class 3",
			"cluster": "BIO"
		},
		{
			"index": 5, 
			"color": "orange", 
			"size": 39, 
			"labal": "class 3",
			"cluster": "CHEM"
		}, 
		{
			"index": 6, 
			"color": "orange", 
			"size": 9, 
			"labal": "class 3",
			"cluster": "CHEM"
		},
		{
			"index": 7, 
			"color": "green", 
			"size": 9, 
			"labal": "class 3",
			"cluster": "SPAN"
		}
		],
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
				.gravity(0.4) //gravity
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
					.attr('class',function(d) {return d.cluster})
					.attr('r', function(d) { return d.size; })
					.style('fill',function(d) {return d.color})
					.style('stroke',function(d) {return d.color})
					.call(force.drag);
/*
	var clusters = d3.nest()
					.key(function(d){ return d.cluster;})
					.map(data.nodes);
	
	var clusters = [{ cluster : index of biggest node },
					{ cluster : index of biggest node}]
					var center = d3.entries(clusters); 


	console.log(clusters); 


	//console.log("size " + data.nodes[i].size);
		//clusters[data.nodes[i].cluster] = data.nodes[i].size;
		console.log("cluster " + typeof(clusters[data.nodes[i].cluster]) + clusters[data.nodes[i].cluster]);

	console.log("clusters size" + clusters[data.nodes[i].cluster]);
		console.log("size " + typeof(data.nodes[i].size) + data.nodes[i].size);
		
		//clusters[data.nodes[i].cluster] = data.nodes[i].size;
		console.log("cluster in data.nodes " + data.nodes[i].cluster)
		console.log("cluster in clusters " + clusters[data.nodes[i].cluster])
			

*/

	
	//build clusters object to hold cluster name and largest node
	var clusters = {};
		for (i in data.nodes){
		if(typeof(clusters[data.nodes[i].cluster]) === "undefined" ){
			clusters[data.nodes[i].cluster] = 0; 
			console.log("zero for " + data.nodes[i].cluster);
		}
		if(data.nodes[i].size > clusters[data.nodes[i].cluster]){
			clusters[data.nodes[i].cluster] = data.nodes[i].size;
			console.log(data.nodes[i].cluster + " is now " + data.nodes[i].size);
		} 
	}
		
	//turn force on and sent function for each tick
	function tick(e){
		var k = e.alpha * .1;
		var c = {}; 
	  	data.nodes.forEach(function(n) {
	  		 if(clusters[n.cluster] == n.size){
	  		 	c[n.cluster] = {"x": n.x, "y":n.y};
	  		 } 
	    	n.x += (c[n.cluster].x - n.x) * k;
	    	n.y += (c[n.cluster].y - n.y) * k;
  	  	});
		
   		node.attr("cx", function(d) { return d.x; })
      		.attr("cy", function(d) { return d.y; });
  
	}

	function end(e){
		//alert(data.nodes);
	}
	// Move d to be adjacent to the cluster node.

</script>