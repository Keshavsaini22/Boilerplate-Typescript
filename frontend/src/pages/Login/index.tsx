import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { toggleerror } from '../../features/Auth/auth.slice';
import { loginUser } from '../../features/Auth/auth.action';

function Login() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const logged = useAppSelector((state) => state.auth.logged)
  const error = useAppSelector((state) => state.auth.error)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password
    }
    console.log('data: ', data);
    dispatch(loginUser(data));
  };
  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`)
      dispatch(toggleerror())
    }
  }, [error])

  useEffect(() => {
    if (logged) {  //due to this line main khabi bhi login vali state me nhi ja skda without logout
      navigate('/home')
    }
  }, [logged])
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"
          onSubmit={(e) => { handleSubmit(e) }}
          sx={{ mt: 1 }}>
          <TextField
            type='email'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Box component={'button'} onClick={() => {
              navigate('/signup')
            }} sx={{ background: 'none', color: 'rgb(49, 99, 190)', border: 'none', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
              {"Don't have an account? Sign Up"}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Login
