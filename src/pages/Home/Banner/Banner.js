import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center'
    
}

const Banner = () => {
    return (
        <Container  sx={{ flexGrow: 1 }}>
            <Grid style={{backgroundColor:'#70b99e',padding:'10px',margin:'0 auto'}} container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Glasses <br />
                            Are  Here....
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        If you think of your glasses as a fashion statement just as much as a tool to improve your vision, chances are you own multiple pairs or change frames often. If you own several pairs of your prescription glasses with a variety of frames, you’ll always be able to keep your style on point. Each time you purchase a new pair of glasses, you’ll need an adjustment period to get used to the way they work with your eyes and rest on your face. Adjusting to new glasses is important for your vision and your state 0f mind.
                        </Typography>
                       
                    <Link  to="/myorder" style={{ textDecoration: 'none'}}>
                    <Button variant="contained" style={{ backgroundColor: 'rgb(25 118 210)', marginBottom:'10px'  }}>Get Your Sunglasses</Button>
                    </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <img style={{ 
                    alignSelf: 'center',
                    height: '80%',
                    width: '95%',
                    borderRadius:'5px',
    border: '1px solid #70b99e'
                   
                
                }} src='https://www.ray-ban.com/_repository/_resources/homepage/images/uploads/layout2018_Slot/2_HeroDesktop_1920x800.jpg' alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;