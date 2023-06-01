// import React from 'react'
import './WorkCardStyles.css'
import { NavLink } from 'react-router-dom'

// import proo from '../assets/project1.png'
// import { NavLink } from 'react-router-dom'
// import WorkCard from './WorkCard'
// import WorkCardData from './WorkCardData'
import ProjectCardData from './WorkCardData'
function Work() {
  return (
    <div className='work-container' id='project'>
        <h1 className='project-heading'>Project</h1>
        <div className="project-container">
          {ProjectCardData.map((val) =>(
              <div key={val.id} className='project-card'>
                  <img src={val.img} alt="" />
                  <h2 className='project-title'>{val.title}</h2>
                  <div className='pro-details'>
                   {val.text.map((texts)=>(
                    <span className='pro-text'>{texts}</span>
                   ))}
                  </div>
                  <div className='pro-btns'>
                      <NavLink to={val.source} className='btn'>Source</NavLink >
                      <NavLink to={val.view} className='btn'>View</NavLink>
                  </div>

              </div>
          ))}
        </div>

    </div>
  )
}

export default Work