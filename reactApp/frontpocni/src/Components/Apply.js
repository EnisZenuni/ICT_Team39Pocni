import { useMutation, useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { FETCH_COMPANIES } from '../GraphQl/Queries';
import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Home from './Home';
import { BackHand, KeyboardBackspace } from '@mui/icons-material';


export default function Apply(props) {

    const returnToHome = () => {
        window.location.reload()
      };
      
      const [applicants, setApplicants] = useState([
        { id: 1, firstName: "John", lastName: "Bean", email: "john.bean@example.com" },
        { id: 2, firstName: "Jery", lastName: "Smith", email: "jery.smith@example.com" },
        { id: 3, firstName: "Antho", lastName: "Johnson", email: "antho.johnson@example.com" },
        { id: 4, firstName: "Emily", lastName: "Williams", email: "emily.williams@example.com"},
        { id: 5, firstName: "David", lastName: "Brown", email: "david.brown@example.com" }
      ]);


      const handleApply = () => {
        const newApplicant = {
          id: applicants.length + 1,
          firstName: "Enis",
          lastName: "Zenuni",
          email: "enis.zenuni@example.com",
        };
    
        setApplicants((prevApplicants) => [...prevApplicants, newApplicant]);
      };
  

  return (
    <>
    <h2>Job announcement details</h2>
    <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
              label={"Company-Name"}
              value={props.company.companyName}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              aria-readonly
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <TextField
            label={"Company-Description"}
            value={props.company.companyDescription}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            aria-readonly
          />
        </Grid>

      </Grid>
      <Grid container spacing={1}  style={{paddingTop:"10px"}}
>

        <Grid item xs={4}>
          <TextField
            label={"Company-Description"}
            value={props.company.companyDescription}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            aria-readonly
          />
        </Grid>

      </Grid>
      

    <br/>
        <Button 
          color="success"
          variant="contained"
    onClick={returnToHome}><KeyboardBackspace 
    /></Button>
<br></br>
<br></br>
<Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Table sx={{ minWidth: 750 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "black" }}>
            <TableCell style={{ color: "white" }}>NAME</TableCell>
            <TableCell style={{ color: "white" }}>SURNAME</TableCell>
            <TableCell style={{ color: "white" }}>EMAIL</TableCell>
          </TableHead>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow hover key={applicant.id}>
                <TableCell>{applicant.firstName}</TableCell>
                <TableCell>{applicant.lastName}</TableCell>
                <TableCell>{applicant.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Button onClick={handleApply} variant="contained" color="primary">
        Apply
      </Button>
    </Box>
    </>
  );
}
