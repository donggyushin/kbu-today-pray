import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/LoginPage'

const PublicRouteComponent: React.FC = () => {
    return <Switch>
        <Route exact path='/login'>
            <LoginPage />
        </Route>
        <Route>
            <LoginPage />
        </Route>
    </Switch>
}

export default PublicRouteComponent