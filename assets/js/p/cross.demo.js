var question_half_hour_chart = dc.barChart("#question_half_hour");
var question_weekday_chart = dc.rowChart("#question_weekday");
var location_name_chart = dc.pieChart("#location_name");
var patron_type_chart = dc.rowChart("#patron_type");
var time_spent_chart = dc.rowChart("#time_spent");

d3.csv("dc.data.csv", function(csv){
	var data = crossfilter(csv);  
	//set dimension vars
	var question_half_hour = data.dimension(function (d){
			//console.log(d.question_half_hour)
			return d.question_half_hour; 
		}),
		question_weekday = data.dimension(function (d){
			var day = d.question_weekday;
			if(day == "Sunday") return 0+"."+day;
			else if(day == "Monday") return 1+"."+day
			else if(day == "Tuesday") return 2+"."+day
			else if(day == "Wednesday") return 3+"."+day
			else if(day == "Thursday") return 4+"."+day
			else if(day == "Friday") return 5+"."+day
			else if(day == "Saturday") return 6+"."+day
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

	question_half_hour_chart
		.width($("#question_half_hour").width()) 
		.height(300)
		.margins({top:20, left:50, right:10, bottom:80})
		.dimension(question_half_hour)
		.group(question_half_hour_group)
		.label(function(d){ return d.key; })
		.colors(["rgb(49, 130, 189)"])
		.elasticY(false)
		.x(d3.scale.ordinal().domain(question_half_hour_group))
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(4);

	question_weekday_chart
		.width(250) 
		.height(250)
		.margins({top:10, left:10, right:10, bottom:30})
		.dimension(question_weekday)
		.group(question_weekday_group)
		.label(function(d){ return d.key.split(".")[1]; })
		.title(function(d){ return d.value; })
		.renderTitle(true)
		.colors(["rgb(65, 174, 118)"])
		.elasticX(true)
		.xAxis().ticks(4);	
	
	location_name_chart
		.radius([100])
		.innerRadius([50])
		.dimension(location_name)
		.group(location_name_group)
		.label(function(d){ return d.key; })
		.renderLabel(true)
		.colors(["#fdae61", "#ffffbf", "#abdda4", "#2b83ba", "#d7191c"])
		
	patron_type_chart
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

	time_spent_chart
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
	//add pie mouse events 
	d3.selectAll(".pie-slice path")
		.on("mouseover", function(d){ 
			var pie =d3.select("#location_name svg");
			pie.append("text")
   				.attr("text-anchor", "middle")
    			.attr("dy", ".35em")
    			.attr("x", $("#location_name svg").width()/2) 
    			.attr("y", $("#location_name svg").height()/2)
   				.attr("class", "center-text")
   				.text(d.value);
   			pie.append("text")
   				.attr("text-anchor", "middle")
    			.attr("dy", ".35em")
    			.attr("x", $("#location_name svg").width()/2) 
    			.attr("y", ($("#location_name svg").height()/2)-20)
    			.attr("class", "loc-text")
   				.text(d.data.key);
		})
		.on("mouseout", function(){
			$(".center-text").remove()
			$(".loc-text").remove()
		})
	//add row chart mouse events 
	var row = d3.selectAll("g.row")
		.on("mouseover", function(d){
			d3.select(this).select("text").attr("class", "hide");
			d3.select(this).append("text")
				.text(d.value)
				.attr("class", "rect-text")
				.attr("x", d3.select(this).select("rect").attr("width"))
				.attr("y", "15");			
		})
		.on("mouseout", function(){
			d3.select(this).select("text").classed("hide", false)
			$(".rect-text").remove();
		})
	//add bar chart mouse events 
	var bar = d3.selectAll(".bar")
		.on("mouseover", function(d){
			d3.select(".stack").append("text")
				.text(d.data.value)
				.attr("class", "bar-text")
				.attr("x", d3.select(this).attr("x"))
				.attr("y", +d3.select(this).attr("y"));	
		})
		.on("mouseout", function(){
			$(".bar-text").remove();
		})	
})