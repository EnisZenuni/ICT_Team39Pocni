import { useMutation, useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { FETCH_COMPANIES } from '../GraphQl/Queries';
import { Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Home from './Home';
import { BackHand, KeyboardBackspace } from '@mui/icons-material';
import NavBar from './NavBar';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default function Apply(props) {


  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);



  const returnToHome = () => {
    window.location.reload()
  };

  const [applicants, setApplicants] = useState([
    { id: 1, firstName: "John", lastName: "Bean", email: "john.bean@example.com", accepted: false },
    { id: 2, firstName: "Jery", lastName: "Smith", email: "jery.smith@example.com", accepted: false },
    { id: 3, firstName: "Antho", lastName: "Johnson", email: "antho.johnson@example.com", accepted: false },
    { id: 4, firstName: "Emily", lastName: "Williams", email: "emily.williams@example.com", accepted: false },
    { id: 5, firstName: "David", lastName: "Brown", email: "david.brown@example.com", accepted: false }
  ]);
  let email = localStorage.getItem('email')
  let personName = localStorage.getItem('name')
  let surname = localStorage.getItem('surname')
  let companyId = localStorage.getItem('companyId')
  let companyName = localStorage.getItem('companyName')


  const handleApply = () => {
    const newApplicant = {
      id: applicants.length + 1,
      firstName: personName,
      lastName: surname,
      email: email,
      accepted: false
    };

    setApplicants((prevApplicants) => [...prevApplicants, newApplicant]);
  };
  const handleAccept = (applicantId) => {
    setSelectedApplicant(applicantId);
    setDialogOpen(true);
  };


  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSetInterviewDate = (date) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === selectedApplicant ? { ...applicant, accepted: true, interviewDate: date } : applicant
      )
    );
  };

  return (
    <>
      <NavBar />
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
            label={"Company-Identificator"}
            value={props.company.companyIdentificator}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            aria-readonly
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ paddingTop: "10px" }}>
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

      <br />
      <Button
        color="success"
        variant="contained"
        onClick={returnToHome}
      >
        <KeyboardBackspace />
      </Button>
      <br />
      <br />
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Table sx={{ minWidth: 750 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }}>NAME</TableCell>
              <TableCell style={{ color: "white" }}>SURNAME</TableCell>
              <TableCell style={{ color: "white" }}>EMAIL</TableCell>
              <TableCell
                style={{ color: "white", display: companyId === "" && "none" }}
              >
                ACTION
              </TableCell>
              <TableCell style={{ color: "white", display: companyId === "" && "none" }}>Interview Date</TableCell>
            </TableHead>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow hover key={applicant.id}>
                  <TableCell>{applicant.firstName}</TableCell>
                  <TableCell>{applicant.lastName}</TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell style={{ display: companyId === "" && "none" }}>
                    {applicant.accepted ? (
                      <Button variant="contained" color="success" disabled>
                        INVITED
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAccept(applicant.id)}
                      >
                        INVITE
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{applicant.interviewDate && new Date(applicant.interviewDate).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Button
          style={{ display: personName === "" && "none" }}
          onClick={handleApply}
          variant="contained"
          color="primary"
        >
          Apply
        </Button>
      </Box>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Set Interview Date</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please set the interview date for the applicant.
          </DialogContentText>
          {/* Date picker component */}
          {/* Example: <DatePicker onChange={handleSetInterviewDate} /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={handleSetInterviewDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
          onClick={handleDialogClose}>Cancel</Button>
          <Button
            variant="contained"
            color="success"
          onClick={() => setDialogOpen(false)}>Set Date</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
