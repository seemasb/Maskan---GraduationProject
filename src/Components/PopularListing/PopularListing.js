import HomeCard from '../HomeCard.js/HomeCard'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../Card/Card';

export default function PopularListing() {


    // const [data, setData] = useState([]);
    // const getData = async () => {
    //     const { data } = await axios.get(`https://yesno.wtf/api`);
    //     setData(data);
    // };
    // useEffect(() => {
    //     getData();
    // }, []);


    return (
        <div>
            <div>
                Popular Listing
            </div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    {/* {data.map(x => {
                        <Grid item xs={3}>
                            <HomeCard  State={x.state} Price={x.price} LivingSpace={x.living_space} Views={x.views} Area={x.area} Image={x.first_image} Location={x.location}/>
                        </Grid>
                    })} */}
                    <Grid item xs={3}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    {/* <Grid item xs={3}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={3}>
                        <HomeCard />
                    </Grid> */}
                </Grid>
            </Box>
        </div>
    )
}


