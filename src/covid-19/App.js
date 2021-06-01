import React, { useEffect, useState } from 'react';
import {} from 'react-bootstrap'
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
      <header className="App-header">
        <h1>Recovered :-  {data.recovered} </h1>
        <h1>Confirmed :- {data.confirmed} </h1>
        <h1> Active :- {data.active} </h1>
        <h1> Deaths :- {data.deaths} </h1>
        <h1> Last Updated Time :- {data.lastupdatedtime} </h1>
        
      </header>
    </div>
  );
}



export default App;
