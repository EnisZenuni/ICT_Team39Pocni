import { useContext, useState } from "react";
import { ContextAdmin } from "../ContextAdmin/ContextAdmin";
import Company from "./Company";
import Home from "./Home";
import Applicant from "./Applicant";
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {

    const t = useContext(ContextAdmin)
    const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
    const handleHomeClick = () => {
        navigate("/Home");
      };
    
      const handleLogout = () => {
        setLogoutDialogOpen(true);
      };
    
      const handleLogoutConfirm = () => {
        // Perform logout logic here
        // Clear any stored user data, session, or tokens
    
        setLogoutDialogOpen(false);
        navigate("/");
      };
    
      const handleLogoutCancel = () => {
        setLogoutDialogOpen(false);
      };
    
    const navigate = useNavigate();

  return (
    <>
 <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleHomeClick}>
            HOME
          </Button>
          <Button color="inherit" onClick={() => navigate("/Company")}>
            COMPANIES
          </Button>
          <Button color="inherit" onClick={() => navigate("/Applicant")}>
            APPLICANTS
          </Button>
          <div style={{ flex: 1 }}></div>
          <Button color="inherit" onClick={handleLogout}>
            LOG OUT
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={logoutDialogOpen} onClose={handleLogoutCancel}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>Are you sure you want to log out?</DialogContent>
        <DialogActions>
          <Button 
           variant="contained"
           color="error"
          onClick={handleLogoutCancel}>Cancel</Button>
          <Button
           variant="contained"
           color="primary"
          onClick={handleLogoutConfirm} autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}
