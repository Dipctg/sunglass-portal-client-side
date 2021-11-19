import React from 'react';
import {  Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SunglassModal from '../SunglassModal/SunglassModal';


const Sunglass = ({sunglass,setBookingSuccess}) => {
    const {name, img, stock, Price}= sunglass;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
       <>
 <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
        <img style={{width:'100%'}} src={img} alt='Img'/>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                      Product name:  {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                     Price:   {Price} Tk Only.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Stock:  {stock} Piece  AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen}  variant="contained">BOOK NOW</Button>
                </Paper>
        </Grid>
        <SunglassModal
        sunglass={sunglass}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
        
        
        ></SunglassModal>
       </>


    
           
        
    );
};

export default Sunglass;