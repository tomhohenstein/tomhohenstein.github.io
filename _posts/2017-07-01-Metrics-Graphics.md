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
[MetricsGraphics.js](https://www.metricsgraphicsjs.org/) is a nice JavaScript library for quickly plotting time series data. Built on top of [D3](https://d3js.org/), MetricsGraphics.js is designed to keep plotting simple data easy. It largely achieves this goal. With a little copying and pasting I was able to create the line graph below fairly quickly. Just make sure you include [D3](https://d3js.org/) and [MetricsGraphics.js](https://www.metricsgraphicsjs.org/) when follow the [given example](https://www.metricsgraphicsjs.org/examples.htm#lines). 

<div id="line-chart">
</div>

The code looks like: 

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

Next I tried it with some real data. I downloaded a stock data set for [DaVita from Google](https://www.google.com/finance/historical?output=csv&q=dva) and used this [Jupyter notebook](https://github.com/tomhohenstein/tomhohenstein.github.io/blob/master/assets/notebooks/MetricsGraphics.ipynb) to wrangle it into a json file for visualization. The process highlighted a few 'gotchas' worth noting.

<div id="dva-chart">
</div>

MetricsGraphics.js anticipates getting data in a specific format. Anything outside of that format resulted in errors - which were not always super helpful. The json file should look like:

```
    [
        {
            "date": "2014-01-01",
            "value": 190000000
        },
        {
            "date": "2014-01-02",
            "value": 190379978
        }
    ]
```

Any variation in that format results in an error and your JavaScript breaking - something that took me a good 15 minutes to figure out. 

Also be careful with how your date strings are formatted. An annoying detail but it did help me find [http://strftime.org/](http://strftime.org/), a great tool for formating time in Python. I was using [Pandas](http://pandas.pydata.org/pandas-docs/stable/) and the default export to json tweaked how the date was formatted - causing things to break.

The last thing worth mentioning are other [resources available](https://github.com/mozilla/metrics-graphics#resources). In addition to [hooks](https://github.com/mozilla/metrics-graphics/blob/master/HOOKS.md), [examples](https://www.metricsgraphicsjs.org/examples.htm), there is also a [list of options](https://github.com/mozilla/metrics-graphics/wiki/List-of-Options) for tweaking the color and style of your plot. 

Enjoy! 