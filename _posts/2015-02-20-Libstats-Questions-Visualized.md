---
layout: post
featured: Yes
background: background-orange
title: Libstats Questions Visualized
tags: [[library juice, D3, crossfilter, dc-js]]
css: l/dc.css
javascript:
- l/d3.min.js
- l/crossfilter.v1.min.js
- l/dc.min.js
- p/cross.demo.js 
---
<style>
	h1, 
	h4,
	#question_half_hour,
	#question_weekday,
	#location_name,
	#patron_type,
	#time_spent,
	.jumbotron {
		text-align: center; 
	}
	p:last-child {
		text-align: left; 
	}
	#question_half_hour {
		float:none;
	}
	.jumbotron {
		background-color: white; 
		margin-bottom: 0px; 
		padding-bottom: 0px;

	}
	#small-charts {
		clear:both;
	}
	rect.selected,
	.pie-slice.selected {
		opacity: 1; 
	}
	rect.deselected,
	.pie-slice.deselected {
		opacity: .4; 
	}
	.x.axis text {
    	text-anchor: end !important;
    	transform: rotate(-45deg);
	}
	.dc-chart .selected path {
		stroke: #FFF;
	}
	.dc-chart g.row text {
		fill: rgb(5, 5, 5);
	}
	.center-text {
		font-size: 20px; 
	}
	svg:not(:root) {
		overflow: overlay;
	}
	.hide {
		display: none; 
	}
</style>
<p>2014 Data</p>
<div class="jumbotron">
<a class="btn btn-warning btn-lg" href="javascript:dc.filterAll();dc.redrawAll();">Reset All</a>
	<h4>Questions by Half Hour</h4>
	<div id="question_half_hour"></div>
</div>	
<div class="row" id="small-charts">
	<div class="col-md-3" id="question_weekday">
		<h4>Weekday <a class="btn btn-default btn-sm" href="javascript:question_weekday_chart.filterAll();dc.redrawAll();">Reset</a></h4>
	</div>
	<div class="col-md-3" id="location_name">
		<h4>Department <a class="btn btn-default btn-sm" href="javascript:location_name_chart.filterAll();dc.redrawAll()">Reset</a></h4>
	</div>
	<div class="col-md-3" id="patron_type">
		<h4>Patron Type <a class="btn btn-default btn-sm" href="javascript:patron_type_chart.filterAll();dc.redrawAll();">Reset</a></h4>
	</div>
	<div class="col-md-3" id="time_spent">
		<h4>Time spent <a class="btn btn-default btn-sm" href="javascript:time_spent_chart.filterAll();dc.redrawAll();">Reset</a></h4>
	</div>
</div> 	
	
I am taking a [Library Juice Academy](http://libraryjuiceacademy.com/) class on using [D3](http://d3js.org/). I created this [crossfilter](http://square.github.io/crossfilter/) dashboard for my last assignment (which was also late :). Be sure to check out the APIs for both [crossfilter](https://github.com/square/crossfilter/wiki/API-Reference) and [D3](https://github.com/mbostock/d3/wiki/API-Reference) for further documentation. 

```
//declare var outside of d3.csv for user interactions
var question_half_hour_chart = ;
var question_weekday_chart = ;
var location_name_chart = ;
var patron_type_chart = ;
var time_spent_chart = ;

d3.csv("data.csv", function(csv){
	
	//create crossfilter data 
	var data = crossfilter(csv);  
	
	//set dimension vars
	var question_half_hour = data.dimension(),
		question_weekday = data.dimension(),
		location_name = data.dimension(), 
		patron_type = data.dimension(), 
		time_spent = data.dimension();

	//set group vars 
	var question_half_hour_group = question_half_hour.group().reduceCount(), 
		question_weekday_group = question_weekday.group().reduceCount(),
		location_name_group = location_name.group().reduceCount(), 
		patron_type_group = patron_type.group().reduceCount(),
		time_spent_group = time_spent.group().reduceCount();  

	question_half_hour_chart
		.width() 
		.height()
		.margins({})
		.dimension(question_half_hour)
		.group(question_half_hour_group)
		.label()
		.colors([])
		.elasticY()
		.x(d3.scale.ordinal().domain()
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(4);

	question_weekday_chart
		.width() 
		.height()
		.margins({})
		.dimension(question_weekday)
		.group(question_weekday_group)
		.label()
		.title()
		.renderTitle(true)
		.colors([])
		.elasticX()
		.xAxis().ticks(4);	
	
	location_name_chart
		.radius([])
		.innerRadius([])
		.dimension(location_name)
		.group(location_name_group)
		.label()
		.renderLabel()
		.colors([])
		
	patron_type_chart
		.width() 
		.height()
		.margins({})
		.dimension(patron_type)
		.group(patron_type_group)
		.label()
		.title()
		.colors([])
		.elasticX(true)
		.xAxis().ticks(4);

	time_spent_chart
		.width() 
		.height()
		.margins({})
		.dimension(time_spent)
		.group(time_spent_group)
		.label()
		.title()
		.colors([])
		.elasticX(true)
		.xAxis().ticks(4);

	//render all charts 
	dc.renderAll();
	
	//add pie mouse events 
	d3.selectAll(".pie-slice path")
		.on("mouseover", function(d){ })
		.on("mouseout", function(){})

	//add row chart mouse events 
	var row = d3.selectAll("g.row")
		.on("mouseover", function(d){})
		.on("mouseout", function(){})

	//add bar chart mouse events 
	var bar = d3.selectAll(".bar")
		.on("mouseover", function(d){})
		.on("mouseout", function(){})	
})
```