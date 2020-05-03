import React, {useState} from 'react'
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap'

const Login = (props) => {
    return (
        <div>
            <FormGroup controlId="email" size="large">
                <FormLabel>Email</FormLabel>
                <FormControl 
                autoFocus
                type="email"
                />
            </FormGroup>
            <FormGroup controlId="password" size="large">
                <FormLabel>Password</FormLabel>
                <FormControl 
                type="password"/>
            </FormGroup>
            <Button block size="large" type="submit">
                Login
            </Button>
        </div>
    )
}

export default Login