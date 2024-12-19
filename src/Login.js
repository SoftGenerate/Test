import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './assests/back.jpg';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const onSubmit = (data) => {
    console.log('Login Data:', data);

    if (data.email === 'test@example.com' && data.password === 'password123') {
      console.log('Login successful');
      toast.success('Login successful!', { autoClose: 2000 });
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect after showing success message
    } else {
      toast.error('Invalid email or password', { autoClose: 1500 });
    }
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: 3,
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
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
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('password', { required: 'Password is required' })}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end" aria-label="toggle password visibility">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <Typography mt={2} align="center">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
