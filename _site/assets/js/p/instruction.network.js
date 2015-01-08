//canvas size 
var width = $("#svg").width(),
    height = 500,
    radius = 6, //used for bounding box 
    data;

//add svg to dom 
var svg = d3.select("#svg").append("svg")
    .attr("width", width)
    .attr("height", height);

//load node json file
d3.json("/projects/instruction-network/node.json", function(error, nodes){
	if(error) return console.warn(error);
	//load edge json file
	d3.json("/projects/instruction-network/edge.json", function(error, links){
		if(error) return console.warn(error);
		//links are the json file 
		var force = d3.layout.force()
	        .size([width, height]) //size
	        .gravity(0.3) //gravity
	        .charge(function(node){
                if(node.label == "faculty"){
                    return -15
                } else {
                    return -8000; 
                }
            }) //charge between elements
	        .linkStrength(0.5) // link strength, rigidity 
	        .nodes(nodes) // adds nodes
	        .links(links); // adds links 
	    //set the link distance 
	    force.linkDistance(15);
	    //enable dragging of nodes
	    var drag = force.drag()
    		.on("dragstart", dragstart);
	    //draw links first
	    var link = svg.selectAll('.link')
			.data(links)
			.enter().append('line')
			.attr('class', 'link');
		//draw nodes - issue with x, y 
		var node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('circle')
			.attr('class','node')
			.style('fill',function(d) {return d.color})
			.style('stroke',function(d) {return d.color})
			.attr('r',function(d) {return d.size})
			.attr('class', function(d) {return d.label})
            .on("mouseover", mouseover)
            .on("mouseout", mouseout)
			.call(drag);
            //.on("dblclick", dblclick)
            //.on("click", click)

		//turn force on and sent function for each tick
		force.on('tick', function(){
			//update node location
		  	node.attr('cx', function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
		       .attr('cy', function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });
		    //update link location
		    link.attr('x1', function(d) { return d.source.x; })
		        .attr('y1', function(d) { return d.source.y; })
		        .attr('x2', function(d) { return d.target.x; })
		        .attr('y2', function(d) { return d.target.y; });
		});

        //force functions 
        function dragstart(d) {
          d3.select(this).classed("fixed", d.fixed = true);
        }

        function mouseover(d) {
            console.log("mouseover"); 
            console.log(d.label); 
            d3.select(this).style("fill", "blue")
                            .style("stroke", "blue");
            link.style('stroke', function(l) {
                if (d === l.source || d === l.target)
                  return "blue";
                else
                  return "#191919";
            });
        }

        function mouseout(d){
            console.log("mouseout"); 
            console.log(d.label); 
            d3.select(this).style("fill",function(d) {return d.color})
                    .style("stroke",function(d) {return d.color});
            link.style('stroke', "#191919"); 
        }

		force.start(); 
	});
});