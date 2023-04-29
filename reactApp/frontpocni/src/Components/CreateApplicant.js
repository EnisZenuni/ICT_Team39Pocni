import { useMutation } from "@apollo/client";
import React, { useContext } from 'react';
import { ContextAdmin } from '../ContextAdmin/ContextAdmin';
import { Button } from "@mui/material";
import { CREATE_APPLICANT } from "../GraphQl/Mutations";

export default function CreateApplicant(props) {

    const t = useContext(ContextAdmin)


    console.log(t)



  return (
    <>

      <Button onClick={addOperation}></Button>

    </>
  );
}
