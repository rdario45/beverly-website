import { useEffect } from "react";
import CanvasJSReact from "../canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Resumen semana"
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}",
        dataPoints: []
    }]
}

function BalanceScreen({ fecha, balance, loadBalance }) {

    useEffect(() => {
        loadBalance(fecha);
    }, [fecha]);

    options.data[0].dataPoints = Object.entries(balance).map((value, b) => ({ "y": value[1], "label": value[0] }));

    console.log("dataPoints", options.data[0].dataPoints)

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    )
}

export default BalanceScreen;