import { useMutation, useQuery } from "@apollo/client";
import React, { useContext } from 'react';
import { ContextAdmin } from '../ContextAdmin/ContextAdmin';
import { Button } from "@mui/material";
import { CREATE_APPLICANT, CREATE_COMPANY } from "../GraphQl/Mutations";
import { FETCH_COMPANIES } from "../GraphQl/Queries";

export default function Company(props) {

    const t = useContext(ContextAdmin)



  const [addCompany] = useMutation(CREATE_COMPANY, {
    variables: {
      companyName: "Sorsix",
      companyIdentificator: "16623Sorsix",
      companyDescription: "Software developing - company",
      password:"asd123asd",
    },
  });

  const {error, data, loading}= useQuery(FETCH_COMPANIES)

  if(error) return <><p>error</p></>
  if(loading) return <><p>loading</p></>

  if(data){
    console.log(data)
  }

  return (
    <>
      <Button onClick={addCompany}>Create Company</Button>

    </>
  );
}
