import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url("https://savvytokyo.scdn3.secure.raxcdn.com/app/uploads/2015/04/dky4-cropped-790x445.jpg")`,
    marginTop: 200,
    marginBottom: 50,
    backgroundColor: 'rgba(224, 240, 303 )',
    backgroundBlendMode: 'darken, luminosity',
    borderRadius:'20px',
    border: '8px solid white',
    paddingTop:'10px'
    

}


const MyOrderBanner = () => {
    return (
        <Container>
            <h1>Happy New Year Offer</h1>
           
            <Box style={bannerBg} sx={{ flexGrow: 1 , marginX:'5px'}}>

<Grid container spacing={2} >

    <Grid item xs={12} md={6} >
        <img
            style={{
                width: 330,
borderRadius:'20px',
border: '4px solid rgba(251, 176, 63, 0.74)'

            }}
            src='https://denver.cbslocal.com/wp-content/uploads/sites/14984641/2013/05/shutterstock_560560171.jpg' />
    </Grid>
    <Grid item xs={12} md={6} >
        <Typography style={{ color: 'rgb(17 36 54)', backgroundColor:'rgba(251, 176, 63, 0.74)',
        padding:'10px',
        margin:"10px"  
    }} variant='h6'>
        Pick Your Glasses
        </Typography>
        <Typography style={{ color: 'rgba(235 175 9)',
        backgroundColor:'rgb(18, 18, 18)' , fontWeight:700,
    padding:'5px', margin:"5px 90px"
    }} variant='h3'> 
        Flash Sales
        </Typography>
        <Typography style={{ backgroundColor:'rgba(251, 176, 63, 0.74)', color:'white',fontSize:14,fontWeight:300, padding:'5px',margin:"10px" }} variant='h6'>
        The Flash Sales By Department Report provides current sales results for the entire store for each department. It includes the department name and number, count of transactions in each department and the dollar amount of the sales per department.
        </Typography>
    </Grid>

</Grid>

</Box>
        </Container>
    );
};

export default MyOrderBanner;