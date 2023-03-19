import React from 'react'

import Header from '../components/Header'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { margin, Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {
  return (
    <div>
    <Header />
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 900,
        height: 700,
        background: "#222",
        margin: "auto",
        marginTop: "50px",
        padding: "50px"
    }}
    >
        <Paper elevation={3} />
        <Stack
        direction="row" spacing={2}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Stack>

    </Box>

    </div>
  )
}

export default Home