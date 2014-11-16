---
layout: default
title: About
---
##A list of blog posts

{% for post in site.posts %}
<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img data-src="holder.js/300x300" alt="...">
      <div class="caption">
        <h3>{{ post.title }}</h3>
        <p> {{ post.excerpt | remove: '<p>' | remove: '</p>' }} </p>
        <a href="{{ post.url }}" class="btn btn-primary" role="button">Read</a> 
      </div>
    </div>
  </div>
</div>
{% endfor %}