import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import Loading from '../components/general/Loading';
import Main from '../components/login/Main';
import { auth, firestore } from '../constants/firebase';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      setLoading(false);
    } else {
      const userDoc = await getDoc(doc(firestore, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(firestore, 'users', user.uid), {
          actions: [],
          appliances: [],
          carbonReduced: 0,
          electricitySaved: 0,
          waterSaved: 0,
        });
      }
      history.push('/');
    }
  });
  return <>{loading ? <Loading height="100vh" width="100vw" /> : <Main />}</>;
};

export default Login;
