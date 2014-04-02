A way to sort date in an easy way with different cultures
==================

Little function to format date to an easy sortable string.



Setup
==================

The only thing to do to set up the function is to include dateToSortableItem.js to your project.

Example :
  <script type="text/javascript" src="dateToSortableItem.js"></script>
  



Content
==================

The file "dateToSortableItem.js" contain only one classe "Position" and one function "dateToSortableItem".




Usage
==================

dateToSortableItem("MM/DD/YYYY hh:mm", "04/02/2014 15:47");

Will return "201404021547"



So if you want to compare this date to a french format date
you have to do this :

dateCompareResult = dateToSortableItem("MM/DD/YYYY hh:mm", "04/02/2014 15:47") > dateToSortableItem("DD/MM/YYYY hh:mm", "02/04/2014 15:47");

