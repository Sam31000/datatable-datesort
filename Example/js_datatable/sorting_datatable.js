$("#Table").dataTable({
 "aoColumns" :[
		{"sType": "@culture"}, // @culture is your culture variable (for this exemple it's "eu_date" or "us_date" depending of the user choose)
               ]
	});

//Here we convert eu date to sortable item using dateToSortableItem
jQuery.fn.dataTableExt.oSort['eu_date-asc'] = function (a, b) {
    x = dateToSortableItem('DD/MM/YYYY hh:mm', a);
    y = dateToSortableItem('DD/MM/YYYY hh:mm', b);
	
	return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};

jQuery.fn.dataTableExt.oSort['eu_date-desc'] = function(a, b) {
    x = dateToSortableItem('DD/MM/YYYY hh:mm', a);
    y = dateToSortableItem('DD/MM/YYYY hh:mm', b);
	
	return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
};

//Here we convert us date to sortable item using dateToSortableItem
jQuery.fn.dataTableExt.oSort['us_date-desc'] = function (a, b) {
    x = dateToSortableItem('MM/DD/YYYY hh:mm tt', a); 
    y = dateToSortableItem('MM/DD/YYYY hh:mm tt', b);

    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
};

jQuery.fn.dataTableExt.oSort['us_date-asc'] = function (a, b) {
    x = dateToSortableItem('MM/DD/YYYY hh:mm tt', a);
    y = dateToSortableItem('MM/DD/YYYY hh:mm tt', b);

    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};
