import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user.email)
        fetch('https://floating-beyond-42762.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail(email);
                    setSuccess(true);
                }
            }) 

        e.preventDefault()
    }
    return (
        <div>
            <h1>Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;