import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from 'react';
import { ContextAdmin } from '../ContextAdmin/ContextAdmin';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { CREATE_APPLICANT, CREATE_COMPANY, DELETE_COMPANY } from "../GraphQl/Mutations";
import { FETCH_COMPANIES } from "../GraphQl/Queries";
import { DeleteForever } from "@mui/icons-material";
import NavBar from "./NavBar";

export default function Company(props) {

  const t = useContext(ContextAdmin)
  const [deleteRow, setDeleteRow] = useState(0)


  const [formState, setFormState] = useState({
    companyName: "",
    companyIdentificator: "",
    companyDescription: "",
    password: ""
  })


  const { error, data, loading } = useQuery(FETCH_COMPANIES)

  const [deleteCompany] = useMutation(DELETE_COMPANY, {
    variables: {
      id: deleteRow
    },
    refetchQueries: [{ query: FETCH_COMPANIES }]
  });


  useEffect(() => {
    if (deleteRow !== null) {
      deleteCompany();
    }
  }, [deleteRow, deleteCompany]);

  const handleDeleteCompany = (id) => {
    setDeleteRow(id);
  };


  const [addCompany] = useMutation(CREATE_COMPANY, {
    variables: {
      companyName: formState.companyName,
      companyIdentificator: formState.companyIdentificator,
      companyDescription: formState.companyDescription,
      password: formState.password,
    },
    refetchQueries: [{ query: FETCH_COMPANIES }]
  });

  const handleAddCompany = () => {
    addCompany();
    setFormState(() => ({
      companyName: "",
      companyDescription: "",
      companyIdentificator:"",
      password:""
    }))
  };


  if (error) return <><p>error</p></>
  if (loading) return <><p>loading</p></>

  if (data) {
    console.log(data)
  }
  const rows = data.companies

  return (
    <>
        <NavBar />

      <h2>CREATE COMPANY</h2>

      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField required label={"Name"} fullWidth value={formState.companyName}
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    companyName: event.target.value,
                  }))
                } />
            </Grid>
            <Grid item xs={3}>
              <TextField required label={"Identificator"} fullWidth value={formState.companyIdentificator}
                onChange={(event) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    companyIdentificator: event.target.value,
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
          <TextField required label={"Description"} fullWidth value={formState.companyDescription}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                companyDescription: event.target.value,
              }))
            } />
        </Grid>
      </Grid>





      <br></br>
      <Button onClick={handleAddCompany}
        color="success"
        variant="contained"
        disabled={
          formState.companyDescription === "" || formState.companyName === "" || formState.companyIdentificator === "" || formState.password === ""
        }
      >Create</Button>
      <p style={{ color: "darkgoldenrod", fontStyle: "italic" }}>Note: All fields are mandatory to create a new company!</p>
      <br></br>

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Table sx={{ minWidth: 750 }} aria-label="customized table">
            <TableHead style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white", paddingLeft: "25px" }}>ACTION</TableCell>
              <TableCell style={{ color: "white" }}>NAME</TableCell>
              <TableCell style={{ color: "white" }}>IDENTIFICATOR</TableCell>
              <TableCell style={{ color: "white" }}>DESCRIPTION</TableCell>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                console.log(row)
                return (
                  <TableRow hover key={index}>
                    <TableCell>
                      <Button onClick={() => handleDeleteCompany(row.id)} color="error" variant="contained">
                        <DeleteForever></DeleteForever>
                      </Button>
                    </TableCell>
                    <TableCell>{row.companyName}</TableCell>
                    <TableCell>{row.companyIdentificator}</TableCell>
                    <TableCell>{row.companyDescription}</TableCell>

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
