import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import DefaultLayout from "./layouts/DefaultLayout";




const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div >
          <Routes>
              <Route path='*' element={<DefaultLayout/>}/>

              {/*<Route path="/" element={<Home />} />*/}
          </Routes>
      </div>
      </ApolloProvider>
  );
}

export default App;