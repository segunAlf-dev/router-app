import React from 'react';
import  { useForm } from 'react-hook-form';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';


const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => 
        console.log(data)
    

  return (
 <Box  sx={{
          width: 500,
          display: 'flex',
          // justifyContent: 'center',
          // alignContent: 'center',
          p: 13,
          ml: 68,
          mt: 10,
          bgcolor: ' rgb(236, 242, 242)',
          borderRadius: 2,


        
         
        }} >
     
        <form onSubmit={handleSubmit(onSubmit)} id='login_form'>
              <h1 id='login_header'>Welcome</h1>
                  
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          {...register('email', {required: true})}
          sx={{minWidth: 490 }}
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register('password', {required: true, minLength: 8})}
          sx={{minWidth: 490 }}
        />
          {errors.password && <p>Invalid Password</p>}
            <Button variant="contained"  
            sx={{minWidth: 490 }} type='submit'>Login</Button> <br />
            <span>Don't have an account? <Link sx={{color: blue, fontSize:'14px'}} to='/SignUp'> Sign Up </Link></span> 
           
        </form>
     
    </Box>
  )
}

export default Login