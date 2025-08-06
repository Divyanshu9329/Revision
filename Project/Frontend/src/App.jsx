import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import { Outlet, Route, Routes } from 'react-router-dom';
import StudentHome from './student/StudentHome';
import FacultyHome from './faculty/FacultyHome';
import AdminHome from './admin/AdminHome';
import HodHome from './hod/HodHome';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentQueries from './student/StudentQueries';

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

      <Route path='/student' element={<RoleCheckRoute checkrole="student" />}>
        <Route path='home' element={<StudentHome/>}/>
        <Route path='queries' element={<StudentQueries/>}/>
      </Route>

      <Route path='/faculty'  element = {<RoleCheckRoute checkrole='faculty' />}>
        <Route path='home' element={<FacultyHome/>}/>
      </Route>

      <Route path='/admin'  element = {<RoleCheckRoute checkrole='admin' />}>
        <Route path='home' element={<AdminHome/>}/>
      </Route>

      <Route path='/hod'  element = {<RoleCheckRoute checkrole="hod" />}>
        <Route path='home' element={<HodHome/>}/>
      </Route>
    </Routes>
  </>
}

function RoleCheckRoute({checkrole}){
  const user = useSelector(store=>store.userInfo.value);
  // console.log(user);
  // console.log(user.role);
  
 if(user.islogin){
    if(user.role === checkrole)
      return <Outlet/>
    else
      return <Navigate to={`/${user.role}/home`}/>
  }
  else{
    return <Outlet/>
  }
}