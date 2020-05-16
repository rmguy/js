4/22/20: Html, css, js
===

5 weeks/modules/topics
* Intro
* DOM/GAME
* Geolocation/Music
* GAME classes
* Objects/JSON

[Codepen](codepen.io)

4/23/20
===

Introduction:    

* HTML's predecessor is SGML
* Markup separated from content via tags
* Syntax: <> for meta information

HTML is for structure, CSS is for look/feel (shadows, borders, bg colors etc)

### HTML 

Tags, Attributes and Elements
Tags are things like img, src etc
* <ul><li></li></ul>
Elements are complete tags + content
Void elements: following '/' is optional. 
Attributes are inside tags, like width and height

### CSS

CSS has rules. 
'p' or 'h1' is a selector for all ps and h1s
',' is a multiply selector for several elements
`id` and `class` are special attributes for uniqueness and grouping

ids match selectors with 
```
id="foo" 
#foo {}
```
And classes match selectos with 
```
class="bar"
.bar {}
```
The selector can use linked in fonts
```
  <link href="https://fonts.googleapis.com/css?family=Caveat"
        rel="stylesheet">
```
The `href` of a link can also point to a local `.css` file with style rules


### Javascript

Interactivity by modifying the DOM through onClick
```
var title = document.getElementById("title"):
// changes the element's style attributes, or directly its innerHTML
title.style.color = "black";
title.innerHTML = "foobar";
```

Standardized by ECMA 
