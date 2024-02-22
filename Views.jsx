import { TableBody,TableContainer,Table,TableCell,TableRow,TableHead } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Views = () => {
        var[x,setX]=useState([])
        useEffect(()=>
        {
          axios.get('http://localhost:4000/students').then((response)=>{
          console.log(response)
          setX(response.data)
        })
        .catch((error)=>console.log(error))},[])
        
  return (
    <div><br /><br /><br /><br />
    <TableContainer >
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'orange',fontFamily:'cursive',fontSize:'20pt'}}>Name

                    </TableCell>
                    <TableCell style={{color:'orange',fontFamily:'cursive',fontSize:'20pt'}}>Age

                    </TableCell>
                    <TableCell style={{color:'orange',fontFamily:'cursive',fontSize:'20pt'}}>department

                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {x.map((value,i)=>{
                    return (
                        <TableRow>
                        <TableCell> {value.name}</TableCell>
                        <TableCell>{value.age}</TableCell>
                        <TableCell>{value.department}</TableCell></TableRow>
                    )
                })}
                </TableBody></Table></TableContainer></div>
  )
}

export default Views