import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';

const services = [
    {

        name: "EYE Doctors",
        description: "Very friendly, super clean, efficient. The staff, and Fetch were great. The Dr. took the time to listen to me and my concerns and answered all my questions. It was an awesome experience and I’m actually looking forward to going back to pick out my new glasses!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5PDHIqtbhWaMOOe75FpwEd4Y1sclbSVw5A&usqp=CAU"
    },
    {

        name: "EYE Exams",
        description: "Very friendly, super clean, efficient. The staff, and Fetch were great. The Dr. took the time to listen to me and my concerns and answered all my questions. It was an awesome experience and I’m actually looking forward to going back to pick out my new glasses!",
        img: "https://www.kindpng.com/picc/m/27-273839_transparent-laser-eye-surgery-clipart-eye-test-chart.png"
    },
    {

        name: "Emergency EYE service",
        description: "Very friendly, super clean, efficient. The staff, and Fetch were great. The Dr. took the time to listen to me and my concerns and answered all my questions. It was an awesome experience and I’m actually looking forward to going back to pick out my new glasses!",
        img: "https://www.nicepng.com/png/detail/291-2919749_ophthalmologist-surgeon.png"
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, color: 'success.main', m: 2 }} variant="h4" component="div">
                    Our Services
                </Typography>

                <Typography sx={{ fontWeight: 500, mb: 5 }} variant="h5" component="div">
                    Services We Provide
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 6 }}>
                    {
                        services.map(service =>


                            <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;