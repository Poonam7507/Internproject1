import React from 'react'
import './Css/Frontpage.css'
import { useState } from 'react'
export default function Frontpage() {
    const [style1, setStyle1] = useState(true);
    const [style2, setStyle2] = useState(true);
    const [style3, setStyle3] = useState(true);
    const hover1=()=>{
        setStyle1(false);
        
    }
    const hover2=()=>{
        setStyle2(false);
        
    }
    const hover3=()=>{
        setStyle3(false);
        
    }
    const out=()=>{
        setStyle1(true);
        setStyle2(true);
        setStyle3(true);

    }
  return (
    <>
        <div className='title1'>
            <h1>Your gateway to Product Industry</h1>
        </div>
        <div className='ellipse1'>

        </div>
        <div className='intro'>
            <p className='text'>
            A new kind of internet university – one that is focused on helping you build a network, learn new skills and build the right mindset.
            </p>
            <p className='intro_box'>
        Deep down into Courses
        </p>
        </div>
        <div className='arrow1'>

        </div>
        <div className='title2'>

<div className='duration'>
IN 12 WEEKS
</div>
<div className='what_to_learn'>
 Here is what you'll learn and become!
</div>
</div>
        <div className='learning_box'>
                <div className='box' onMouseEnter={hover1} onMouseLeave={out}>
                <div className='rect'></div>
                <div>

<h2 >Product Design</h2>
    <p style={{color:style1?"black":"white"}}>You’ll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions.</p>
</div>
                    <div className='btn' style={{color:style1?"black":"black"}}>Insight</div>
                </div>
                <div className='box'  onMouseEnter={hover2} onMouseLeave={out}>
                <div className='rect'></div>
                <div>

<h2>Product Design</h2>
    <p style={{color:style2?"black":"white"}}>You’ll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions.</p>
</div>
                    <div className='btn' style={{color:style2?"black":"black"}}>Insight</div>

                </div>
                <div className='box'  onMouseEnter={hover3} onMouseLeave={out}>
                <div className='rect'></div>
                <div>

                <h2>Product Design</h2>
                    <p style={{color:style3?"black":"white"}}>You’ll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions.</p>
                </div>
                    <div className='btn' style={{color:style3?"black":"black"}}>Insight</div>

                </div>
            </div>
        <div className='ellipse2'>
            
            </div>
        <div className='ellipse3'>
            
            </div>
        <div className='ellipse4'>
            
            </div>
        <div className='ellipse5'>
            
            </div>
        <div className='ellipse6'>
            
            </div>
         
            {/* <div className='learning_box'>
                <div className='box'>
                <div className='rect'></div>
                <div>

<h2>Product Design</h2>
    <p>You’ll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions.</p>
</div>
                    <div className='btn'>Insight</div>
                </div>
                <div className='box'>
                <div className='rect'></div>
                <div>

<h2>Product Design</h2>
    <p>You’ll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions.</p>
</div>
                    <div className='btn'>Insight</div>

                </div>
                <div className='box'>
                <div className='rect'></div>
                <div>

                <h2>Product Design</h2>
                    <p>You’ll learn from the best in the design industry; join Dan Mall and the former hiring manager at Google, for live and interactive sessions.</p>
                </div>
                    <div className='btn'>Insight</div>

                </div>
            </div> */}
       
    </>
  )
}
