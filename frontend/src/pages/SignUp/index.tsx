import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signUpUser } from '../../features/Auth/auth.action';
import { toggleSuccess, toggleerror } from '../../features/Auth/auth.slice';

function SignUp() {
  const error = useAppSelector((state) => state?.auth?.error)
  const success = useAppSelector((state) => state?.auth?.success)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [name, setName] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [email, setemail] = React.useState<string>('')
  const [role, setRole] = React.useState<string>('Student')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      name: name,
      role: role
    }
    console.log('data: ', data);
    dispatch(signUpUser(data));
    setName('')
    setemail('')
    setPassword('')
  };
  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`)
      dispatch(toggleerror())
    }
  }, [error])

  useEffect(() => {
    if (success) {
      alert('SignUp success')
      dispatch(toggleSuccess())
      navigate('/');
    }
  }, [success])

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
          Sign up
        </Typography>
        <Box component="form"
          onSubmit={(event) => { handleSubmit(event) }}
          sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name='name'
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl  >
                <FormLabel id="demo-error-radios" sx={{ color: 'black' }}>Choose the role</FormLabel>
                <RadioGroup row
                  aria-labelledby="demo-error-radios"
                  name="role"
                  defaultValue="User"
                  // required
                  onChange={(e) => setRole(e.target.value)}
                >
                  <FormControlLabel value="Student" control={<Radio />} label="Student" />
                  <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                </RadioGroup>
              </FormControl>

            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Box component={'button'} onClick={() => {
              navigate('/login')
            }} sx={{ background: 'none', color: 'rgb(49, 99, 190)', border: 'none', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
              {"Already have an account? Sign In"}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default SignUp
