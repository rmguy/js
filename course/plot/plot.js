
function plot() {
    functionPlot({
        target: "#func",
        width: 500,
        height: 500,
        xAxis: {
            label: "x-axis",
            domain: [-6, 6]
        },
        yAxis: {
            label: "y-axis"
        },
        data: [{
            fn: document.getElementById("function").value,
            color: document.getElementById("color").value
        }]
    })
}
