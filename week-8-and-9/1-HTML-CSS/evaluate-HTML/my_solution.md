## Evaluate a Website! 
 
1) How does this website follow HTML Best Practices? Are there any places where 
it does not?  Provide examples of the "bad" code.
```
for the most part this website follows html best practices. However there are some areas that include
some bad practices. An example of bad practices include:
-use of inline styling
```

```html
<table border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
```
```
-not using h1-h6 headers

```
```
-including inline js
```
``` javascript
function byId(id) {
  return document.getElementById(id);
}

function vote(node) {
  var v = node.id.split(/_/);   // {'up', '123'}
  var item = v[1];

  // hide arrows
  byId('up_'   + item).style.visibility = 'hidden';
  byId('down_' + item).style.visibility = 'hidden';

  // ping server
  var ping = new Image();
  ping.src = node.href;

  return false; // cancel browser nav
  ```

2) What do you think of the HTML? Did the writers use IDs and Classes properly? 
```
I think that the writers used IDS and Classes very well. Considering the simplicity of the website,
there wasn't much need for too many different Ids and Classes, yet their css was still very
all encompassing.
````
Did you like the way they used HTML tags?  Please use examples with your arguments.
 ```
 I thought that the way they used html tags was a little bit confusing because everything was encompassed using the tr tag. 
 it felt like it was overused. for example from lines 67 to line 862 was all enclosed inside of a single tr tag.
 ```

3) How did the authors handle formatting? Did they include it in the HTML or 
separate it into a CSS file? Or did they do both?  Again, include examples.

 ```
 the authors formatted by using a sperate css file, but for some tables they used inline formatting.
 ```

 ```html
 <table width="100%" cellspacing="0" cellpadding="1">
 <td bgcolor="#ff6600"></td>
 ```


4) Did the authors include anything you didn't immediately understand? 
If so, what?

```
one of the first things i didnt understand immediately was the javascript that they used.
```
 

5) How did the authors organize the CSS file? Was it DRY?
```
The css file was well organized, but it could have been more DRY. For example, the font-family
for almost all of the css was verdana, but they named it in almost every style.
```
 
6) Did the authors incorporate any responsive design into the site?
 ```
 in terms of html and css, there doesnt seem to be very responsive design.
 ```
7) What are your overall thoughts on the HTML/CSS from this website based on 
what you've read?
```
I think that the css and html in this site are very simple, and therefore very minimalistic.
in terms of html it was a bit confusing since most of the code is contained in one tag.
```