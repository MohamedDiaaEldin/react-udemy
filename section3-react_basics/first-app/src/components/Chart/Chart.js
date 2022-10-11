import ChartBar from "./ChartBar";

import "../../styles/Chart.css";

const Chart = ({ dataPoints }) => {    
    const maxValue = Math.max(...dataPoints.map(data => data.value))
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (        
        <ChartBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
