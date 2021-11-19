import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Sunglass from '../Sunglass/Sunglass';

const sunglasses =[
    {
        _id:1 ,
        name:'AAAA',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock: 20,
        Price:1600
    },
    {
        _id:2,
        name:'BBBB',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:5,
        Price:1200
    },
    {
        _id:3,
        name:'CCCC',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:14,
        Price:900
    },
    {
        _id:4,
        name:'DDDD',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:12,
        Price:2000
    },
    {
        _id:5 ,
        name:'EEEE',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:30,
        Price:2000
    },
    {
        _id: 6,
        name:'FFFF',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:15,
        Price:3500
    },
    {
        _id:7 ,
        name:'GGGG',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatKbsQznVPhYACainxLqyvPBMdQyXNzD7rVSlD9dc6DUsG-6c0AGFnCoGHXuXsQ_k3Ck&usqp=CAU',
        stock:7,
        Price:1500
    },
    {
        _id: 8,
        name:'HHHH',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoXIVkpu7iePPRyn_31ZmjSpapUPtFwRncmfHNGdSrQoo1YmfTTVZWJBqpdZEP-YO2U4&usqp=CAU',
        stock:26,
        Price:1000
    },
    {
        _id:9 ,
        name:'IIII',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:14,
        Price:3000
    },
    {
        _id:10 ,
        name:'JJJJ',
        img:'https://kinbenaki.com/1863-large_default/gucci-designed-frame-purple-ladies-sunglass.jpg',
        stock:3,
        Price:2000
    },
]







const AvailableOrder = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
             <Typography variant="h4" sx={{ color: 'info.main', mb: 3, mt:3 }}>Choose for Sunglasses</Typography>
            {bookingSuccess && <Alert severity="success">Sunglasses Booked successfully!</Alert>}
            
            <Grid container spacing={2}>
                
           {
               sunglasses.map(sunglass =><Sunglass
               key={sunglass._id}
               sunglass={sunglass}
               setBookingSuccess={setBookingSuccess}
               ></Sunglass>)
           }
        
        </Grid>
        </Container>
    );
};

export default AvailableOrder;