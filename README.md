angular-checkbox-switch
=======================

Small AngularJS module to convert regular checkboxes into iOS style switches, using the technique from this codepen: http://codepen.io/BandarRaffah/pen/ibwje

Usage
-----

1. import checkbox-switch.css and checkbox-switch.js into your page
2. include the module into your angular app:

``` 
var myApp = angular.module("myApp", ["cbSwitch"]);
```

3. Apply the directive to your checkboxes:

```
<input type="checkbox" cb-switch ng-model="myvalue" />
