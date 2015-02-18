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
	#time_spent,
	.jumbotron {
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
	.hide {
		display: none; 
	}
</style>
<h1>LibStats Question Data Visualized</h1>
<div class="jumbotron">
<a class="btn btn-warning btn-lg" href="javascript:dc.filterAll();dc.renderAll();">Reset All</a>
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
<div class="row">
	<div class="col-md-6 col-md-offset-3">
	I am taking a [Library Juice Academy](http://libraryjuiceacademy.com/) class on using [D3](http://d3js.org/). I created this crossfilter dashboard for my last assignment (which was also late :).
	</div>
<div>