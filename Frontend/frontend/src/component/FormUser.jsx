import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import {createUser} from "../services/user.service.js";
import {useState} from "react";

export default function FormUser() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const user = {
            name:formData.get('name'),
            identity_number:formData.get('identity-number'),
            email:formData.get('email'),
            date_of_birth:formData.get('BirthOfDate')
        }
        createUser(user)
    };

    const [name,setName] = useState("")
    const [identityNumber,setIdentityNumber] = useState("")
    const [email,setEmail] = useState("")
    const [birthOfDate,setBirthOfDate] = useState("")
    const [errorIdentityNumber, setErrorIdentityNumber] = useState('');
    const [errorBirtOfDate, setErrorBirthOfDate] = useState('');
    const today = new Date();

    return (
        <form onSubmit={handleSubmit} >

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'center',
                    padding: '20px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                    width: '300px',
                    border: '2px solid gray',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}

                autoComplete="off"
            >
                <div>
                    <div>
                        <InputLabel>Name</InputLabel>
                    </div>
                    <TextField
                        size={"small"}
                        required={true}
                        id="name"
                        name="name"
                        label="Name according to ID card"
                        type={"text"}
                        sx={{ marginTop: '10px' }}
                        value={name}
                        onChange={(e)=>{
                            console.log(e.target.value)
                            setName(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <div>
                        <InputLabel>Identity Number</InputLabel>
                    </div>
                    <TextField
                        size={"small"}
                        required={true}
                        id="identity-number"
                        name="identity-number"
                        label="KTP or Passport 16 characther"
                        type={"text"}
                        sx={{ marginTop: '10px' }}
                        value={identityNumber}
                        onChange={(e)=>{
                            if(e.target.value.length !== 16) setErrorIdentityNumber('Identity number must be 16 characters long')
                            else setErrorIdentityNumber('')
                            setIdentityNumber(e.target.value)
                        }}
                    />
                    {errorIdentityNumber && (
                        <div style={{ color: 'red' }}>{errorIdentityNumber}</div>
                    )}
                </div>

                <div>
                    <div>
                        <InputLabel>Email</InputLabel>
                    </div>
                    <TextField
                        size={"small"}
                        required={true}
                        id="email"
                        name="email"
                        label="Active email"
                        type={"email"}
                        sx={{ marginTop: '10px' }}
                        value={email}
                        onChange={(e)=>{
                            console.log(e.target.value)
                            setEmail(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <div>
                        <InputLabel>Birth of Date</InputLabel>
                    </div>
                    <TextField
                        size={"small"}
                        required={true}
                        id="BirthOfDate"
                        name="BirthOfDate"
                        type={"date"}
                        sx={{ marginTop: '10px' }}
                        value={birthOfDate}
                        onChange={(e)=>{
                            const newBirthOfDate = new Date(e.target.value);
                            if (newBirthOfDate >= today) setErrorBirthOfDate('The date of birth cannot be equal to or greater than today');
                            else setErrorBirthOfDate('');
                            setBirthOfDate(e.target.value)
                        }}
                    />
                    {errorBirtOfDate && (<div style={{ color: 'red' }}>{errorBirtOfDate}</div>)}
                </div>
                <div>
                    <div style={{marginTop: '20px' }}>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                </div>
            </Box>
        </form>
    );
}
