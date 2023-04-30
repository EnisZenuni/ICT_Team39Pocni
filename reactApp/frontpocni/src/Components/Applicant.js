import { useMutation, useQuery } from "@apollo/client";
import React, { useContext } from 'react';
import { ContextAdmin } from '../ContextAdmin/ContextAdmin';
import { Button } from "@mui/material";
import { CREATE_APPLICANT, CREATE_COMPANY } from "../GraphQl/Mutations";
import { FETCH_APPLICANTS } from "../GraphQl/Queries";

export default function Applicant(props) {

    const t = useContext(ContextAdmin)

  const [addApplicant] = useMutation(CREATE_APPLICANT, {
    variables: {
      firstName: "Lirim",
      lastName: "Hamiti",
      email: "test@test.com",
      password:"asd",
      skills:"developing software"
    },
  });

  const {error, data, loading}= useQuery(FETCH_APPLICANTS)

  if(error) return <><p>error</p></>
  if(loading) return <><p>loading</p></>


  return (
    <>

      <Button onClick={addApplicant} >Create Applicant</Button>

    </>
  );
}
