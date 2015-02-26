---
layout: post
title: Sharing IPython Notebooks
number: 8
tags: [[ipython, notebook, python]]
css:
javascript: 
---
<div class="demo">
	<a class="btn btn-success btn-lg" href="/GPS-Majors-Notebook/" role="button" title="GPS Majors Notebook">My Notebook</a>
</div>	

While it was a relatively small feat, I wanted to note the sharing of my first [IPython Notebook](http://ipython.org/notebook.html) on my blog. Before enrolling in [DST4L - Data Science Training for Librarians](http://altbibl.io/dst4l/) - last fall, I didn't even know what an IPython Notebook was, let alone how to share them. 

Sharing notebooks is actually an easy task. In IPython Notebook's file menu, select the "Download as" and then select HTML. IPython will will generate a HTML file with all the necessary CSS and voila, you have a notebook to share. After that, upload the HTML file to your website and you're set. In an ideal world, I would like to reduce the code by putting the CSS into a separate file but that task will have to wait for now. 

My [first notebook walks](/projects/notebooks/gps-majors-2010-2013/) through taking academic course data and pulling student majors from 2010-2013 for a specific class. After gathering the data and tabulating the student counts, the notebook then exports the data into a JSON file for visualization. To make the most of my work, I used the JSON file created by my notebook to build [my first D3 bar chart](/My-First-D3-Bar-Chart/). It was a fun little project and if you're interested, [check out the demo](/projects/barchart/).   