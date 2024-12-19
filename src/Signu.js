

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import backgroundImage from  './assests/back.jpg';

const Signu = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Signup Data:', data);
    };

    return (
      <Container 
      maxWidth={false} // Full width container for background image
      disableGutters // Removes padding from the container
  >
      <Box 
          sx={{
              height: '100vh', // Full viewport height
              backgroundImage: `url(${backgroundImage})`,  // Replace with your image URL
              backgroundSize: 'cover', // Ensures the image covers the whole area
              backgroundPosition: 'center', // Centers the background image
              backgroundRepeat: 'no-repeat', // Prevents repeating the image
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
          }}
      >
          <Box 
              sx={{
                  width: '100%',
                  maxWidth: 400, // Control the width of the form
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for readability
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 3
              }}
          >
              <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                  <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register('name', { required: 'Name is required' })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                  />
                  <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register('email', { required: 'Email is required' })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                  />
                  <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register('password', { required: 'Password is required' })}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                  />
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                      Sign Up
                  </Button>
                  <Typography mt={2} align="center">
                      Already have an account? <Link to="/login">Login</Link>
                  </Typography>
              </form>
          </Box>
      </Box>
  </Container>
    );
  } 

  export  default Signu ;