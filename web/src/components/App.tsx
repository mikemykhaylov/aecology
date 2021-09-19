import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import fontFaces from '../fonts/fontSetup';

const GlobalStyle = createGlobalStyle`
${fontFaces}
  body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #ffffff;
  font-family: 'Manrope', sans-serif;
  margin: 0;
  font-size: 16px;
}
`;

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/">
          <Redirect to="?" />
        </Route>
      </Switch>
    </>
  );
};
export default App;
