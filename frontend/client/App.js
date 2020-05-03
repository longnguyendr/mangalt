import React, { Component } from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <MainRouter/>
      </BrowserRouter>
    </div>
  )
}

export default hot(module)(App)
