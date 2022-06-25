import React from 'react'
import Card1 from './Card1'



export default function Weeklycontent() {
    const arr=[
        {   id:1,
            week:"Week One",
            start:"Getting Started",
            line1:"Breaking the ice and meeting your classmates",
            line2:"Getting to know your instructor",
            line3:"Introduction to UX and UI design",
            line4:"What is the design thinking process",
            line5:"The double diamond approach"
        },
        {   id:2,
          week:"Week One",
          start:"Getting Started",
          line1:"Breaking the ice and meeting your classmates",
          line2:"Getting to know your instructor",
          line3:"Introduction to UX and UI design",
          line4:"What is the design thinking process",
          line5:"The double diamond approach"
      },
      { id:3,
        week:"Week One",
        start:"Getting Started",
        line1:"Breaking the ice and meeting your classmates",
        line2:"Getting to know your instructor",
        line3:"Introduction to UX and UI design",
        line4:"What is the design thinking process",
        line5:"The double diamond approach"
    },
      { id:4,
        week:"Week One",
        start:"Getting Started",
        line1:"Breaking the ice and meeting your classmates",
        line2:"Getting to know your instructor",
        line3:"Introduction to UX and UI design",
        line4:"What is the design thinking process",
        line5:"The double diamond approach"
    },
      { id:5,
        week:"Week One",
        start:"Getting Started",
        line1:"Breaking the ice and meeting your classmates",
        line2:"Getting to know your instructor",
        line3:"Introduction to UX and UI design",
        line4:"What is the design thinking process",
        line5:"The double diamond approach"
    },
      { id:6,
        week:"Week One",
        start:"Getting Started",
        line1:"Breaking the ice and meeting your classmates",
        line2:"Getting to know your instructor",
        line3:"Introduction to UX and UI design",
        line4:"What is the design thinking process",
        line5:"The double diamond approach"
    }
    ]
  return (
    <>
    <div className='product'>
         {arr.map((arr,id)=>{
          return <Card1 key={id}
          week={arr.week} start={arr.start} 
          line1={arr.line1}
          line2={arr.line2}
          line3={arr.line3}
          line4={arr.line4}
          line5={arr.line5}
/>
           
            
            
            
          })}
        
          <div className='expand'>Expand All</div>
    </div>

    </>
  )
}
