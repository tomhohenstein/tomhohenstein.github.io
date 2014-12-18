---
layout: post
title: Jekyll - Custom Share Buttons
excerpt: Learn how to make custom share buttons use Jekyll
thumbnail: 
featured: true
shorturl: http://goo.gl/DzkdrT
tags: [[learning, Jekyll]]
---

As I continue building out this site, I thought it would be a good idea to write posts as I develop features and solve problems. This post is on how to build custom share buttons for posts and pages. 

## Resources
I found the following posts very useful on how to best use Jekyll to create custom share buttons for social media platforms: 

* [Wenli Zhang's](http://zhangwenli.com/) *[Make Your Own Social Shareing Bar with Jekyll](http://zhangwenli.com/blog/2014/08/03/make-your-own-social-sharing-bar-with-jekyll/)*
* [Scott N Decker's](http://scottndecker.com/Contact/) *[How to Make Custom Share Buttons with Jekyll](http://scottndecker.com/blog/2014/06/29/How-to-Make-Custom-Share-Buttons-with-Jekyll/)*
* Eric Lagergren's *[Dynamic Sharing for Jekyll](http://www.ericlagergren.com/blog/dynamic-sharing-buttons/)*

## Platforms and Tactics

As a relative newbee to creating social media share buttons, it is probably best to focus on only a few platforms, rather than create a "social media sharing kitchen sink." I am only going to focus on: 

* [Twitter](https://dev.twitter.com/web/tweet-button)
* [Facebook](https://developers.facebook.com/docs/sharing/reference/share-dialog)
* [LinkedIn's "official"](https://developer.linkedin.com/plugins/share-plugin-generator); and [the url way](https://developer.linkedin.com/documents/share-linkedin)
* [Google+](https://developers.google.com/+/web/share/)

The basic tactic is to use each platform's share via url feature. Each platform has buttons and other gadgets for sharing content, but I want to keep it simple and went with the simplest solution.  

### Twitter 

Before building a custom Twitter share link, it is important to review [Twitter's branding guidelines](https://about.twitter.com/press/brand-assets). 

```
{% raw %}
<!--the Twitter base 
    https://twitter.com/share --> 

<a href="https://twitter.com/share?
    text={{ page.title }}
    &url={{ page.shorturl }}
    &via=tomhohenstein">

    <!-- use the twitter logo for the link --> 
    <img alt="..." 
        class="footer-icon" 
        src="{{ site.baseurl }}/assets/img/footer-icons/Twitter_logo_blue.png">

</a>
{% endraw %}
```
Twitter example: <a href="https://twitter.com/share?text={{ page.title }}&url={{ page.shorturl }}&via=tomhohenstein"><img alt="..." class="footer-icon" src="{{ site.baseurl }}/assets/img/footer-icons/Twitter_logo_blue.png"></a>

### Facebook 

Again, here are the [branding guidelines for Facebook](https://www.facebookbrand.com/).

```
{% raw %}
<!--the Facebook base 
    https://www.facebook.com/dialog/share? --> 

<a href="https://www.facebook.com/dialog/share
    ?app_id=946372735391329&display=popup
    &href={{ site.url }}{{ page.url }}
    &redirect_uri={{ site.url }}{{ page.url }}">

    <!-- use the facebook logo for the link --> 
    <img 
        alt="..." 
        class="footer-icon" 
        src="{{ site.baseurl }}/assets/img/social-icons/FB-f-Logo__blue_50.png">
</a>
{% endraw %}
```
Facebook Example: <a href="https://www.facebook.com/dialog/share?app_id=946372735391329&display=popup&href={{ site.url }}{{ page.url }}&redirect_uri={{ site.url }}{{ page.url }}"><img alt="..." class="footer-icon" src="{{ site.baseurl }}/assets/img/social-icons/FB-f-Logo__blue_50.png">
</a>

### LinkedIn

Here are [LinkedIn's branding guidelines](https://developer.linkedin.com/documents/branding-guidelines).

```
{% raw %}
<!--the LinkedIn base url 
    http://www.linkedin.com/shareArticle?mini=true --> 

<a href="http://www.linkedin.com/shareArticle
    ?mini=true
    &url={{ site.url }}{{ page.url }}
    &title={{ page.title }}
    &source={{ site.title }}">

    <!-- use the linkedin logo for the link --> 
    <img alt="..." 
        class="footer-icon"
        src="{{ site.baseurl }}/assets/img/footer-icons/LinkedIn-InBug-2CRev.png">

</a> 
{% endraw %}
```
LinkedIn example: <a href="http://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ page.url }}&title={{ page.title }}&source={{ site.title }}&summary="><img alt="..." class="footer-icon" src="{{ site.baseurl }}/assets/img/footer-icons/LinkedIn-InBug-2CRev.png"></a> 

### Google+ 

Finally, the [Google+ branding guidelines](https://developers.google.com/+/branding-guidelines).

```
{% raw %}
<!--the Google+ link url; 
    base = https://plus.google.com/share? --> 

<a href="https://plus.google.com/share?
    url=http://tomhohenstein.com{{ page.url }}
    &hl=en-US" 
    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">

    <!-- use the google+ logo for the link --> 
    <img 
        alt="..." 
        class="footer-icon" 
        src="{{ site.baseurl }}/assets/img/social-icons/btn_white.png">
</a> 
{% endraw %}
```
Google+ Example: <a href="https://plus.google.com/share?url=http://tomhohenstein.com{{ page.url }}&hl=en-US" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img alt="..." class="footer-icon" src="{{ site.baseurl }}/assets/img/social-icons/btn_white.png"></a> 

## Final Product