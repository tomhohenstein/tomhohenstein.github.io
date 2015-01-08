---
layout: post
title: Timeline JS
excerpt: Learn to use Timeline JS via iframe
background: background-lavender
featured: true
shorturl: http://goo.gl/STh6Gm
tags: [[timeline js, javascript]]
---
<div class="demo">
	<a class="btn btn-success btn-lg" href="/projects/timeline/" role="button">Demo</a>
</div>
[Timeline JS](http://timeline.knightlab.com/) is one of the easiest ways to create great looking timelines on the web. This post's goal is to create an easy timeline that I can add to my [about page](/about/).  

[Timeline JS](http://timeline.knightlab.com/) can be implemented using custom methods via JavaScript or via a simple iframe. To start with, I'm going to opt for the iframe method and let [Timeline JS](http://timeline.knightlab.com/) do the work for me. Hopefully, I'll update this later on but for right now, I am more interested in getting the timeline up and running. 

## Process 

[Timeline JS](http://timeline.knightlab.com/) can be driven by a published Google Doc spreadsheet. They provide an [excellent example spreadsheet](https://drive.google.com/previewtemplate?id=0AppSVxABhnltdEhzQjQ4MlpOaldjTmZLclQxQWFTOUE&mode=public) for getting started. The template works great and all you need to add images is provide a url that ends in .jpg, .png, or .gif. [Dropbox](https://www.dropbox.com/), [flickr](https://www.flickr.com/), or a simple website should all work fine. Google map integration was as easy as copying a link into the spreadsheet. 

Once I filled out the text, added images, and filled out the content. Adding the timeline to my about page was as simple as dropping in the the iframe 

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
I didn't play with the variables too much, but I did change the maptype to roadmap. All of the [configurations options are listed in Timeline JS's GitHub account](https://github.com/NUKnightLab/TimelineJS#map-style-types). 

Deciding the content was the most difficult aspect of the entire project. I did play around with the tags and era features, both of which are nice. All in all, the process is very easy, especially given the [great results](http://tomhohenstein.com/about/).