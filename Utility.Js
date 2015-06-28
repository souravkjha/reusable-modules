/* To format the date function 
    function formattedDate
    @param - date to format
    @param - separator on which Month, day and year should be separated(i.e.  '-')
    return - formatted date having month, day and year mentioned
*/
function formattedDate(date, separator) {
    var d = new Date(date || Date.now()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [month, day, year].join(separator);
}
