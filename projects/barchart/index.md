---
layout: post
title: Bar Chart
project: true
category: project
css: p/barchart.css
javascript: 
- d3.min.js
- p/barchart.js
---

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