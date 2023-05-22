import { ApolloProvider } from '@apollo/client';
import './App.css';
import CreateApplicant from './Components/Applicant';
import { ContextAdmin } from './ContextAdmin/ContextAdmin';
import Company from './Components/Company';
import Applicant from './Components/Applicant';
import MainPage from './Components/MainPage';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Apply from './Components/Apply';

function App() {
  return (
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/Applicant' element={<Applicant/>} />
          <Route path='/Company' element={<Company/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Details/:companyId' element={<Apply />} />


        </Routes>
  );
}

export default App;