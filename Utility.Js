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

 /* To insert a string including special characters in the given index of other string
    function insert
    @param - inputValue, string to insert between other string
    @param - index,  indix on which string needs to be inserted
    return - final string, after insert of the string on given position
 */
     String.prototype.insert = function (inputValue, index) {
    	    if (index > 0) return this.substring(0, index) + inputValue + this.substring(index, this.length);
    	    else return inputValue + this;
    	};
    	
 /* To delete given item from an array	 
    @param - array from which value to be deleted
    @param - value which needs to be deleted from the given array
    return - array after deletion of the value
    */
    function deleteItemFromArray(ArrayValue, value) {
        for (item in ArrayValue) {
            if (ArrayValue[item] == value) {
                ArrayValue.splice(item, 1);
                break;
            }
        }
        return ArrayValue;
    }    
/* Remove duplicates from an array/object
    @param - array/boject fwhich may have duplicate value
    return - array/object after removal of duplicates
*/
    function removeDuplicates(dupArr) {
        var uniqueArr = [];
        $.each(dupArr, function (i, el) {
            if ($.inArray(el, uniqueArr) === -1) uniqueArr.push(el);
        });
        return uniqueArr;
    }

 /* To check if an item exists in an array/object 
    @param - array in which value is to be found
    @param - value which needs to be searched
    return - boolean true/false if item present/absent
    */
    
    function searchItemInArray(ArrayValue, value) {
        var itemPresentFlag = false;
        for (item in ArrayValue) {
            if (ArrayValue[item] == value) {
                itemPresentFlag = true;
                break;
            }
        }
        return itemPresentFlag;
    }
  /* To show the lists meeting search criteria
    @param - string to Search
    @param - list id on which string to be search
    return - void
    */   
    function searchStoryInList(storyStr,listId){
        var myTag = "#"+listId;
         $(" "+myTag+" > li").each(function() {
            if ($(this).text().search(new RegExp(storyStr, "i")) > -1) {
                $(this).slideDown();
            }
            else {
                $(this).slideUp();
            }
        });
    }
