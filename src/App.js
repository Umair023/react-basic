import React from 'react'
import Covid from './components/Covid'
import Cards from './components/netflixComponent/Cards'
import './App.css'
import Sdata from './Sdata'
import Slot from './components/slotMachineGameComponent/Slot'
import IncNumber from './components/increamentNumber/IncNumber'
const App = () => {
  let curDate=new Date();
  let greeting="";
  let mycolor={}
      curDate=curDate.getHours();
      console.log('get hours',curDate);
      if(curDate > 1 && curDate<12){
        greeting='Good Morning';
        mycolor.color='Blue';
      }
      else if(curDate>=12 && curDate<18){
        greeting='Good AfterNoon';
        mycolor.color='rgba(52, 152, 219, 0.8)';
      }
      else{
        greeting='Good Night';
        mycolor.color='Yellow';
      }
      // for netflix series
     function ncard(val){
      return(
        
        <Cards
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        btnsrc={val.btnsrc}
        cardtitle={val.ctitle}/>
      )
      
     }

  return (
    <>
      <div className='mytopdiv'>
       <h1> Hello Sir,<span style={mycolor}>{greeting}</span></h1>
        </div>
      <Covid/> 
      <div className='mytopdiv'><h1>Netflix series</h1> </div>
  <div className='netflixCard'>  
   {Sdata.map(ncard)}
   <Slot/>         
  </div>
  <IncNumber/>
    </>
  )
}

export default App
