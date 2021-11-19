import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div>
            <Grid item xs={12} sm={12} md={6} >
                <Card sx={{ minWidth: 100, border: 0, boxShadow: 0 }}>
                    <CardContent>
                        
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                            image={img}
                            alt="Loading Img"
                        />
                        <Typography variant="body2">

                            {description}
                        </Typography>
                    </CardContent>
                    {  <CardActions>
                        <Button style={{flex: 1,
        flexDirection: 'column',
        color: 'gray',
        justifyContent: 'center',
        alignItems: 'center'}} size="small">Book Now</Button>
                    </CardActions> }
                </Card>

            </Grid>
        </div>
    );
};

export default Service;