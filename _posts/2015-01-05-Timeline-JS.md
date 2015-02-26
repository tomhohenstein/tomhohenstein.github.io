---
layout: post
title: Timeline JS
number: 4
tags: [[timeline-JS, timeline]]
css: p/timeline.css
---
 <iframe src='http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0At6NjQiEuW11dDlTdmEzVVhHQzM5clFzellkQXpldXc&font=Bevan-PotanoSans&maptype=roadmap&lang=en&height=700' width='100%' height='700' frameborder='0'></iframe>

[Timeline JS](http://timeline.knightlab.com/) is one of the easiest ways to create great looking timelines on the web. This post's goal is to create an easy timeline that I can add to my [about page](/about/).  

[Timeline JS](http://timeline.knightlab.com/) can be implemented using custom JavaScript methods or via a simple iframe. To start with, I'm going to opt for the iframe method and let [Timeline JS](http://timeline.knightlab.com/) do the work for me. Hopefully, I'll update this later on but for right now, I am interested in building an easy, functional, timeline. 

## Process 

[Timeline JS](http://timeline.knightlab.com/) can be driven by data published in a Google Doc. They provide an [excellent example spreadsheet](https://drive.google.com/previewtemplate?id=0AppSVxABhnltdEhzQjQ4MlpOaldjTmZLclQxQWFTOUE&mode=public) for getting started (which works great). To add images provide a url that ends in .jpg, .png, or .gif. [Dropbox](https://www.dropbox.com/), [Flickr](https://www.flickr.com/), or a simple website url should all work fine. Integrating Google Maps was as easy as copying a link into the spreadsheet and letting Timeline JS work its magic. 

Once I drafted the content, adding the timeline to my about page was as simple as adding an iframe to my markup. 

```
<iframe 
	src='http://cdn.knightlab.com/libs/timeline/latest/embed/index.html
	?source=0At6NjQiEuW11dDlTdmEzVVhHQzM5clFzellkQXpldXc
	&font=Bevan-PotanoSans
	&maptype=roadmap
	&lang=en
	&height=700' 
	width='100%' 
	height='700' 
	frameborder='0'></iframe>
```
I didn't play with the variables too much, but I did change the maptype to roadmap. All of the [custom configuration options are listed in Timeline JS's GitHub account](https://github.com/NUKnightLab/TimelineJS#map-style-types). 

Deciding the content was the most difficult aspect of the entire project. I did play around with the tags and era features, both of which are nice. All in all, the process is very easy, especially given the [great results](http://tomhohenstein.com/about/).