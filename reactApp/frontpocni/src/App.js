import { ApolloProvider } from '@apollo/client';
import './App.css';
import { ContextAdmin } from './ContextAdmin/ContextAdmin';
import Company from './Components/Company';
import Applicant from './Components/Applicant';


function App() {
  const c = ["test", "test2"]
  return (
    <ContextAdmin.Provider value={c}>
        <Applicant />
        <Company/>
     </ContextAdmin.Provider>
  );
}

export default App;
