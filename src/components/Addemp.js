import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastContainer, toast } from 'react-toastify';
import {useNavigate, Link} from 'react-router-dom'


import './Addemp.css'
function Addemp() {
  const navigate=useNavigate()
        const [Addemp,setAddemp]=useState({
            name:"",
            email:"",
            job:"",
            phone:"",
            age:""
        })
        // data get usestate
        const [getempdata,setGetempdata]=useState(() => {
          const storedEmployees = JSON.parse(localStorage.getItem("emp") || '[]');
          return storedEmployees;
        });
        const onchangesubmitt=(a)=>{
            setAddemp({...Addemp,[a.target.name]:a.target.value})
            console.log(Addemp)
        }
        
        const onsubmitt=(e)=>{  
          e.preventDefault()
          setGetempdata([...getempdata,Addemp])
          console.log(Addemp)
          // window.location.reload(false)
          alert("Data Added Successfuly") 
          // navigate("/")
        }
        useEffect(() => {
          localStorage.setItem('emp', JSON.stringify(getempdata));
        }, [getempdata]);
  return (
    <div className='main_div_reg d-flex justify-content-center align-items-center'>
      <div className="container">
        <form onSubmit={onsubmitt}>
            <div className="head_reg d-flex justify-content-center"><span className='head_reg'>Add Employee</span></div>
            <div className="input_boxs_main_div">
                <div className="input_box_div"><input type='text' name='name' placeholder="Name :" className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='email' placeholder='Email :' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='job' placeholder='Job Title :' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='phone' placeholder='Phone no :' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='age' placeholder='Age:' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_button_div"><input type='submit' value="Submit" className='submit_reg bg-primary text-white'/></div>
                {/* <Link to="/">Login</Link> */}
            </div>

        </form>
      </div>
    </div>
  )
}

export default Addemp
