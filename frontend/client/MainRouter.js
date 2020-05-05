import React from 'react'
import {Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/user/Register'
import Login from './components/user/Login'
import NavigationBar from './components/NavigationBar'
import AppliedRoute from './libs/AppliedRoute'

const MainRouter = (props) => {
    return(
        <div>
            <NavigationBar />
            <Switch>
                <AppliedRoute path="/" exact component={Home} />
                <AppliedRoute path="/login" component={Login} />
                <AppliedRoute path="/register" component={Register} />
            </Switch>
        </div>
    )
}

export default MainRouter