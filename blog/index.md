---
layout: default
title: Blog
css: blog-list
---
<div class="blog-wrapper col-md-6 col-md-offset-3">
  <h1 id="blog-title">My Posts</h1>
  {% for post in site.posts %}
  <div class="blog-list row">
    <div>
        <a href="{{ post.url }}">
          <span class="date-holder">{{ post.date | date: "%b. %e, %Y" }}</span>
        </a>
        <div class="caption">
          <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
          <p> {{ post.excerpt | remove: '<p>' | remove: '</p>' }} </p>
          <p>Tags: 
          {% for tag in post.tags %}
            {% if forloop.last == false %}
          	  {{ tag }},
            {% else %} 
              {{ tag }} 
            {% endif %}
          {% endfor %}
          </p>
        </div>
    </div>
  </div>
  {% endfor %}
</div>