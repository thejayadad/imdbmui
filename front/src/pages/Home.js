import React from 'react'
import { Container, TextField, Box, Button, Typography, styled } from '@mui/material';

import Header from '../components/Header'
import Paper from '@mui/material/Paper';
import { margin, Stack, } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import Transactions from '../components/Transactions';


const style = {
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    color: "#222",
    p: 4,
  };


const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
       <Box
       sx={{
        width: "100%",
        height: 20,
        background: "#555",
        padding: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex"

       }}
       >
        <Typography>Filter System



        </Typography>
        <Button
        onClick={handleOpen}
            sx={{
                background: "#fff"
            }}
        >New Transaction</Button>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography>Enter Information Below</Typography>

            <FormControl
            sx={{
                width: "100%"
            }}
            >
            <Typography>Amount</Typography>
            <TextField sx={{margin: "15px 10px", border: "1px solid #222"}} id="outlined-basic" label="Amount" variant="outlined" />
            <Select
            sx={{margin: "15px 10px", border: "1px solid #222"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Controlled"
                >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </Select>
        <Select
        sx={{margin: "15px 10px", border: "1px solid #222"}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Type"
        >
          <MenuItem value="income">Salary</MenuItem>
          <MenuItem value="expense">Tip</MenuItem>
          <MenuItem value="expense">Food</MenuItem>
          <MenuItem value="expense">Membership</MenuItem>
          <MenuItem value="expense">Media</MenuItem>
        </Select>
        <TextField sx={{margin: "15px 10px", border: "1px solid #222"}} type="date" id="outlined-basic" variant="outlined" />
        <TextField sx={{margin: "15px 10px", border: "1px solid #222"}} id="outlined-basic" label="Reference" variant="outlined" />

        <TextField sx={{margin: "15px 10px", border: "1px solid #222", color: "#222"}} id="outlined-basic" label="Description" variant="outlined" />
            <Button>Save</Button>
            </FormControl>
        </Box>
      </Modal>
       </Box>
       <Box
       sx={{
        width: "100%",
        background: "#555",
        marginTop: "25px",
        padding: "40px"
       }}
       >
        <Transactions />
       </Box>
    </Box>

    </div>
  )
}

export default Home