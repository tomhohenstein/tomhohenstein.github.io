---
layout: post
title: Learning Markdown 
number: 2 
tags: [[markdown]]
---

While I enjoy marking up text with HTML, it is in my interest to learn, and master, markdown. This post is a little playpen for me to learn and document learning markdowns. 

Resources: 

* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
* [Markdown Basics](https://help.github.com/articles/markdown-basics/) 
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


Let's start with some basics 

# Heading 1 ```# Heading 1```

## Heading 2 ```## Heading 2```

### Heading 3 ```### Heading 3```

#### Heading 4 ```#### Heading 4```

##### Heading 5 ```##### Heading 5```


### Text Basics

Now for a paragraph of text. I have written a few sentences of text. 
This is on a new line in my text editor, but it should be in the same paragraph. 

Text separated by an empty line will start a new paragraph. 

```
Text separated by an empty line will start a new paragraph.

```

An unordered list:

* item 
* item 
* item 

```
An unordered list:

* item 
* item 
* item 
```
Ordered list:
 
1. item 
2. item 
3. item 

```
Ordered list:
 
1. item 
2. item 
3. item 
```

And a nested list: 

1. item 
  * sub-item 
  * sub-item 
    1. sub-sub-item 
    2. sub-sub-item 
  * sub-item 
2. item 

```
And a nested list: 

1. item 
  * sub-item 
  * sub-item 
    1. sub-sub-item 
    2. sub-sub-item 
  * sub-item 
2. item 
```
*italic text* ```*italic text*```

**bold text** ```**bold text**```

Let's try to get a blockquote 

> You are here and the time is now

```
> You are here and the time is now
```

### Linking

[Tom's website](http://tomhohenstein.com)
```
[Tom's website](http://tomhohenstein.com)
```

### Code 

Basic syntax 

```	var tom = okay; 
```

We can also do `var this = inline` if we want. 

Declare a language (not working yet)

Python

```python
x = 0 
for x in this:
  do something 
```

JavaScript 

```javascript
if (here)
  return true; 
```