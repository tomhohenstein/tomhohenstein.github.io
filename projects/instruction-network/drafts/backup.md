<script>

//canvas size 
var width = 800,
    height = 500,
    data;

//add svg to dom 
var svg = d3.select("#svg").append("svg")
    .attr("width", width)
    .attr("height", height);


d3.json("in.json", function(error, links){
	if(error) return console.warn(error);
	
	//create nodes - a, b c, d, and e are librarians
	var nodes = [
			{
				"label": "A",
				"x": 250,
				"y": 400
			},
			{
				"label": "B",
				"x": 136,
				"y": 136
			},
			{
				"label": "C",
				"x": 147,
				"y": 147
			},
			{
				"label": "D",
				"x": 158,
				"y": 158
			},
			{
				"label": "E",
				"x": 169,
				"y": 1609
			}];
		
	// add faculty faculty nodes (1-159)
	for(i = 0; i<160; i++){
		nodes.push({
			"label": i,
			"x": i+2,
			"y": i+3
		}); 
	}
	//links are the json file 
	var force = d3.layout.force()
        .size([width, height])
        .nodes(nodes)
        .links(links);
    //set the link distance 
    force.linkDistance(3);
    //draw links first
    var link = svg.selectAll('.link')
		.data(links)
		.enter().append('line')
		.attr('class', 'link');

	//draw nodes - issue with x, y 
	var node = svg.selectAll('.node')
		.data(nodes)
		.enter().append('circle')
		.attr('class','node');

	var animating = false; 
	var animationStep = 400; 


	force.on('tick', function(){
		//use node attr cx and xy to animate and relocate nodes 
		node.transition().ease('linear').duration(animationStep)
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });
        //also update links 
        link.transition().ease('linear').duration(animationStep)
            .attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });
            
        force.stop();    

        if (animating) {
            setTimeout(
                function() { force.start(); },
                animationStep
            );
        } 
/*
	   node.attr('r', width/100)
	        .attr('cx', function(d) { return d.x; })
	        .attr('cy', function(d) { return d.y; })
	        .attr('id', function(d) {return d.label});

       link.attr('x1', function(d) { return d.source.x; })
	        .attr('y1', function(d) { return d.source.y; })
	        .attr('x2', function(d) { return d.target.x; })
	        .attr('y2', function(d) { return d.target.y; });
*/
	});
	force.start(); 
});


</script>