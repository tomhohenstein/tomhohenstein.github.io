---
layout: default
title: Crossfilter
css: l/dc.css
tags: library juice, javascript, D3
javascript:
- l/d3.min.js
- l/crossfilter.v1.min.js
- l/dc.min.js
- l/d3.tooltip.js
- p/cross.demo.js 
---
<style>
	h1, 
	h4,
	#question_half_hour,
	#question_weekday,
	#location_name,
	#patron_type,
	#time_spent {
		text-align: center; 
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
</style>
<h1>LibStats Question Data Visualized</h1>
<div class="jumbotron">
	<h4>Questions by Half Hour</h4>
	<div id="question_half_hour"></div>
</div>	
<div class="row" id="small-charts">
	<div class="col-md-3" id="question_weekday">
		<h4>Weekday</h4>
	</div>
	<div class="col-md-3" id="location_name">
		<h4>Department</h4>
	</div>
	<div class="col-md-3" id="patron_type">
		<h4>Patron Type</h4>
	</div>
	<div class="col-md-3" id="time_spent">
		<h4>Time spent</h4>
	</div>
</div> 	

I am taking a [Library Juice Academy](http://libraryjuiceacademy.com/) class on using [D3](http://d3js.org/). I created this crossfilter dashboard for my last assignment (which was also late :).