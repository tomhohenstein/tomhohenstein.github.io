
// for post on metricsgraphics.js 
(function() {
    console.log('here i am');

    d3.json('/assets/data/metricsGraphics-Demo1.json', function(data) {
	data = MG.convert.date(data, 'date');
	MG.data_graphic({
            title: "Tom's Copy and Paste Example",
            description: false,
            data: data,
            width: 600,
            height: 200,
            right: 40,
            target: document.getElementById('line-chart'),
            x_accessor: 'date',
            y_accessor: 'value'
	});
    });

    d3.json('/assets/data/dva.json', function(data) {
	data = MG.convert.date(data, 'date');
	MG.data_graphic({
            title: "Davita Stock by Volume",
            description: false,
            data: data,
	    area: false,
	    baselines: [{value: 2300000, label: 'goal?'}],
	    markers: [{ 'date': new Date('2017-03-06'),
			'label': 'G : )'},
		      { 'date': new Date('2016-12-22'),
		        'label': 'Wonk!'}],
	    color: '#f24848',
            width: 600,
            height: 200,
            right: 40,
            target: document.getElementById('dva-chart'),
            x_accessor: 'date',
            y_accessor: 'volume'
	});
    });
})(); 
