import { TableBody, TableContainer, Table, TableCell, Button, TableRow, TableHead } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Adds from './Adds'

const Views = () => {
    var [edit, selectEdit] = useState(false);
    var [selected, setSelected] = useState({});
    var [x, setX] = useState([])
    const deleteperson = (id) => {
        axios.delete("http://localhost:4000/students/" + id).then(() => {
            alert("deleted row");
            window.location.reload();
        })
            .catch(() => {
                alert("could not delete row");
            });
    }
    const editperson = (id) => {
        axios.get("http://localhost:4000/students/" + id).then((response) => {
            setSelected(response.data);
            selectEdit(true);
        }).catch(() => {
            alert("Cannot Edit");
        });
    }
    useEffect(() => {
        axios.get('http://localhost:4000/students').then((response) => {
            console.log(response)
            setX(response.data)
        })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div><br /><br /><br /><br />
            {edit ? (<Adds method="Put" data={{ id: selected._id, name: selected.name,age:selected.age,department:selected.department}} />) : (
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: 'orange', fontFamily: 'cursive', fontSize: '20pt' }}>Name

                                </TableCell>
                                <TableCell style={{ color: 'orange', fontFamily: 'cursive', fontSize: '20pt' }}>Age

                                </TableCell>
                                <TableCell style={{ color: 'orange', fontFamily: 'cursive', fontSize: '20pt' }}>department

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {x.map((value, i) => {
                                return (
                                    <TableRow>
                                        <TableCell> {value.name}</TableCell>
                                        <TableCell>{value.age}</TableCell>
                                        <TableCell>{value.department}</TableCell>
                                        <TableCell><Button variant='contained' onClick={() => {
                                            deleteperson(value._id);
                                        }} color="error">DElete</Button></TableCell>
                                        <TableCell><Button onClick={() => {
                                            editperson(value._id);
                                        }} color="error">Edit</Button></TableCell>


                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}

export default Views