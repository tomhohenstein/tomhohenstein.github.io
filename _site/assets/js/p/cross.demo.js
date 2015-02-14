d3.csv("dc.data.csv", function(csv){
	var data = crossfilter(csv);  
	//set dimension vars
	var question_half_hour = data.dimension(function (d){
			return d.question_half_hour; 
		}),
		question_weekday = data.dimension(function (d){
			return d.question_weekday; 
		}),
		location_name = data.dimension(function (d){
			return d.location_name; 
		});
	
	//set group vars 
	question_half_hour_group = question_half_hour.group().reduceCount(); 
	question_weekday_group = question_weekday.group().reduceCount(); 
	location_name_group = location_name.group().reduceCount(); 

	var question_half_hour_chart = dc.rowChart("#question_half_hour")
		.width(700) 
		.height(900)
		.margins({top:10, left:10, right:10, bottom:30})
		.dimension(question_half_hour)
		.group(question_half_hour_group)
		.label(function(d){ return d.key; })
		.colors(d3.scale.category20c())
		.elasticX(true)
		.xAxis().ticks(4); 

	var question_weekday = dc.rowChart("#question_weekday")
		.width(300) 
		.height(500)
		.margins({top:10, left:10, right:10, bottom:30})
		.dimension(question_weekday)
		.group(question_weekday_group)
		.label(function(d){ return d.key; })
		.colors(["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"])
		.elasticX(true)
		.xAxis().ticks(4); 
	
	var location_name_chart = dc.pieChart("#location_name")
		.dimension(location_name)
		.group(location_name_group)
		.radius([100])
		.innerRadius([90])  
		.colors(["#fdae61", "#ffffbf", "#abdda4", "#2b83ba", "#d7191c"]);
 
	dc.renderAll(); 
})
