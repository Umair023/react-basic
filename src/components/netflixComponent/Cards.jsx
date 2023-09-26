import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <>
    
      
        <div className='card'>
            <img src={props.imgsrc} alt="mypic" srcSet="" className='card_img' />
            <div className='card_info'>
                <span className='card_category'>{props.title}</span>
                <h3 className='card_title'>{props.cardtitle}</h3>
                <a href={props.btnsrc} target="_blank" rel="noopener noreferrer">
                    <button>Watch Now</button>
                </a>
            
        </div>
      </div>
    </>
  )
}

export default Cards
