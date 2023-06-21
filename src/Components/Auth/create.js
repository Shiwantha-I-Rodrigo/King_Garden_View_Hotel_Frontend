import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import "./Design.css"

export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox)
    const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <section className='forms top'>
            <div className='container'>
                <div className='sign-box'>
                    <Form>
                        <p>Don't have an account? Create your account, it takes less than a minute.</p>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                        </Form.Field>
                        <Button onClick={postData} type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        </section >
    )
}
