const dataset = [25, 60, 50, 1, 100 ];

let bars = d3.select("body").selectAll("p")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", (d) => (d * 3 + "px"));

bars.append("text")
	.text((d) => (d))
	.style('display','none');

//first event listener
bars.on("mouseenter", function(d, i){
	bars = d3.select(this);
	bars.select('text')
		.style('display','block');
})