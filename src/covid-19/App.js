import React, { useEffect, useState } from 'react';
import {} from 'react-bootstrap';
import  './App.css';

function App() {
  const [data, setData]=useState([]);
  const getCovidData=async()=>{
    try{
      const res=await fetch('https://api.covid19india.org/data.json');
      const result = await res.json();
      console.log(result.statewise[0]);
      setData(result.statewise[0]);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getCovidData();
  },[]);

  return (
    <div className="App">
      <header className="App-header ">
        <div className="heading">
          <h1>Covid-19 <span className="india"> india </span></h1>
          <span>Last Updated Time :- {data.lastupdatedtime}</span>
        </div>
        <div className="card border1">
            <p >Recovered</p>
            <h1>{data.recovered}</h1>
        </div>
        <div className="card border2">
            <p>Confirmed</p>
            <h1>{data.confirmed}</h1>
        </div>
        <div className="card border3">
            <p >Active</p>
            <h1>{data.active}</h1>
        </div>
        <div className="card border4">
            <p >Deaths</p>
            <h1>{data.deaths}</h1>
        </div>       
      </header>
    </div>
  );
}



export default App;
