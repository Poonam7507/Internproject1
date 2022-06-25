import React from 'react'
import './Css/Weeklycontent.css'
export default function Card1({week,start,line1,line2,line3,line4,line5}) {
  return (
    <>
   
    <div className='weekly_material' style={{color:"black"}}>
              <div className='box1'>  <h3>{week}</h3></div>
               <div className='box2'>

               <h2>{start}</h2>
               </div> 
               <div className='box3'>
               <li>{line1}</li>
                 <li>{line2}</li>
               <li>{line3}</li>
               <li>{line4}</li>
                <li>{line5}</li>

               </div>
             </div>
            
    </>
  )
}
