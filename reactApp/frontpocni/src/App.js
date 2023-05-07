import { ApolloProvider } from '@apollo/client';
import './App.css';
import CreateApplicant from './Components/Applicant';
import { ContextAdmin } from './ContextAdmin/ContextAdmin';
import Company from './Components/Company';
import Applicant from './Components/Applicant';
import MainPage from './Components/MainPage';



function App() {
  const c = ["test", "test2"]
  return (
    <ContextAdmin.Provider value={c}>
        <MainPage/>
     </ContextAdmin.Provider>
  );
}

export default App;