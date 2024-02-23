import React from 'react'
import { AppBar,Toolbar,Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><AppBar>
    <Toolbar>
        <Typography sx={{flexGrow:1}} align='left' variant='h6'>College</Typography>
        <Button>
              <Link to={'/Adds'} style={{color:'white'}}>Add Student</Link>
            </Button>
            <Button>
              <Link to={'/Views'} style={{color:'white'}}>View Student</Link>
            </Button></Toolbar></AppBar></div>
  )
}

export default Navbar