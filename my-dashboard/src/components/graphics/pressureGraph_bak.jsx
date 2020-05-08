import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import _ from 'lodash';
//var Chart = require('chart.js');

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: 30,
    margintop: 20,
    height: 500    
  };
const myLabs = ["Day1", "Day2", "Day3", "Day4", "Day5"];
const myDats = [4.5, 5.0, 6.0, 3.1, 5.6];
const myChartData = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0,0,100,0);
    //console.log(this.chartReference);
    return{
    labels: myLabs,
    datasets: [
      {
        label: "Graph for Pressure data recorded",
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
        data: myDats,
        backgroundColor: gradient
      }
    ]
  }
  };

  let barChart;
  let newLabels = ["Label1", "Label2", "Label3"];
  let newData = ["Data1", "Data2", "Data3"];

  var lineoption = {
    showLines: true
  };
  let canvas = document.getElementById("myChart1");
  var linedata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [65, 59, 80, 0, 56, 55, 40],
        }
    ]
};

/*var myLineChart = new Chart(canvas,{
  type:'line',
	data:linedata,
  options:lineoption
});

function addLineData(){
  //console.log('hi')
	myLineChart.data.datasets[0].data.push(Math.random());
  myLineChart.data.labels.push("Newly Added");
  myLineChart.update();
}*/ 

  class pressureGraph extends Component {
      //state = {  }

      constructor(props) {
        super(props);
        this.state = {counter:5, labels:  ["Day1", "Day2", "Day3", "Day4", "Day5"], data: [4.5, 5.0, 6.0, 3.1, 5.6]};
        this.chartReference = React.createRef();
        this.barChartRef = null;
      }
      
      createBarChart = (labels, data) => {

        let ctx = document.getElementById("bar_l1_chart").getContext('2d');
        // this.barChartRef.destroy();
        //console.log(this.barChartRef);
        if (this.barChartRef == null)
        {
            barChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Sentiment',
                        data: data,
                    }]
                },
            });
          this.barChartRef = barChart;
          console.log(this.barChartRef.data.labels);
        }        
        else
        {
          console.log(this.barChartRef.data);
          this.barChartRef.data.labels = _.takeRight(labels,5);
          console.log(this.barChartRef.data.datasets[0]);
          this.barChartRef.data.datasets.forEach((dataset) => {
            dataset.data = _.takeRight(data,5); });
          this.barChartRef.update();
        }

    };

      componentDidMount() {
        const updatePressure = () => {
          this.setState({counter:this.state.counter+1});
          const {counter, labels, data} = this.state;
            //this.setState({labels: data+1});
            //alert(pressure_prev)
           //this.setState();
            //this.setState({data : [7.1,7.5,8.1,8.5,9]});
            const str = "Day" + `${counter}`;

            labels.push(str);
            data.push(100*Math.random());
            //const new_data = this.state.data;
            //this.setState({data: data});
            this.createBarChart(labels, data);
            //this.setState(TEST_DATA);
        };
    
        //updatePressure();
        
        this._interval = window.setInterval(updatePressure, 5000); // <- Five seconds. One hour would be 3600000 ms
      }

      componentWillUnmount() {
        this._interval && window.clearInterval(this._interval);
      }
        
      addData(chart, label, data) {
        //const {labels, dataset} = chart.data
        console.log(chart.data);
        chart.data.labels.push(label);
        chart.datasets.forEach((dataset) => {
           dataset.data.push(data);
        });
        //chart.update();
    }



      render() { 
        //data.labels = this.state.labels;
        //data.data = this.state.data;
        //this.addData(this.barChartRef,"DayNew",this.state.counter);
          return ( 
            <div style={styles}>
                <Line ref={this.chartReference} data={myChartData} />
                
                <p>{this.state.counter}</p>
                <p>{this.state.labels}</p>
                <p>{this.state.data}</p>
                <div> <canvas id="bar_l1_chart" width="400" height="400"></canvas> </div>
                
            </div>
           );
      }
  }
   
  export default pressureGraph;