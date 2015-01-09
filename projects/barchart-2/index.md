---
layout: post
title: Bar Chart 2
css: p/barchart.css
tags: project, javascript, D3
javascript:
- l/d3.min.js
- p/barchart.2.js
---
<!-- <a class="btn btn-default btn-lg" href="/my-first-d3-bar-chart/" role="button">Read the Post</a> --> 
<div class="dropdown">
  <button class="btn btn-default btn-lg dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
    Sort Options
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    <li role="presentation"><a data-val="1" role="menuitem"  tabindex="-1" href="#">A-Z</a></li>
    <li role="presentation"><a data-val="2" role="menuitem" tabindex="-1" href="#">Z-A</a></li>
    <li role="presentation"><a data-val="3" role="menuitem" tabindex="-1" href="#">Highest to Lowest</a></li>
    <li role="presentation"><a data-val="4" role="menuitem" tabindex="-1" href="#">Lowest to Highest</a></li>
  </ul>
</div>
<h3 id="sorted">Sorted: A-Z</h3>
<svg id="chart"></svg>