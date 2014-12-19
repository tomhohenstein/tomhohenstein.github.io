---
layout: post
title: Instruction Network
project: true
category: project
css: instruction-network
---


This project attempts to represent instructional statistics from [WPI's Gordon Library](http://www.wpi.edu/academics/library.html) as a network graph and has two primary goals: 

* To learn the process and skills necessary to create an interactive, online network graph  
* To see what our "instructional network" looks like. 

I hope that reviewing our statistics as a network graph will help us ask questions like: 

* Are we able to maintain relationships during staff transitions? 
* Are we too dependent on some relationships? 
* Are there gaps in our instruction network? 

Within the graph below the smaller "redish" circles, or nodes, depict faculty members while the larger "blueish" circles are librarians. The blue circles have been artificially enlarged to allow for easier interpretation (it is in no way a reflection on faculty members' importance! : ). Finally, the links, or edges, between each circle represents an instructional session. The darker lines are multiple instruction sessions with a particular faculty member. 

While this project is far from finished, feel free to click and drag the circles. I am still working on highlighting nodes and relationships based on user interactions, as well as adding text data. Although, it will be of little use because it is all numerical, but it would be a technical achievement.

<div id="svg"></div>

##Background

Before starting, I would like to thank a [series of posts](http://bl.ocks.org/sathomas/11550728) by [sathomas](http://bl.ocks.org/sathomas) on [bl.ocks.org](http://bl.ocks.org). I was completely lost before I found these posts and would probably still be. I would also like to think the [DST4L](http://altbibl.io/dst4l/) community that Chris Erdmann is building. The DST4L classes that I attended this fall were awesome and made it possible for me to get this little project off the ground. 

##Tools
I used the following tools to build this project: 

* Mike Bostock's [D3 javascript](http://d3js.org/) library, which can be found [on GitHub](https://github.com/mbostock/d3). 
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
I ignored/deleted all the data except library coordinator and faculty instructor. Next, I moved the spreadsheet into [OpenRefine](http://openrefine.org/) and cleaned it. As one might imagine our statistics had small typos, variations in faculty names, and other small undesirable data features. However, with [OpenRefine](http://openrefine.org/) I was able to quickly clean our data and transform it into two csv documents. One document for the nodes and one for the edges, or links. 	


###Converting to JSON 

I converted my files into JSON as a personal preference. D3 does have the ability to [parse csv](https://github.com/mbostock/d3/wiki/CSV) data but I would rather work with JSON. I used [convertcsv.com](http://www.convertcsv.com/csv-to-json.htm) to transform my csv to JSON. There are other tools that can perform the same task, [convertcsv.com](http://www.convertcsv.com/csv-to-json.htm) just happened to show up higher on my [Google search](https://www.google.com?q=csv%20to%20json). Here is an [example of a JSON file](http://bl.ocks.org/mbostock/4062045#miserables.json) from [Mike Bostock's](https://github.com/mbostock) [Les Miserable's data visualization](http://bl.ocks.org/mbostock/4062045#miserables.json).

###Using D3

Mike Bostock's [D3 javascript](http://d3js.org/) library is a really powerful library with more features and capacity than I could ever hope to explain. But, it has very good [documentation](https://github.com/mbostock/d3/wiki) and lots of [examples](https://github.com/mbostock/d3/wiki/Gallery). 

The basic procedure for creating a network graph are best explained by sathomas's [series of posts](http://bl.ocks.org/sathomas/11550728) on bl.ock.org. Below is some pseudo code to outline the process. 

```
<!-- add an empty svg element to your webpage -->
<svg></svg>

<script>

    //Use d3.select to select your svg element 
    d3.select().append()
               .attr()
               .attr(); 

    //load your data
    d3.json("your-file", callback function(){

        //create "the force" : ) 
        var force = d3.layout.force()
                             .size()
                             .gravity()
                             .charge()
                             .linkStrength()
                             .nodes()
                             .links(); 

        //draw your links first for layout purposes
        var link = svg.selectAll('.link')
                             .data()
                             .enter().append('link')
                             .attr(); 

        //draw your nodes 
        var node = svg.selectAll('.node')
                             .data()
                             .enter().append('circle')
                             .attr()
                             .style()
                             .on("click" toms_function) 
                             .call();

        //use force.on() to iterate during each tick 
        force.on('tick', function(){

            //update node location 
            node.attr('cx', function(d){ return d.x; })
                .attr('cy', function(d){ return d.y; });

            //update link location
            link.attr('x1', function(d){ 
                                return d.source.x; })
                .attr('y1', function(d){ 
                                return d.source.y; })
                .attr('x2', function(d){ 
                                return d.target.x; })
                .attr('y2', function(d){ 
                                return d.target.y; });
        }); 

    //start the force 
    force.start(); 
    }); 

    //additional functions 
    toms_function(){
        //do things when node is clicked
    }
</script>
``` 

##Code

You can find the [code for this project on GitHub](https://github.com/tomhohenstein/tomhohenstein.github.io/tree/master/projects/in). If you have any questions, ideas, or improvements. Feel free to contact me (see footer). 

<script src="{{ site.baseurl }}/projects/instruction-network/d3/d3.min.js"></script>
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