import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import './SignUp.css';

export const SignUp = () => {
       const {register, handleSubmit, formState: { errors }} = useForm();
       const onSubmit = (data) => 
        console.log(data)
    

  return (
    <Box id='box'>
          <form onSubmit={handleSubmit(onSubmit)} id='login_form'>
              <h1 id='login_header'>Welcome</h1>
              <div>
                   <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
                  <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
        </div>
       
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          {...register('email', {required: true})}
          sx={{minWidth: 450 }}
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register('password', {required: true, minLength: 8})}
          sx={{minWidth: 450 }}
        />
          {errors.password && <p>Invalid Password</p>}
            <Button variant="contained"  
            sx={{minWidth: 445 }} type='submit'>Login</Button>
     </form>
  
    </Box>
  )
}
