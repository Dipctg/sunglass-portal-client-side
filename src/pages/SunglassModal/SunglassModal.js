import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SunglassModal = ({openBooking ,handleBookingClose,setBookingSuccess, sunglass}) => {
    const {name, img, stock, Price}= sunglass;
    const {user} =useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, phoneNumber: '' };
    const [sunglassInfo ,setSunglassInfo] =useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...sunglassInfo };
        newInfo[field] = value;
        //console.log(newInfo);
        setSunglassInfo(newInfo);
    }

    const handleSunglassSubmit = e => {
        // collect data
        const appointment = {
            ...sunglassInfo,
            sunglassName: name,
            
        }
         // send to the server
        fetch('https://floating-beyond-42762.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                /* console.log(data); */
                 if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            }); 
            
           
        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form  onSubmit={handleSunglassSubmit} >
                       
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='userName'
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='email'
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='phoneNumber'
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default SunglassModal;