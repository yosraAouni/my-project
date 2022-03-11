import React from 'react'


import './Admin.css'

const Admin = () => {
   
    
    return (
        <div className='intrfAdmin'>
                <div className="container">
            <div className="card">
            <div className="box">
                <div className="content">
                <h2>01</h2>
                <h3>The List of workers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                <a href="/listworker">Read More</a>
                </div>
            </div>
            </div>
            <div className="card">
            <div className="box">
                <div className="content">
                <h2>02</h2>
                <h3>The List Of Day Off</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                
                <a href="/listleave">Read More</a>
                
                </div>
            </div>
            </div>
            <div className="card">
            <div className="box">
                <div className="content">
                <h2>03</h2>
                <h3>The List Of Advance</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                <a href="/listadvance">Read More</a>
                </div>
            </div>
            </div>
            <div>
            
            </div>
        </div>
        </div>
    )
    }

export default Admin