import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, description, img } = props.product;
    return (
        <div>
            
          <Grid item xs={12} sm={12} md={6} >
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                   
                    <CardContent>
                         
                        <Typography style={{color:'green',backgroundColor:'rgb(115 218 210)',marginBottom:'2px'}} variant="h5" component="div">
                           Product Name: <span style={{color:'white'}}  >{name}</span> 
                        </Typography>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '250px', margin: '0 auto' }}
                            image={img}
                            alt="Loading Img"
                        />
                        <Typography variant="body2">

                            {description}
                        </Typography>
                    </CardContent>
                    {  <CardActions>
                        
        <Link  to="/myorder" style={{ textDecoration: 'none',margin:'0 auto'}}>
                    <Button variant="contained" style={{ backgroundColor: 'rgb(25 118 210)' }}>Get Your Sunglasses</Button>
                    </Link>
                    </CardActions> }
                </Card>

            </Grid>
        </div>
    );
};

export default Product;