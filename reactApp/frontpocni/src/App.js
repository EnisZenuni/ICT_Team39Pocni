import { ApolloProvider } from '@apollo/client';
import './App.css';
import CreateApplicant from './Components/CreateApplicant';
import { ContextAdmin } from './ContextAdmin/ContextAdmin';


function App() {
  return (
    <ContextAdmin.Provider value={c}>
        <CreateApplicant />
     </ContextAdmin.Provider>
  );
}

export default App;
