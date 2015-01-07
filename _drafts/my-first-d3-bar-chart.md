---
layout: post
title: My First D3 Bar Chart
excerpt: A few tips and tricks for creating your first D3 bar chart
featured: true
background: background-aqua
shorturl: 
tags: [[D3, javascript, bar chart ]]
css:
javascript: 
---
Creating my first [D3](http://d3js.org/) bar chart was both a lot of fun and a bit more work than I anticipated. However, I think the results are [well worth the effort](http://tomhohenstein.com/projects/barchart/). 

## Resources

To accomplish this task I used for the following resources: 

* Mike Bostock's series of posts titled *[Let's Make a Bar Chart](http://bost.ocks.org/mike/bar/)* and his *[Sortable Bar Chart](http://bl.ocks.org/mbostock/3885705)*
* The [D3 API reference](https://github.com/mbostock/d3/wiki/API-Reference)
* [jQuery's API](http://api.jquery.com/)
* Scott Murray's *[Making a bar chart](http://alignedleft.com/tutorials/d3/making-a-bar-chart)*

## Process 

The process seems easy enough, tell D3 to load some data and then build the bar chart. However, between adding the x and y axes, making the bar chart sortable, and using some decent transitions, the process can be a bit complicated. You can find the [full JavaScript source on my GitHub account](https://github.com/tomhohenstein/tomhohenstein.github.io/blob/master/assets/js/p/barchart.js), but I highly recommend reading [Mike Bostock's posts](http://bost.ocks.org/mike/bar/).  Below is some pseudocode of the process to get you started.  

```javascript
//load data
d3.json("data file", function(err, data){

 //I sorted my data right away using 
 data.sort(function(a, b){ return d3.ascending()})

 //set vars 
 var margin, barHeight, width, height 
  //note: setting the margins is critical

 //set x axis linear scale
 var x = d3.scale.linear().domain().range();

 //use an ordinal scale for the y axis 
 var y = d3.scale.ordinal().domain().rangeBands();			

 //x axis var 
 var xAxis = d3.svg.axis().scale(x).orient();
  //note: use x var for the scale 

 //y axis var
 var yAxis  = d3.svg.axis().scale(y).orient(); 
  //note: use y var for the scale	

 //add chart
 var chart = d3.select()
 .attr("width",)
 .attr("height",); 
  //note: watch your margins

 //add bars
 var bar = chart.selectAll(".bar")
 .data()
 .enter().append("g")
 .attr("transform",) 
 .attr("class",)
 .attr("y",);
  //note: use transform to position the bars 

 //adds rectangle for the bar
 bar.append("rect")
 .attr("width",)
 .attr("height",);

 //adds text for each bar
 bar.append("text")
 .attr("x",)
 .attr("y",)
 .attr("dy",)
 .text();
  //note: use x and y to position the text. 

 //add x axis 
 chart.append("g")
 .attr("class",)
 .attr("transform",)
 .call(xAxis);
  //note: use transform to set x axis location 

 //add y axis 
 chart.append("g")
 .attr("class",)
 .attr("transform",)
 .call(yAxis);
  //note: use transform to set y axis location

 //a function for updating chart 
 function update(){ 
  //sort the data 

  //remap y domain 
  y.domain(data.map())

  //transitions vars
  var transition = chart.transition().duration(),
  delay = function(d, i) { return };

  //transition bars 
  transition.selectAll(".bar")
  .delay(delay)
  .attr("transform",);

  //transition y axis 
  transition.select()
  .call(yAxis)
  .selectAll("g")
  .delay(delay);		    
}

//update based on user event 
//note: I used jQuery for event detection 
```