import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import StudentHome from './student/StudentHome';
import FacultyHome from './faculty/FacultyHome';
import AdminHome from './admin/AdminHome';
import HodHome from './hod/HodHome';

export default function App()
{
  return <>
    <Menu/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />

      <Route path='/student'>
        <Route path='home' element={<StudentHome/>}/>
      </Route>

      <Route path='/faculty'>
        <Route path='home' element={<FacultyHome/>}/>
      </Route>

      <Route path='/admin'>
        <Route path='home' element={<AdminHome/>}/>
      </Route>

      <Route path='/hod'>
        <Route path='home' element={<HodHome/>}/>
      </Route>
    </Routes>
  </>
}