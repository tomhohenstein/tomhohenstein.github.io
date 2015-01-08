---
layout: default
title: My Projects
css: p/projects.css
---
# My Projects 

Below is a gathering of my projects. Enjoy!

<div class="jumbotron">
	<div class="container">
		<div class="row">	
		{% for p in site.pages %}
			{% if p.tags contains "project" %}
			<div class="col-md-4 project">
				<a href="{{ p.url }}"><h3>{% if p.tags contains "python" %}<img alt="python icon" src="/assets/img/python.svg">{% else %}<img alt="code icon" src="/assets/img/code.svg">{% endif %}{{ p.title }}</h3></a>	
			</div>	
			{% endif %}
		{% endfor %}	
		</div>
	</div>
</div>