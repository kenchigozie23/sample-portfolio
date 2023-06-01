
import './WorkCardStyles.css'

import { NavLink } from 'react-router-dom'

interface myProps{

  title: string;
  text: string;
  source: string;
  view: string;
  img: string;


}
function WorkCard(props: myProps) {
  return (
    <div className="project-card">
    <img src={props.img} alt="img" />
    <h2 className='project-title'>{props.title}</h2>
    <div className="pro-detail">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} className='btn'>View</NavLink>
            <NavLink to={props.source} className='btn'>Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard