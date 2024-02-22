import React,{useState} from 'react'
import { Typography,Button,TextField } from '@mui/material';
import axios from 'axios';


const Adds = () => {var[data,setData]=useState();
  const inputHandler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
      console.log(data);
  } 
  const submit=()=>{

      axios.post("http://localhost:4000/students",{
        students_name:data.name,
        students_age:data.age,
        students_department:data.department
      }).then(()=>{
        alert("new entry created succesfully");
      }).catch(()=>{alert("error saving data");});
  }
   return (
  <div> <br /><br /><br /><br />
      <Typography variant='h3'>STUDENT DETAILS</Typography><br /><br />
      <TextField variant='outlined' label='name' name='name' onChange={inputHandler}></TextField><br /><br />
      <TextField variant='outlined' label='age' name='age' onChange={inputHandler}></TextField><br /><br />
      <TextField variant='outlined' label='department' name='department' onChange={inputHandler}></TextField><br /><br />
      
      <Button variant='outlined' onClick={submit} >submit</Button>

  </div>)
}

export default Adds