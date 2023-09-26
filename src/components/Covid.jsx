import React, { useEffect, useState } from 'react'
import './Covid.css'

const Covid = () => {

  const [data, setData]=useState([]);

  const getCovidData= async ()=>{
    try{
        const res=await (await fetch('https://data.covid19india.org/data.json')).json();
        
        console.log(res.statewise[0]);
        setData(res.statewise[0]);
        
    }
    catch(err){
      console.log(err);
    }
  }
     useEffect(()=>{
         getCovidData()
     },[])

  return (
    <>
    <div className='maindiv'>
    <div className='uperdiv'>
      <h1>Live</h1>
      <h2>COVID-19 CORONAVIROUS TRACKER</h2>
      </div>
<div className='box'>
<div className="custom-box">
  <h1>India Country</h1>
</div>
<div className="custom-box">
  <h5>Recoverd</h5>
  <h1>{data.recovered}</h1>
</div>
<div className="custom-box">
<h5>Confirmed</h5>
  <h1>{data.confirmed}</h1>
</div>
</div>
<div className='box'>
<div className="custom-box">
<h5>Deaths</h5>
  <h1>{data.deaths}</h1>
</div>
<div className="custom-box">
<h5>Active</h5>
  <h1>{data.active}</h1>
</div>
<div className="custom-box">
<h5>Time</h5>
  <h1>{data.lastupdatedtime}</h1>
</div>
</div>
</div>   
    </>
  )
}

export default Covid
