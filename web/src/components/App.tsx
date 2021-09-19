import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import { Switch, Route, Redirect } from 'react-router-dom';
import fontFaces from '../fonts/fontSetup';
import Dashboard from '../containers/Dashboard';

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
