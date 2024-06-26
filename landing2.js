document.addEventListener('DOMContentLoaded', function () {
    var data1 = [
        {
            name: "Total Waste Generation", fill: "#8D9196", children: [
                {
                    name: "Recyling", fill: "#00BF63", children: [
                        { name: "Plastic", value: plasticBaseSize },
                        { name: "Paper", value: paperBaseSize },
                        { name: "Cardboard", value: cardboardBaseSize },
                        { name: "Metal", value: metalBaseSize },
                    ]
                },
                {
                    name: "General Waste", fill: "#545454", children: [
                        { name: "Nappies", value: nappiesBaseSize },
                        { name: "Fines", value: finesBaseSize },
                    ]
                },
                {
                    name: "Organic Waste", fill: "#745D3B", children: [
                        { name: "Garden Waste", value: gardenWasteBaseSize },
                        { name: "Food Waste", value: foodWasteBaseSize },
                    ]
                },
                {
                    name: "Bring Centre", fill: "#FFC001", children: [
                        { name: "Textiles", value: textilesBaseSize },
                        { name: "Weee", value: weeeBaseSize },
                        { name: "Hazardous Waste", value: hazardousWasteBaseSize },
                        { name: "Glass", value: glassBaseSize }
                    ]
                },
                {
                    name: "Contamination", fill: "#FF3131", value: contaminationBaseSize
                }
            ]
        }
    ];


    data1[0].children.forEach(category => {
        if (category.name === "Bring Centre") {
            category.children.forEach(child => {
                child.isBringCentre = true;
            });
        }
    });
    var sunburstChart = anychart.sunburst(data1, "as-tree");
    sunburstChart.labels().useHtml(true);
    sunburstChart.labels().useHtml(true);
    sunburstChart.labels().format(function () {

        var name = this.name;
        var value = this.value;
        var color = (name === "Bring Centre" || this.getData('isBringCentre')) ? 'black' : 'white';


        return `<span style='font-size:12.5px; color: ${color};'>${name}<br>${value}kg</span>`;
    });

    sunburstChart.labels().position("circular");

    sunburstChart.selected().fill(sunburstChart.normal().fill());
    sunburstChart.tooltip().format("{%name}");
    sunburstChart.calculationMode("parent-independent");
    sunburstChart.tooltip().useHtml(true);
    sunburstChart.tooltip().format(function () {
        // customises tooltip title and content with HTML, including font size
        return '<div style="font-size: 1rem; font-weight: bold;">' + this.name + '</div>' +
            '<div style="font-size: 0.75rem;">' + this.value + 'kg per person</div>';
    });


    sunburstChart.container('circleChart');
    sunburstChart.background().fill("none");

    sunburstChart.draw();

    var data2 = ([
        { x: "General Waste", value: 59, fill: "#545454" },
        { x: "Recycling", value: 23, fill: "#00BF63" },
        { x: "Organic Waste", value: 18, fill: "#745D3B" },
        { x: "Bring Centre", value: 0, fill: "#FFC001" }
    ]);

    var data3 = ([
        { x: "General Waste", value: 18, fill: "#545454" },
        { x: "Recycling", value: 30, fill: "#00BF63" },
        { x: "Organic Waste", value: 39, fill: "#745D3B" },
        { x: "Bring Centre", value: 13, fill: "#FFC001" }
    ]);
    var barChart1 = anychart.column(data2);
    var barChart2 = anychart.column(data3);

    barChart1.title().useHtml(true);
    barChart1.title("<span style='font-size: 20px;color: #FFFFFF;'>Where is it going?</span><br/><span style='font-size: 8.5px; color: #FFFFFF;'>Actual segregation of <br/>household kerbside waste</span>");
    barChart1.xAxis().labels().fontSize(7.5);
    barChart1.yAxis().labels().fontSize(12.5);
    barChart1.barGroupsPadding(0.2);
    var series1 = barChart1.getSeriesAt(0);
    series1.normal().stroke(null);
    barChart1.yScale().minimum(0);
    barChart1.yScale().maximum(65);
    barChart1.container('barChart1');
    barChart1.background().fill("none");
    barChart1.tooltip().titleFormat("");
    barChart1.tooltip().useHtml(true);
    barChart1.tooltip().format(function () {

        return '<div style="font-size: 1rem; font-weight: bold;">' + this.x + '</div>' +
            '<div style="font-size: 0.75rem;">' + this.value + '%</div>';
    });
    barChart1.draw();

    barChart2.title().useHtml(true);
    barChart2.title("<span style='font-size: 20px;color: #FFFFFF;'>Where should it go?</span><br/><span style='font-size: 8.5px; color: #FFFFFF;'>If household kerbside waste <br/>was segregated properly</span>");

    barChart2.xAxis().labels().fontSize(7.5);
    barChart2.yAxis().labels().fontSize(12.5);
    barChart2.barGroupsPadding(0.2);
    var series2 = barChart2.getSeriesAt(0);
    series2.normal().stroke(null);
    barChart2.yScale().minimum(0);
    barChart2.yScale().maximum(65);
    barChart2.container('barChart2');
    barChart2.background().fill("none");
    barChart2.tooltip().titleFormat("");
    barChart2.tooltip().useHtml(true);
    barChart2.tooltip().format(function () {

        return '<div style="font-size: 1rem; font-weight: bold;">' + this.x + '</div>' +
            '<div style="font-size: 0.75rem;">' + this.value + '%</div>';
    });
    barChart2.draw();


});