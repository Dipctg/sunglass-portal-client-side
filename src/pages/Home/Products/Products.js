import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://floating-beyond-42762.herokuapp.com/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    })
    return (


        <Box sx={{ flexGrow: 1 }}>
            <Container >
                { <Typography sx={{ fontSize: 30,color:'black'}}  gutterBottom>
                           Most Popular Glasses
                        </Typography> }
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.slice(0,6).map((product) => (
                        <Grid item xs={2} sm={4} md={4}>
                            
<Product
 key={product.name}
 product={product}
></Product>




                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>


    );
};

export default Products;