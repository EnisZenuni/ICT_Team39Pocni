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
      companyName: "Facebook",
      companyIdentificator: "fb2996",
      companyDescription: "Social media app",
      password:"aaaaa",
    },
  });

  const {error, data, loading}= useQuery(FETCH_COMPANIES)

  if(error) return <><p>error</p></>
  if(loading) return <><p>loading</p></>



  return (
    <>
      <Button onClick={addCompany}>Create Company</Button>

    </>
  );
}
