import React from 'react'
import { Container, TextField, Box, Button, Typography, styled } from '@mui/material';
import {Link} from "react-router-dom"


const Login = () => {
  return (
    <Container
    sx={{
        maxWidth: "500px",
        background: "#222",
        marginTop: "40px"
    }}
    >
        <Box
        sx={{
            padding: "25px 35px",
            display: "flex",
            flex: 1,
            overflow: "auto",
            flexDirection: "column"
        }}
        >
            <TextField sx={{marginTop: "20px"}} variant="standard"  name='username' label='Enter Username' />
        <TextField sx={{marginTop: "20px", marginBottom: "20px"}} variant="standard"   name='password' label='Enter Password' />
        <Button
        sx={{
            background: "#2e2e2e",
            height: "48px",
            borderRadius: "2px",
            width: "60%",
            margin: "auto",
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)"

        }}
        >
            Login
        </Button>
        <Typography style={{ textAlign: 'center', marginTop: "20px", marginBottom: "20px" }}>OR</Typography>
        <Button
        sx={{
            background: "#2e2e2e",
            marginTop: "20px",
            height: "48px",
            borderRadius: "2px",
            minWidth: "60%",
            margin: "auto",
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)"

        }}
        >
            <Link to="/Register">Sign Up</Link>
        </Button>
        </Box>
    </Container>
  )
}

export default Login