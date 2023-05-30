
import "./index.css"
import Home from './routes/Home'
import Project from './routes/Project'
import Contact from './routes/Contact'
import About from './routes/About'
import { Route, Routes } from 'react-router-dom'

export default function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </>
  )
}