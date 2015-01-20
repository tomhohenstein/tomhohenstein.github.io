//doc id: 1AYQEvhZciSQ5sKdG5La-eTQrVLLco-Y33YvCdk5sL6Y

document.addEventListener('DOMContentLoaded', function() {
   	var URL = "1AYQEvhZciSQ5sKdG5La-eTQrVLLco-Y33YvCdk5sL6Y";
  		Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } );
  	})
/*
function showInfo(data) {
  console.log("in showInfo"); 
  console.log(data); 
  console.log(data[0].area); 
  var x = Sheetsee.getGroupCount(data, "Value");
  console.log(x); 
}
*/

  function showInfo(data) {
  	console.log(data); 
  	console.log(data[0].area); 
    var tableOptions = { 
    					"data": data, 
    					"pagination": "all", 
    					"tableDiv": "#data",
    					"filterDiv": "#filter"
    					}
    Sheetsee.makeTable(tableOptions);
  }

