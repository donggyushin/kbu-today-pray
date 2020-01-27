import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../components/MainPage'

const PrivateRouteComponent: React.FC = () => {
    return <Switch>
        <Route>
            <MainPage />
        </Route>
    </Switch>
}

export default PrivateRouteComponent