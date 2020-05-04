import React, {useState} from 'react'
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
import axios from 'axios'

const Register = (props) => {

    const [name, setName] = useState('')
    
    const getData = async (e) => {
       setName(e.target.value)
       await axios.post('http://localhost:6543/howdy', 
            { Name: 'Fred'},
            { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(function (response) {
                console.log(response);
        })
    }
    const getd = async () => {
        const response =
          await axios.get("https://dog.ceo/api/breeds/list/all",
            { headers: {'Content-Type': 'application/json'}}
          )
        console.log(response.data)
    }
    return(
        <div>
            <h1>Register</h1>
            <FormGroup controlId="name" size="large">
            <FormLabel>text</FormLabel>
            <FormControl
            onKeyUp={(e) => getData(e)}
            type="text"/>
            </FormGroup>
            {name && <p>{name}</p>}
        </div>
    )
}
export default Register