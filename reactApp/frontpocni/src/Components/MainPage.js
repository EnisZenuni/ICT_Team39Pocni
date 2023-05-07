import { useContext, useState } from "react";
import { ContextAdmin } from "../ContextAdmin/ContextAdmin";
import Company from "./Company";
import Home from "./Home";
import Applicant from "./Applicant";
import { AppBar, Button, Toolbar } from "@mui/material";

export default function MainPage(props) {

    const t = useContext(ContextAdmin)

    const [defaultPage, setDefaultPage] = useState('HOME')

    const handleClick = (option) => {
      if(option === 'HOME'){
        window.location.reload()

      }
        setDefaultPage(option);
      };

      const renderSelectedOption = () => {
        switch (defaultPage) {
          case 'HOME':
            return <Home />;
          case 'COMPANIES':
            return <Company />;
          case 'APPLICANTS':
            return <Applicant />;
          default:
            return <div>Page not found</div>;
        }
      };

  return (
    <>
 <div >
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => handleClick('HOME')}>HOME</Button>
          <Button color="inherit" onClick={() => handleClick('COMPANIES')}>COMPANIES</Button>
          <Button color="inherit" onClick={() => handleClick('APPLICANTS')}>APPLICANTS</Button>
        </Toolbar>
      </AppBar>
      {renderSelectedOption()}
    </div>
    
    </>
  );
}
