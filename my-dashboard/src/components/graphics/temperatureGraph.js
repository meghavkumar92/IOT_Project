import React, { Component } from 'react';
import {Line} from "react-chartjs-2";

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: 30,
    margintop: 20,
    height: 500
    
  };

const data = {
    labels: ["Day1", "Day2", "Day3", "Day4", "Day5"],
    datasets: [
      {
        label: "Graph for Temperature data recorded",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "square",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [45, 50, 60, 31, 56]
      }
    ]
  };

  class TempGarph extends Component {
      //state = {  }
      render() { 
          return ( 
            <div style={styles}>
                <Line ref="chart" data={data} />
            </div>

           );
      }
  }
   
  export default TempGarph;