import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../media/Notfound/FB_IMG_1637047525551.jpg'

const NotFound = () => {
    return (
       <Container>
            <div>
            <h3>Please cheek search bar <br/> Or go back to <Link style={{ textDecoration: 'none', color: 'red' }} to="/home">
                        Home Page
                    </Link> </h3>

            <img style={{ 
                    alignSelf: 'center',
                    height: '80%',
                    width: '100%',
                    borderRadius:'10px',
                    border: '8px solid #70b99e'
                   
                
                }} src={notFound} alt="" />
        </div>
       </Container>
    );
};

export default NotFound;