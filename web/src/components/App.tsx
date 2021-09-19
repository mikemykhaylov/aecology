import { ChakraProvider } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import Dashboard from '../containers/Dashboard';
import fontFaces from '../fonts/fontSetup';
import Loading from './general/Loading';

const Login = lazy(() => import('../containers/Login'));

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
    <ChakraProvider>
      <Normalize />
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact>
          <Suspense fallback={<Loading width="100vw" height="100vh" />}>
            <Login />
          </Suspense>
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/">
          <Redirect to="?" />
        </Route>
      </Switch>
    </ChakraProvider>
  );
};
export default App;
