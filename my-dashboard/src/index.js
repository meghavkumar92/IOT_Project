import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

//import Counter from './components/counter';
import Members from './components/members';
import Temperature from './components/temperature';
import Pressure from './components/pressure';
import { Grid } from '@material-ui/core';
import Humidity from './components/humidity';

import TempGraph from './components/graphics/temperatureGraph';
import PressureGraph from './components/graphics/pressureGraph';

import Products from './components/product';
import logo from './hsrw.png';




ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <App /> */}
    {/* <Members/> */}
    <div className = 'container' >
    

    <div>
            <img src={logo} alt="logo"/>
            <header className="header"> 
                <p>Live monitoring of Humidity, Temperature and Pressure using Raspberry Pi</p>
            </header>
    </div>
    <hr></hr>
    <div className="theme.spacing(4)">
    <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Temperature/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Pressure/>
        </Grid>
        <Grid item lg={3} sm={6} xl={3}  xs={12} >
          <Humidity/>
        </Grid>
      </Grid>
      </div>
      <div className='container'>
        <div className= 'row'>
      <div className= 'col-4'><TempGraph/> </div>
      <div className= 'col-4'><PressureGraph/></div>
      <div className= 'col-4'><TempGraph/></div>
      </div>
      </div>
      <div><Products/></div>
      {/* <div>
          <canvas id="myChart1" width="400" height="250"></canvas>
          <input type="button" value="Add Data" onClick="addLineData()"></input>
      </div> */}
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
