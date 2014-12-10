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

.node text {
  pointer-events: none;
  font: 10px sans-serif;
  }
</style>

This project attempts to represent instructional statistics from [WPI's Gordon Library](http://www.wpi.edu/academics/library.html) as a network graph. I have two primary goals in undertaking this project: 

* To learn the process and skills necessary to create an interactive, online network graph  
* To see what our "instructional network" looks like. 

I hope that reviewing our statistics as a network graph will help us ask questions like: 

* Are we able to maintain relationships during staff transitions? * Are we too dependent on some relationships? 
* Are there gaps in our instruction network? 

Within the graph below the smaller "redish" circles, or nodes, depict faculty members while the larger "blueish" circles are librarians. The blue circles have been artificially enlarged to allow for easier interpretation (it is in no way a reflection on faculty members' importance! : ). Finally, the links, or edges, between each circle represents an instructional session. The darker lines are multiple instruction sessions with a particular faculty member. 

While this project is far from finished, feel free to click and drag the circles. I am still working on highlighting nodes and relationships based on user interactions, as well as adding text data (although, in the public version it will be of little use but it would be a technical achievement.)

<div id="svg"></div>

##How it works

Before starting, I need to thank a [series of posts](http://bl.ocks.org/sathomas/11550728) by [sathomas](http://bl.ocks.org/sathomas) on [bl.ocks.org](http://bl.ocks.org). I was completely lost before I found these posts and would probably still be. I would also like to think the [DST4L](http://altbibl.io/dst4l/) community that Chris Erdmann is building. The DST4L classes that I attended this fall were awesome and made it possible for me to get this little project off the ground. 

I have to admit that the math behind how gravitational force and charge of each node impacts the overall graph is well over my head. However, I the underlying concept behind the graph is rather simple - using a line to depict a certain relationship between each node. In this example the nodes are faculty or librarians, and the lines are instructional sessions. As such, the datasets behind the network graph are a list of nodes and a two column csv representing the links. Each link has a source and a target, I simply changed faculty to source and librarian to target in my csv. All of the "fun" features, like moving the nodes and the initial build, are aspects of the [d3 javascript](http://d3js.org/) library.  

###Tools
Here are the tools that I used for this project: 

* [d3 javascript](http://d3js.org/) library, which can be found [on GitHub](https://github.com/mbostock/d3). 
* [OpenRefine](http://openrefine.org/)
* [SublimeText](http://www.sublimetext.com/) 
* [Convert CSV to JSON](http://www.convertcsv.com/csv-to-json.htm)
* [Excel](http://products.office.com/en-us/excel)

##Basic Process 

Like many libraries we keep rather detailed instruction statistics. However, outside of doing some basic counting with them - number of sessions, number of student contacts, number of session per department - we don't do too much with the data. 

###Our Data
Our statistics are entered into a form - Google Docs or Qualtrics - and ported into [Excel](http://products.office.com/en-us/excel) at the end of each term. The result is a spreadsheet has the following data: 

 * Library Coordinator  
 * Term 
 * Date of Session 
 * Number of Attendees 
 * Event Description or Course 
 * Faculty Instructor 
 * Collaborating Office 
 * Is this the first time we have supported this course or event?
 * Audience 
 * What department was the event or course affiliated with?
 * Type of Instruction / Activity 
 * Is this the first time we have worked with this faculty member?

###Cleaning with OpenRefine
I ignored/deleted all the data except library coordinator and faculty instructor. Next, I moved the spreadsheet into [OpenRefine](http://openrefine.org/) and cleaned it. As one might imagine our statistics had small typos, variations in faculty names, and other small undesirable data features. However, with [OpenRefine](http://openrefine.org/) I was able to quickly clean our data. The csv I exported from [OpenRefine](http://openrefine.org/) looked had two columns - faculty and librarian. 	

Once I had a clean dataset I replaced all the names with numbers and began playing the [d3 javascript](http://d3js.org/) library. I also created a list of the nodes I wanted to create (aka unique names in the dataset). 

The two dataset I had, one listing the nodes and the other listing the faculty-librarian relationship became the basis for the network graph. One issue I ran into was that my list of nodes was not indexed in the same way that my faculty-librarian csv was. While this is a little tricky to explain, D3 tracks nodes via an array and uses the node's indexed position to track it. Simply,  your source and target information and the order you add your nodes need to match. 

###Converting to JSON 

I converted my fancy, two column csv into JSON as a personal preference. D3 does have the ability to [parse csv](https://github.com/mbostock/d3/wiki/CSV) data but I would rather work with JSON. I used [convertcsv.com](http://www.convertcsv.com/csv-to-json.htm) to transform my csv to JSON. There are other tools that can perform the same task, [convertcsv.com](http://www.convertcsv.com/csv-to-json.htm) just happened to show up higher on my [Google search](https://www.google.com?q=csv%20to%20json). 

###Using D3

The [d3 javascript](http://d3js.org/) library is a really powerful library with more features and capacity than I could ever hope to explain. But, it also has very good [documentation](https://github.com/mbostock/d3/wiki) and lots of [examples](https://github.com/mbostock/d3/wiki/Gallery). 

The basic procedure for creating a network graph are best explained by sathomas's [series of posts](http://bl.ocks.org/sathomas/11550728) on bl.ock.org. A quick synopsis is: 

* In your html element add a div for placing all of the svg graphics that the browser will create. It is easiest to set the height and width of the "svg canvas" in your javascript 
* Add the "svg canvas" to your div using 

```javascript 
	d3.select("#yourdiv").append("svg")
		.attr("width", your-width-here)
		.attr("height", your-height-here);
```
* Load your data, I used

```javascritpt
	d3.json("your-data-file-here", function(error, nodes){
		// callback function here 
	}
```
* At this point, you can go in a lot of directions. Within the callback, I decided to 

```javascript 
	//create the force 
	var force = d3.layout.force()
	        .size([width, height]) //size
	        .gravity(0.5) //gravity
	        .charge(-700) //charge between elements
	        .linkStrength(0.8) // link strength, rigidity 
	        .nodes(nodes) // adds nodes
	        .links(links) // adds links 
	
	//draw links first
	    var link = svg.selectAll('.link')
			.data(links)
			.enter().append('line')
			.attr('class', 'link');

	//draw nodes 
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
```
> One important lesson learned was to create the links first. Doing it this way ensure the nodes are on top of the links.
> Another lesson was that D3 tracks the nodes by their index number. This means that the data that represents your links needs to match the order that you add your nodes. That is the "source" and "target," in this example the faculty member and librarian, match the order you add the nodes.  

* The last bit is to have D3 update the node and links position after each "tick." A tick is essentially one step in the force simulation. The way I understand this is to envision the solar system. The network graph has similar features to the solar system - gravity, electric "charge," and distance between objects. In the same way the solar system is consistently moving based on these forces, the simulation does too. A tick, is like one day in the solar system, it is one step in the simulation. At the end of the simulation the graph achieves a sort of "steady state" until it is altered again. Within the same callback function from `d3.json("your-data-file-here", function(error, nodes){...}`

```javascript 
	//turn force on and sent function for each tick
	force.on('tick', function(){
	
		//update node location
		node.attr('cx', function(d) { return d.x; })
			.attr('cy', function(d) { return d.y; });

		//update link location
		link.attr('x1', function(d) { return d.source.x; })
			.attr('y1', function(d) { return d.source.y; })
			.attr('x2', function(d) { return d.target.x; })
			.attr('y2', function(d) { return d.target.y; });
		});
```

* At this point you can add additional functions for normal events like click, double click, and mouse over. 

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
	        .gravity(0.5) //gravity
	        .charge(-700) //charge between elements
	        .linkStrength(0.8) // link strength, rigidity 
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
		       .attr('cy', function(d) { return d.y; });
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