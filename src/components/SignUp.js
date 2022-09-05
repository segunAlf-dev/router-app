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
    <Box  sx={{
          width: 500,
          height: 400,
          display: 'flex',
          // justifyContent: 'center',
          // alignContent: 'center',
          p: 13,
          ml: 68,
          mt: 10,
          bgcolor: ' rgb(236, 242, 242)',
          borderRadius: 2,
    }}>
          <form onSubmit={handleSubmit(onSubmit)} id='login_form'>
              <h1 id='login_header'>Register</h1>
              <div>
                   <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
            sx={{minWidth: 245 }}
        />
                  <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
            sx={{minWidth: 244 }}
        />
        </div>
       
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
            sx={{minWidth: 490 }} type='submit'>Login</Button>
     </form>
  
    </Box>
  )
}
