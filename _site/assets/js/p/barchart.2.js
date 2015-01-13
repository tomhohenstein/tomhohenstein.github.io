var obj = []

$( document ).ready(function (){

//Show values on the x-axis, and categories on the y-axis. 
//Make x-axis a linear scale and y-axis an ordinal scale. 

	

	//load data from json file 
	d3.json("/projects/barchart-2/data.json", function(error, data){
		// send any errors to the console
		if(error) return console.warn(error);

		//for outside access 
		obj = data; 

		console.log(data); 

		//set widths, heights, and margins
		var width = $("article").width(),
		height = 500,
		margin = {top: 40, right: 40, bottom: 40, left:40}
		inWidth = width - margin.right - margin.left, //inner width
		inHeight = height - margin.top - margin.bottom; //inner height

		// set x axis scale 
		// should be linear scale 
		var x = d3.scale.linear()
					.domain(0, d3.max(data, function(d){ return d.Quantity }))
					.range([0, inWidth]);

		console.log(x);

		/*
		//set y axis scale
		//should be ordinal scale 
		var y = d3.scale.ordinal()
					.domain(data.map(function(d){ return d.fruits }))
					.range([0, inHeight]); 			

		console.log(y);
*/
	});//end d3.json
}); // .ready() 