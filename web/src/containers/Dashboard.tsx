import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Main from '../components/dashboard/Main';
import Loading from '../components/general/Loading';
import { auth } from '../constants/firebase';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      history.push('/login');
    }
  });
  return <>{loading ? <Loading height="100vh" width="100vw" /> : <Main />}</>;
};

export default Dashboard;
