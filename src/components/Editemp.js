import './Editemp.css'
import React, { useEffect, useState } from 'react'
import { GrEdit } from 'react-icons/gr';
import {useLocation} from 'react-router-dom'
import profileicon from './image/proficon.png'

import { ToastContainer, toast } from 'react-toastify';



function Profileuser() {
  //id featching
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  ////get data
  const [getempdata,setGetempdata]=useState(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("emp") || '[]');
    return storedEmployees;
  });
  const [Addemp,setAddemp]=useState({
    name:getempdata[id].name,
    email:getempdata[id].email,
    job:getempdata[id].job,
    phone:getempdata[id].phone,
    age:getempdata[id].age
})
const onchangehandle=(a)=>{
  setAddemp({...Addemp,[a.target.name]:a.target.value})
  console.log(Addemp)
}
  

  const submitt=(e)=>{
    e.preventDefault()
    const updatedEmployees = [...getempdata];
      updatedEmployees[id].name = Addemp.name;
      updatedEmployees[id].email = Addemp.email;
      updatedEmployees[id].job = Addemp.job;
      updatedEmployees[id].phone = Addemp.phone;
      updatedEmployees[id].age = Addemp.age;
     
      setGetempdata(updatedEmployees);
      toast("Data Updated successfully")
      localStorage.setItem('emp', JSON.stringify(updatedEmployees));
  }
  useEffect(() => {
    localStorage.setItem('emp', JSON.stringify(getempdata));
    console.log(getempdata)
  }, [getempdata]);
  return (
    <div className='main_user_profile'>
      <h5></h5>
        <label className='prof_user_head'>Edit Employee</label>
      <form className="container main_contain_usepro shadow-lg p-0" onSubmit={submitt}>
        <div className="col-5 main_col_profile">
          <img src={profileicon} className='profile_icon_user' alt='Add profile picture' />
          <div className=""><input type='text' name='name' value={Addemp.name}  className="input_box_prof" onChange={onchangehandle} /></div>
        </div>
        <div className="col main_col_profile">
            <div className="sub_main_input_div">
              <p className='m-0 text-red-500'>Email :</p>
              <input type='text' name='email'  value={Addemp.email} className="input_box_prof" onChange={onchangehandle}/>
              </div>
            <div className="sub_main_input_div">
              <p className='m-0'>Job Title :</p>
              <input type='text' name='job' value={Addemp.job} className="input_box_prof"  onChange={onchangehandle}/>
            </div>
            <div className="sub_main_input_div">
              <p className='m-0'>Phone no :</p>
              <input type='text' name='phone' value={Addemp.phone} className="input_box_prof" onChange={onchangehandle}/>
            </div>
            <div className="sub_main_input_div">
              <p className='m-0'>Age :</p>
              <input type='text' name='age' value={Addemp.age} className="input_box_prof" onChange={onchangehandle}/>
            </div>
            <div className="sub_main_input_div">
              <input type='Submit' className='bg-primary text-white' value='Update'/>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Profileuser
