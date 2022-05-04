import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...dataPointValue);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    maxValue={maxValue}
                    value={dataPoint.value}
                />
            ))}
        </div>
    );
};
export default Chart;
