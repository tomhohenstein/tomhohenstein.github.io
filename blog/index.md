---
layout: default
title: About
---
##A list of blog posts

{% for post in site.posts %}
<div class="row">
  <div class="col-md-6">
  	<img alt="..." class="img-rounded" height="200" src="{{ site.baseurl }}/assets/img/{{ post.thumbnail }}" width="200" >
      <div class="caption">
        <h3>{{ post.title }}</h3>
        <p> {{ post.excerpt | remove: '<p>' | remove: '</p>' }} </p>
        <a href="{{ post.url }}" class="btn btn-primary" role="button">Read</a> 
      </div>
  </div>
</div>
{% endfor %}