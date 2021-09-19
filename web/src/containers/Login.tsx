import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Loading from '../components/general/Loading';
import Main from '../components/login/Main';
import { auth } from '../constants/firebase';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      setLoading(false);
    } else {
      history.push('/');
    }
  });
  return <>{loading ? <Loading height="100vh" width="100vw" /> : <Main />}</>;
};

export default Login;
