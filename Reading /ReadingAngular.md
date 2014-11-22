# Angular
## Function
---
### angular.module
a global place for creating, registering, and retrieving Angular modules.

ex
`var myModule = angular.module('myModule')`

### angular.extends
destination object dst by copying own enumerable properties for the src objects to dst

ex
`angular.exted(dst, src);`

### angular.copy
creates a deep copy of source, which should be an object or an array

ex
`andgular.copy(source, destination);`

### angular.element
Wraps a raw DOM element or HTML string as a jQuery element

ex
`angular.element(element);`

## Directive
---
### ngApp
auto-bootstrap an Angular application only can have one tag for an application. Placed on the 'body' or 'html' tags

ex
`<body ng-controller='ngAppNamehere'>`

### ngBind
tells Angular to replace the text content of the specified HTML element with the value of a give expression and to update the text content when the value of that expression changes.

ex
`<span ng-bind='name'`

### ngClass
allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

ex
`<p ng-class="{strike: deleted, bold: important, red:error}">`

### ngClick
allows you to specify custom behavior when an element is clicked

ex
`<button ng-click='count = count+1'`
### ngController
attaches a controller class to the view, very important to the Angular Model.

ex
`ng-controller = 'settingsController1 as settings'`

### ngDblclick
allows you to specify custom behavior when an element is double clicked.

ex
`<button ng-dbclick="count = count + 1">`

### ngForm
used to group controls but not a replacement for the form tag

ex
`<ng-form [name]> </ng-form>`

### ngKeyup
Specify custom behavior on a keyup event like a button press

ex
`<input ng-keyup="count = count + 1>"`

### ngModel
binds an input, selection, textarea, to a property on the scope using NgModelController

ex
`<script> <'ExampleController'> <form ng-sontroller='ExampleController'>`

### ngRepeat
instantiates a template once per item from a collection.

ex
`<header ng-repeat-start='item in items'>`

### ngSubmit
Enables binding angular expressions to onsubmit event

ex
`<form ng-submit="submit()">`