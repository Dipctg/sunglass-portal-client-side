import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const MyorderHeader = () => {
    return (
 
        <Container style={{marginTop:'5px'}}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
        <h1 style={{color:'green'}}>
           SAME DAY <br/>DISPATCH <br/>AND CLICK <br/>& COLLECT
        </h1>
            </Grid>

            <Grid item xs={12} md={6}>
         <img style={{width:'100%'}} src={'https://sunglassstyle.co.nz/public/assets/Uploads/RayBan_Hero.png'} alt='Img'/>
            </Grid>
        
        </Grid>
        </Container>
   
    );
};

export default MyorderHeader;