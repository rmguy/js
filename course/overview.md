4/28/20: External libs
===

Imports happen through html `<script>` tags
Direct function calls with objects
functionPlot(properties) in d3 js
```
properties = {
  data: [{fn: x^2}],
  target: some div in html and style in css (padding, size etc),
  yAxis: {domain: [1, 10]},
  xAxis: {domain: [-1. Math.pi*2]}
}
```

Location of libs
===

* `script, /script`
* `script src="js/foo.js"`
* `script src="url"`

Geolocation api 
===

Functions defined in browser 
Standard HTML5 apis for animation, geo, music etc
Current lat/long
Maps api takes lat/long

```
navigator.geolocation.getCurrentPosition(callBackFuntion);

function callBackFunction(pos) {
  console.log(pos.coords.latitude);
}
```

Outgoing calls 
===

```
fetch(encodeUri()).then();
```

Call out to remote server and format the results into a table on the fly.

TIP
===

* Create an empty div in the html to stick the results and retrieve in from js
with document.getElementById;

_Devtools_

* Console 

