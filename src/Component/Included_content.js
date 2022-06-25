import React from 'react'
import Card2 from './Card2'
import './Css/Included.css'
import './Css/Card2.css'

export default function Included_content() {
    const array=[
        {
        id:1,
        design:"Product Design",
        about:"You'll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions."
    },
        {
        id:2,
        design:"Product Design",
        about:"You'll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions."
    },
        {
        id:3,
        design:"Product Design",
        about:"You'll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions."
    },
        {
        id:4,
        design:"Product Design",
        about:"You'll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions."
    },
        {
        id:5,
        design:"Product Design",
        about:"You'll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions."
    },
        {
        id:6,
        design:"Product Design",
        about:"You'll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions."
    },
]
  return (
    <>

    <div className='included_content'>
             <div className='container1'>
                <h3 className='text'>WHAT'S INCLUDED</h3>
                <h2 className='heading'>An immersive and interactive learning experience</h2>
             </div>
             <div className='container2'>
             {array.map((array,id)=>{
                  return <Card2 key={id}
                  design={array.design}
                  about={array.about}
                  />
             })}
             </div>
    </div>
    </>
  )
}
