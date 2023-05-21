import { useMutation, useQuery } from "@apollo/client";
import {  DeleteForever } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from 'react';
import { ContextAdmin } from '../ContextAdmin/ContextAdmin';
import { Box, Button, Grid, Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { CREATE_APPLICANT, CREATE_COMPANY, DELETE_APPLICANT } from "../GraphQl/Mutations";
import { FETCH_APPLICANTS } from "../GraphQl/Queries";
import Home from "./Home";
import MainPage from "./MainPage";
import NavBar from "./NavBar";

export default function Applicant(props) {

  const t = useContext(ContextAdmin)

  const [deleteRow, setDeleteRow]= useState(0)

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    skills: "",
  })


  const [addApplicant] = useMutation(CREATE_APPLICANT, {
    variables: {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
      skills: formState.skills
    },
    refetchQueries: [{ query: FETCH_APPLICANTS }]
  });

  const [deleteApplicant] = useMutation(DELETE_APPLICANT, {
    variables: {
      id: deleteRow
    },
    refetchQueries: [{ query: FETCH_APPLICANTS }]
  });


  useEffect(() => {
    if (deleteRow !== null) {
      deleteApplicant();
    }
  }, [deleteRow, deleteApplicant]);

  const handleDeleteApplicant = (id) => {
    setDeleteRow(id);
  };

  const handleAddApplicant = () => {
    addApplicant();
    setFormState(() => ({
      firstName: "",
      lastName: "",
      email:"",
      skills:"",
      password:""
    }))
  };
  

  const { error, data, loading } = useQuery(FETCH_APPLICANTS)

  if (error) return <><p>error</p></>
  if (loading) return <><p>loading</p></>

  const rows = data.applicants
  return (
    <>
    <NavBar />
      <h2>CREATE APPLICANT</h2>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField required label={"Name"} fullWidth value={formState.firstName}
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    firstName: event.target.value,
                  }))
                } />
            </Grid>
            <Grid item xs={3}>
              <TextField required label={"Surname"} fullWidth value={formState.lastName}
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    lastName: event.target.value,
                  }))
                } />
            </Grid>
            <Grid item xs={3}>
              <TextField required label={"Email"} fullWidth value={formState.email}
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }))
                } />
            </Grid>
            <Grid item xs={3}>
              <TextField required type="password" label={"Password"} fullWidth value={formState.password}
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    password: event.target.value,
                  }))
                } />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <TextField required label={"Skills"} fullWidth value={formState.skills}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                skills: event.target.value,
              }))
            } />
        </Grid>
      </Grid>





      <br></br>
      <Button onClick={handleAddApplicant}
        color="success"
        variant="contained"
        disabled={
          formState.firstName === "" || formState.lastName === "" || formState.email === "" || formState.password === "" || formState.skills === ""
        }
      >Create</Button>
      <p style={{ color: "darkgoldenrod", fontStyle: "italic" }}>Note: All fields are mandatory to create a new applicant!</p>
      <br></br>

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Table sx={{ minWidth: 750 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white", paddingLeft:"25px" }}>ACTION</TableCell>
              <TableCell style={{ color: "white" }}>NAME</TableCell>
              <TableCell style={{ color: "white" }}>SURNAME</TableCell>
              <TableCell style={{ color: "white" }}>EMAIL</TableCell>
              <TableCell style={{ color: "white" }}>SKILLS</TableCell>

            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow hover key={index}>
                    <TableCell>
                      <Button onClick={() => handleDeleteApplicant(row.id)} color="error" variant="contained">
                        <DeleteForever></DeleteForever>
                      </Button>
                    </TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.skills}</TableCell>

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

      </Box>
    </>
  );
}
