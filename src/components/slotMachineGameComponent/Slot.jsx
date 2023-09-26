import React from 'react'
import './slot.css'


const SlotM=(props) =>{
  // let x=props.x;
  // let y=props.y;
  // let z=props.z;
  //   OR we can declare x y z that
  let{x, y, z}=props;

  if ((x===y) && (y===z)){
   return(
    <>
    <div className='slot_inner'>
      <h1>{x}{y}{z}</h1>
      <h3>This is Mathing.</h3>
    </div>
    
    </>
   )
  }
  else{
    return(
      <>
      <div className='slot_inner'>
        <h1>{x}{y}{z}</h1>
        <h3>This is not Mathing.</h3>
      </div>
      
      </>
     )
  }
}


const Slot = () => {
  return (
    <>
      <h1 style={{width:'100%', textAlign:'center'}}>🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot machine game</span> 🎰 </h1>
      <SlotM x='😄' y='😄' z='😄'/>
      <SlotM x='🍎' y='🍌' z='💖'/>
      <SlotM x='😃' y='🥰' z='😄'/>
    </>
  )
}

export default Slot
