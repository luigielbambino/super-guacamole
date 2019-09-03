/*var dataArray = [
    {Month: "enero", qty: 0},
    {Month: "febrero", qty: 0},
    {Month: "marzo", qty: 419},
    {Month: "abril", qty: 1160},
    {Month: "mayo", qty: 994},
    {Month: "junio", qty: 1063},
    {Month: "julio", qty: 1044},
    {Month: "agosto", qty: 1266},
    {Month: "septiembre", qty: 956},
    {Month: "octubre", qty: 899},
    {Month: "noviembre", qty: 655},
    {Month: "diciembre", qty: 607},
];

var widthBar = 350;
var heightBar = 650;

var canvas = d3.select("#bars")

var padding = {top:20, right:30, bottom:30, left:50};

var chartArea = {
                "width": parseInt(canvas.style("width"))-padding.left-padding.right,
                "heigh": parseInt(canvas.style("height"))-padding.top-padding.bottom
};

var yScale = d3.scaleLinear()
              .domain([0, d3.max(dataArray, function(d, i){return d.qty})])
              .range([chartArea.height, 0])
              .nice();

var xScale = d3.scaleBand()
              .domain(dataArray.map(function(d){return d.Month}))
              .range([0, chartArea.width])
              .padding(.2);

var xAxis = canvas.append("g")
                    .classed("xAxis", true)
                    .attr("transform", "translate('+padding.left+', '+chartArea.height+ padding.top+')")
                    .call(d3.axisBottom(xScale));

var yAxisFn = d3.axisLeft(yScale);
var yAxis = canvas.append("g")
                    .classed("yAxis", true)
                    .attr("transform", "translate('+padding.left+', '+padding.top+')");
yAxisFn(yAxis);*/

var dataArray = [
    {Month: "enero", qty: 0},
    {Month: "febrero", qty: 0},
    {Month: "marzo", qty: 419},
    {Month: "abril", qty: 1160},
    {Month: "mayo", qty: 994},
    {Month: "junio", qty: 1063},
    {Month: "julio", qty: 1044},
    {Month: "agosto", qty: 1266},
    {Month: "septiembre", qty: 956},
    {Month: "octubre", qty: 899},
    {Month: "noviembre", qty: 655},
    {Month: "diciembre", qty: 607},
];

var widthBar = 340;
var heightBar = 650;
var widthScale = d3.scaleLinear()
                  .domain([0, d3.max(dataArray, function(d, i){return d.qty})])
                  .range([0, widthBar]);
var color = d3.scaleLinear()
            .domain([0, 600])
            .range(["#ffffff", "#F2F2F2"]);

var canvas = d3.select("#bars")
              .append("svg")
              .attr("width", widthBar)
              .attr("height", heightBar)
              .append("g")
              .attr("transform", "translate(5, 20)");

var bars = canvas.selectAll("rect")
            .data(dataArray)
            .enter()
            .append("g").attr("class", "bar");

bars.append("rect")
            .attr("width", function(d){return widthScale(d.qty);})
            .attr("height", 30)
            .attr("y", function(d, i) {return i * 40})
            .attr("fill", function(d){return color(d.qty);})
            .on("click",mouseclick)
bars.append("text")
            .text(function(d){
              var monthString = d.Month + " - " + d.qty + " €";
              return monthString
            })
            .attr("width", widthBar)
            .attr("height", 30)
            .attr("y", function(d, i) { return i * 40 + 20})
            .attr("x", 30)
            .attr("text-anchor", "left")
            .attr("class", "barText");


/*// Dimensions of bargraph.
var monthArray = [
    {Month: "enero", qty: 0},
    {Month: "febrero", qty: 0},
    {Month: "marzo", qty: 419},
    {Month: "abril", qty: 1160},
    {Month: "mayo", qty: 994},
    {Month: "junio", qty: 1063},
    {Month: "julio", qty: 1044},
    {Month: "agosto", qty: 1266},
    {Month: "septiembre", qty: 956},
    {Month: "octubre", qty: 899},
    {Month: "noviembre", qty: 655},
    {Month: "diciembre", qty: 607},
];
var widthBar = 500;
var heightBar = 680;

var barvis = d3.select("#bars").append("svg")
    .attr("width", 500)
    .attr("height", 720)

barvis.selectAll("rect")
        .data(monthArray)
        .enter()
          .append("rect")
          .attr("width", function(d){return d.Month * 10;})
          .attr("height", 30)
          .attr("y", function(d, i){return i * 50})
          .attr("fill", "blue")*/
