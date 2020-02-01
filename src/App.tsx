import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerStateType } from './types/reducer';
import PrivateRouteComponent from './routes/privateRoute';
import PublicRouteComponent from './routes/publicRoute';
import Dialog from './components/Dialog'
import Loading from './components/Loading';
import DatePicker from './components/DatePicker';
import CardDetailComponent from './components/CardDetailComponent';

const App: React.FC = () => {

  const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
  const loading: boolean = useSelector((state: ReducerStateType) => state.loading.open)
  const datePicker: boolean = useSelector((state: ReducerStateType) => state.datepicker.open)
  const todayPrayDetail: boolean = useSelector((state: ReducerStateType) => state.todayPrayDetail.open)

  if (isLoggedIn) {
    return <>
      <PrivateRouteComponent />
      <Dialog />
      {datePicker && <DatePicker />}
      {todayPrayDetail && <CardDetailComponent />}
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
