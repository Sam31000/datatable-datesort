/**
 * Start and end position of an object in a string
 * @param {String} _name
 */
function Position (_name)
{
    var startPosition;
    var endPositions;
    var name;
    
    this.startPosition = -1;
    this.endPosition = -1;
    this.name = _name;
    
    
    this.toString = function (){
        return this.name + ' : ( ' + this.startPosition + ', ' + this.endPosition + ' )<br/>';
    }
}

/**
 * Convert a date to an easy sortable string
 * @param {String} dateFormat 
 * @param {String} date
 * @param {Array} Array of elements to parse in order of priority (The highest priority at the left) 
 * @return {String} Date fomatted for an easy sort
 */
function dateToSortableItem (dateFormat, date, dateElements)
{
    var dataToParse;
    var reformatedDate = '';
    var positions = new Array ();
    var currentData = '';
    
    //Set the priority of sorting
    if (!dateElements)
        dataToParse = ['Y', 'M', 'D', 't', 'h', 'm', 's',];
    else
        dataToParse = dateElements;
    
    for (key in dataToParse){
        currentData = dataToParse[key];
        
        positions[currentData] = new Position(currentData);
        positions[currentData].startPosition = dateFormat.indexOf(currentData);
        positions[currentData].endPosition = dateFormat.lastIndexOf(currentData);
        reformatedDate += date.substring (positions[currentData].startPosition,  positions[currentData].endPosition + 1)   
    }        
    
    return reformatedDate;
}

