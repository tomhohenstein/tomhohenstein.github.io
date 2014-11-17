---
layout: default
title: Blog
---
##A list of blog posts

{% for post in site.posts %}
<div class="row">
  <div class="col-md-6">
  	<img alt="..." class="img-rounded" height="200" src="{{ site.baseurl }}/assets/img/{{ post.thumbnail }}" width="200" >
      <div class="caption">
        <h2>{{ post.title }}</h2>
        <p> {{ post.excerpt | remove: '<p>' | remove: '</p>' }} </p>
        <ul>
        {% for tag in site.tags %}
        <li>{{ post.tag }}</li>
        {% endfor %}
        </ul>
        <a href="{{ post.url }}" class="btn-lg btn-primary" role="button">Read</a> 
      </div>
  </div>
</div>
{% endfor %}