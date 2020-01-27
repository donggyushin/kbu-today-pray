import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerStateType } from './types/reducer';
import PrivateRouteComponent from './routes/privateRoute';
import PublicRouteComponent from './routes/publicRoute';
import Dialog from './components/Dialog'
import Loading from './components/Loading';

const App: React.FC = () => {

  const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
  const loading: boolean = useSelector((state: ReducerStateType) => state.loading.open)

  if (isLoggedIn) {
    return <>
      <PrivateRouteComponent />
      <Dialog />
      {loading && <Loading />}
    </>
  } else {
    return <>
      <PublicRouteComponent />
      <Dialog />
      {loading && <Loading />}
    </>
  }

}

export default App;
