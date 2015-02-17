---
layout: default
title: Crossfilter
css:
tags: library juice, javascript, D3
javascript:
- l/d3.min.js
- l/crossfilter.v1.min.js
- l/dc.min.js
- p/cross.demo.js 
---
<style>
	#question_half_hour {
		text-align: center; 
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
</style>
<div class="jumbotron">
	<div id="question_half_hour"></div>
</div>	
<div class="row">
	<div class="col-md-3" id="question_weekday"></div>
	<div class="col-md-3" id="location_name"></div>
	<div class="col-md-3" id="patron_type"></div>
	<div class="col-md-3" id="time_spent"></div>
</div> 	

I am taking a [Library Juice Academy](http://libraryjuiceacademy.com/) class on using [D3](http://d3js.org/). I created this crossfilter dashboard for my last assignment (which was also late :).