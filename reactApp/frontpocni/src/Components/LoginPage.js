import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Tabs, Tab, Typography } from '@mui/material';
import MainPage from './MainPage';
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';

const FormContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px',
    padding: '24px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
});

const LoginButton = styled(Button)({
    width: '100%',
});

const Title = styled(Typography)({
    marginBottom: '16px',
    fontWeight: 'bold',
    fontSize: '24px',
    textAlign: 'center',
});


export default function LoginPage(props) {

    const [loginType, setLoginType] = useState('person');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');



    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const navigate = useNavigate();

    const handleCompanyIdChange = (event) => {
        setCompanyId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };


    const handleLogin = (event) => {
        event.preventDefault();
        // Perform login logic here
        // You can store the data in localStorage or send it to an API for validation

        if (loginType === 'company') {
            localStorage.setItem('companyId', companyId);
            localStorage.setItem('companyName', companyName);

            localStorage.setItem('name', '');
            localStorage.setItem('surname', '');
            localStorage.setItem('email', '');

        } else {
            localStorage.setItem('name', firstName);
            localStorage.setItem('surname', lastName);
            localStorage.setItem('email', email);

            localStorage.setItem('companyId', '');
            localStorage.setItem('companyName', '');
        }
        navigate('/Home');
    };


    return (
        <FormContainer>
            <Form onSubmit={handleLogin}>
                <Title>Login</Title>
                <Tabs
                    value={loginType}
                    onChange={(event, newValue) => {
                        setPassword('')
                        setCompanyId('')
                        setCompanyName('')
                        setFirstName('')
                        setLastName('')
                        setEmail('')
                        setLoginType(newValue)
                    }}
                    centered
                    variant="fullWidth"
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab label="Person" value="person" style={{ fontWeight: 'bold' }} />
                    <Tab label="Company" value="company" style={{ fontWeight: 'bold' }} />
                </Tabs>
                {loginType === 'company' ? (
                    <>
                       <TextField
                            label="Name"
                            id="company-name"
                            value={companyName}
                            onChange={handleCompanyNameChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Company ID"
                            id="company-id"
                            value={companyId}
                            onChange={handleCompanyIdChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </>
                ) : (
                    <>
                      <TextField
                            label="E-mail"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Name"
                            id="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                            <TextField
                            label="Surname"
                            id="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </>
                )}
                <LoginButton
                    disabled={
                        (loginType === 'person' && (firstName === '' || password === '' || lastName === '' && email === '')) ||
                        (loginType === 'company' && (companyId === '' || password === '' || companyName === ''))
                    }
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Login
                </LoginButton>
                <p style={{ color: "darkgoldenrod", fontStyle: "italic" }}>Note: All fields are mandatory !</p>
            </Form>
        </FormContainer>
    );


}
