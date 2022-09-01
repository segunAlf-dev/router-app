import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
// import '../App.css';
// import  SignUp  from '../components/SignUp';

 const NavBar = () => {

  return (
    <Box className='box' sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Router App
          </Typography>
                
                     <Button color="inherit"><Link to='/' id='home'>Homepage  </Link></Button>
               
               
                      <Button color="inherit"> <Link to='/SignUp' id='sign_up'>Sign Up  </Link></Button>
               
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar
