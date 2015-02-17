d3.csv("dc.data.csv", function(csv){
	var data = crossfilter(csv);  
	//set dimension vars
	var question_half_hour = data.dimension(function (d){
			//console.log(d.question_half_hour)
			return d.question_half_hour; 
		}),
		question_weekday = data.dimension(function (d){
			return d.question_weekday; 
		}),
		location_name = data.dimension(function (d){
			return d.location_name; 
		}), 
		patron_type = data.dimension(function(d){
			return d.patron_type; 
		}), 
		time_spent = data.dimension(function(d){
			return d.time_spent;
		});

	//set group vars 
	var question_half_hour_group = question_half_hour.group().reduceCount(), 
		question_weekday_group = question_weekday.group().reduceCount(),
		location_name_group = location_name.group().reduceCount(), 
		patron_type_group = patron_type.group().reduceCount(),
		time_spent_group = time_spent.group().reduceCount();  

	var question_half_hour_chart = dc.barChart("#question_half_hour")
		.width($("#question_half_hour").width()) 
		.height(300)
		.margins({top:10, left:50, right:40, bottom:80})
		.dimension(question_half_hour)
		.group(question_half_hour_group)
		.label(function(d){ return d.key; })
		.colors(["rgb(49, 130, 189)"])
		.elasticY(true)
		.x(d3.scale.ordinal().domain(question_half_hour_group))
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(4);

	var question_weekday_chart = dc.rowChart("#question_weekday")
		.width(250) 
		.height(250)
		.margins({top:10, left:10, right:10, bottom:30})
		.dimension(question_weekday)
		.group(question_weekday_group)
		.label(function(d){ return d.key; })
		.title(function(d){ return d.value; })
		.renderTitle(true)
		.colors(["rgb(65, 174, 118)"])
		.elasticX(true)
		.xAxis().ticks(4);
	
	var location_name_chart = dc.pieChart("#location_name")
		.dimension(location_name)
		.group(location_name_group)
		.radius([100])
		.innerRadius([50])
		.colors(["#fdae61", "#ffffbf", "#abdda4", "#2b83ba", "#d7191c"])
		.legend(dc.legend().x(400).y(10).itemHeight(13).gap(5));
 
	var patron_type_chart = dc.rowChart("#patron_type")
		.width(250) 
		.height(250)
		.margins({top:10, left:10, right:10, bottom:30})
		.dimension(patron_type)
		.group(patron_type_group)
		.label(function(d){ return d.key; })
		.title(function(d){ return d.value; })
		.colors(["rgb(240, 182, 76)"])
		.elasticX(true)
		.xAxis().ticks(4);

	var time_spent_chart = dc.rowChart("#time_spent")
		.width(250) 
		.height(250)
		.margins({top:10, left:10, right:10, bottom:30})
		.dimension(time_spent)
		.group(time_spent_group)
		.label(function(d){ return d.key; })
		.title(function(d){ return d.value; })
		.colors(["rgb(242, 130, 110)"])
		.elasticX(true)
		.xAxis().ticks(4);

	dc.renderAll(); 

})
