import React, {useState} from 'react'
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
import axios from 'axios'

const Register = (props) => {

    const [name, setName] = useState('')
    const [results, setResults] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:6543/howdy', 
            { name: name},
            { headers: {'Content-Type': 'application/json'}}
        ).then((res) => {
            setResults(res.data.greeting)
        });
    }
   
    const handleChange = (e) => {
        console.log(e.target)
        setName(e.target.value)
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup controlId="displayname" size="large">
                <FormLabel>Display Name</FormLabel>
                <FormControl
                onChange={(e) => {handleChange(e)}}
                type="text"/>
                </FormGroup>

                <FormGroup controlId="email" size="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                onChange={(e) => {handleChange(e)}}
                type="email"/>
                </FormGroup>

                <FormGroup controlId="password" size="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                onChange={(e) => {handleChange(e)}}
                type="password"/>
                </FormGroup>

                <Button block size="large" type="submit">Register</Button>
            </form>
            {name && <p>{name}</p>}
            {results && <p>{results}</p>}
        </div>
    )
}
export default Register