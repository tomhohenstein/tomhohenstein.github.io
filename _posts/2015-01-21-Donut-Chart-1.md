---
layout: post
title: Donut Chart 1
css:
tags: [[library juice, D3, bar chart]]
javascript:
- l/d3.min.js
- p/donut.chart.js
---
<style>
	.center-text {
      font-size: 50px;
  }
</style>

<div id="chart"></div>

I am taking a [Library Juice Academy](http://libraryjuiceacademy.com/) class on using [D3](http://d3js.org/). I created this donut chart for my last assignment. Here is the pseudocode : ) 

```
$( document ).ready(function (){ 
	
	//the data for my pie chart 
	var data = [];

	//make sure all values are numbers
	data.forEach(function(d){ 
		d.value = +d.value; 
	});

	//set some vars
	var width, 
	height, 
	radius,
	colors;

	//function for adding interactions 
	function add_tip (){
		//set text
		var html_text ;

		chart.selectAll("path").transition()
			.duration()
			.attr("opacity", ) 

		d3.select(this).transition()
			.duration()
			.attr("opacity",)
			.attr('d',);

		d3.select(".center-text")
			.text(html_text);
	}

	//removes added text and resets donut
	function remove_tip(){

		chart.selectAll('path').transition()
			.duration()
			.attr("opacity",)
			.attr('d',);

		d3.select(".center-text")
			.text("Welcome");
	}

	//create arc var
	var arc = d3.svg.arc()
		.outerRadius()
		.innerRadius();

	//second arc for interactions 
	var arc2 = d3.svg.arc()
		.outerRadius()
		.innerRadius();			

	//create pie var for pie chart
	var pie = d3.layout.pie()
		.sort(null)
		.value();			

	//create chart
	var chart = d3.select("#chart")
		.append("svg")
		.attr("width",)
		.attr("height",)
		.append("g")
		.attr("transform", );

	var g = chart.selectAll(".arc")
		.data(pie(data))
		.enter()
		.append("g")
		.attr("class",);

	g.append("path")
		.attr("d", arc)
		.style("fill", )
		.on('mouseover', add_tip)
      	.on('mouseout', remove_tip);

      chart.append("text")
		.attr("text-anchor", )
		.attr("class", )
		.text("Welcome");

}); // .ready() 
```