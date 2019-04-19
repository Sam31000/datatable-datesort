A way to sort dates in an easy way with different cultures
==================

Little function convert date to an easy sortable string.

Very usefull when you use a JS datatable with different cultures and sortable columns with dates. 


Setup
==================

The only thing you have to do to set up the function is to include dateToSortableItem.js to your project.

Example :
```html
  <script type="text/javascript" src="dateToSortableItem.js"></script>
```



Content
==================

The file "dateToSortableItem.js" contain only one classe "Position" and one function "dateToSortableItem".




Usage
==================
```javascript
dateToSortableItem("MM/DD/YYYY hh:mm", "04/02/2014 15:47");
````

Will return "201404021547"



So if you want to compare this date to a french format date
you have to do this :

```javascript
dateCompareResult = dateToSortableItem("MM/DD/YYYY hh:mm", "04/02/2014 15:47") > dateToSortableItem("DD/MM/YYYY hh:mm", "02/04/2014 15:47");
```

