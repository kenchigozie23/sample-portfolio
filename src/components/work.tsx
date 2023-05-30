import React from 'react'
import './WorkCardStyles.css'
import proo from '../assets/project1.png'
import { NavLink } from 'react-router-dom'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
function Work() {
  return (
    <div className='work-container' id='project'>
        <h1 className='project-heading'>Project</h1>
        <div className="project-container">
          {WorkCardData.map((WorkCardData) =>{
            return(
               <div key={WorkCardData.id}>
                <div className='project-card'>
                  <img src={WorkCardData.imgsrc} />
                </div>
                <h2 className='project-title'>{WorkCardData.title}</h2>
                <div className='pro-details '>

                  {WorkCardData.text.map((text)=>(
                    <h2>{text}</h2>
                  ))}
                </div>

               </div>              
            )
          })}
        </div>

    </div>
  )
}

export default Work