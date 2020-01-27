import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { ReducerStateType } from './types/reducer';
import PrivateRouteComponent from './routes/privateRoute';
import PublicRouteComponent from './routes/publicRoute';


const App: React.FC = () => {

  const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)

  if (isLoggedIn) {
    return <PrivateRouteComponent />
  } else {
    return <PublicRouteComponent />
  }

}

export default App;
