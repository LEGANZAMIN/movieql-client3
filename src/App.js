import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';
import { Route, Switch } from 'react-router-dom';
import { Home, Detail } from './pages';


function App() {
  return (
    <ApolloProvider client={client}>

        <Route exact path="/" component={Home}/>

        <Switch>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/detail"     component={Detail}/>
        </Switch>

  </ApolloProvider>
  );
}

export default App;
