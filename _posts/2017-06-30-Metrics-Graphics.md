---
layout: post
title: Using MetricsGraphics.js
permalink: MetricsGraphics
css: metricsgraphics.css
js:
- jquery.js
- d3.min.js
- metricsgraphics.min.js
- tom.metrics.graphics.js
---
[MetricsGraphics.js](https://www.metricsgraphicsjs.org/) is a nice JavaScript library for quickly plotting time series data. Built on top of [D3](https://d3js.org/), MetricsGraphics.js is designed to keep plotting simple data easy. It largely achieves this goal. With a little copying and pasting I was able to create the line graph below fairly quickly. Just make sure you include [D3](https://d3js.org/) and [MetricsGraphics.js](https://www.metricsgraphicsjs.org/) and follow the [given example](https://www.metricsgraphicsjs.org/examples.htm#lines). 

<div id="line-chart">
</div>

The code is as follows. 

```
d3.json('/assets/data/metricsGraphics-Demo1.json', function(data) {
    data = MG.convert.date(data, 'date');
    MG.data_graphic({
        title: "Tom's Copy and Paste Example",
        description: false,
        data: data,
        width: 600,
        height: 200,
        right: 40,
        target: document.getElementById('line-chart'),
        x_accessor: 'date',
        y_accessor: 'value'
    });
});

```

Next I wanted to try it with a little real data, so I downloaded the stock value for [Davita from Google](https://www.google.com/finance/historical?output=csv&q=dva) and used this [Jupyter notebook](#) to convert it into a .json. 

<div id="dva-chart">
</div>

Using my own data revealed a few 'gotchas'

+ date format - > http://strftime.org/
+ json format 


That's it. 