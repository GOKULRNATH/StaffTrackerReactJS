import React, { useEffect, useState } from 'react'
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import {useNavigate, Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function Emp() {
  const navigate=useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [getempdata,setGetempdata]=useState(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("emp") || '[]');
    return storedEmployees;
  });
  const handleDeleteEmployee = async (empIndex) => {
    const confirm=window.confirm('Do you want to delete ')
    if(confirm)
    {
      const updatedEmployees  =  getempdata.filter((_, index) => index !== empIndex);//adding != values
    await setGetempdata(updatedEmployees);
    await localStorage.setItem('emp', JSON.stringify(updatedEmployees));
    toast("Data Deleted successfully")
  }
};
  //store data
  useEffect(() => {
    localStorage.setItem('emp', JSON.stringify(getempdata));
    console.log(getempdata)
  }, [getempdata]);
  //search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = getempdata.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className='d-flex justify-content-center align-items-center main'>
      <div className="emp_main_div">
      <label className='head_main'>Employee details</label>
      <div className="search_div">
      <input type='search' placeholder='Search here...' className='searchbar shadow' onChange={handleSearch} value={searchTerm}/>
      </div>
        <div className="main_table">
        <div className='main_table d-grid'>
            <div className="table_main_div">
                <div className='sub_col' id="subcolspecial">Name</div>
                <div className='sub_col' id="subcolspecial">Email</div>
                <div className='sub_col' id="subcolspecial">Job Title</div>
                <div className='sub_col' id="subcolspecial">Age</div>
                <div className='sub_col' id="subcolspecial">Phone</div>
                <div className='sub_col' id="subcolspecial">Action</div>
                {/* <div className='sub_col'><a href="/addemp">add employee</a></div> */}
            </div>
            {/* //MAP */}
            {filteredEmployees.map((view,index)=>{
              return (
                <div className="table_main_div" key={view.id}>
                  <div className='sub_col'>{view.name}</div>
                  <div className='sub_col'>{view.email}</div>
                  <div className='sub_col'>{view.job}</div>
                  <div className='sub_col'>{view.age}</div>
                  <div className='sub_col'>{view.phone}</div>
                  <div className='sub_col'><GrEdit onClick={()=>{navigate(`/editemp?id=${index}`)}}/>&nbsp;&nbsp;<MdDelete onClick={()=>handleDeleteEmployee(index)}/></div>
                </div>)

            })}
            
        </div>
        </div>
      </div>
      <Link to="/addemp" className='ADD_PHOTO'>Add Employee</Link>
    </div>
  )
}

export default Emp
