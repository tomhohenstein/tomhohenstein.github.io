---
layout: default
title: Blog
---
##A list of blog posts

{% for post in site.posts %}
<div class="blog-list row">
  <div class="col-md-6 col-md-offset-1">
  	<img alt="..." class="blog-list-img img-rounded" height="200" src="{{ site.baseurl }}/assets/img/{{ post.thumbnail }}" width="200" >
      <div class="caption">
        <h2>{{ post.title }}</h2>
        <p> {{ post.excerpt | remove: '<p>' | remove: '</p>' }} </p>
        <p>Tags: 
        {% for tag in post.tags %}
          {% if forloop.last == false %}
        	  {{ tag }},
          {% else %} 
            {{ tag }}. 
          {% endif %}
        {% endfor %}
        </p>
        <a href="{{ post.url }}" class="btn-lg btn-default" role="button">Read</a> 
      </div>
  </div>
</div>
{% endfor %}