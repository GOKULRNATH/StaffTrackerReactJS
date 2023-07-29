import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastContainer, toast } from 'react-toastify';
import {useNavigate, Link} from 'react-router-dom'


import './Addemp.css'
import { toast } from 'react-toastify';
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
          toast("Data Added Successfuly") 
          setAddemp({ name:"",
            email:"",
            job:"",
            phone:"",
            age:""
        })
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
                <div className="input_box_div"><input type='text' pattern="[A-Za-z\s]+" title='Only Alphabet' name='name'value={Addemp.name} placeholder="Name :" className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='email' name='email' value={Addemp.email} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder='Email :' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='job'value={Addemp.job} title='Only Alphabet' pattern="[A-Za-z\s]+" placeholder='Job Title :' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='phone' title='Only Number must contain 10 digits' pattern="[0-9]{10}" value={Addemp.phone} placeholder='Phone no :' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_box_div"><input type='text' name='age'value={Addemp.age}  title='Only Number' pattern="[0-9]+" placeholder='Age:' className="input_box_reg" onChange={onchangesubmitt} required/></div>
                <div className="input_button_div"><input type='submit' value="Submit" className='submit_reg bg-primary text-white'/></div>
                {/* <Link to="/">Login</Link> */}
            </div>

        </form>
      </div>
    </div>
  )
}

export default Addemp
