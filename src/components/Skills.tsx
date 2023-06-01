import './SkillsStyle.css'
import {BsPatchCheckFill} from 'react-icons/bs'


function Skills() {
  return (
    <div className='main_container'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>HTML</h4>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>CSS</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>JAVASCRIPT</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>REACT</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>BOOTSTRAP</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>NEXT JS</h4>
                    </article>
                </div>
            </div>
            <div className="experience_backend">
            <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>Node js</h4>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>Express.js</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>Mongo Db</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>Rest Apis</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>Firebase</h4>
                    </article> <article className='experience_details'>
                        <BsPatchCheckFill className='icon'/>
                        <h4>Python</h4>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills