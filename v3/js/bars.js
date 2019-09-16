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
