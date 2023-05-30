
import React, { useState } from 'react';
import Home1 from '../../Images/home1.jpg'
import './HomeCard.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Chip from '@mui/material/Chip';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';


export default function HomeCard({ selectedMarker }) {
    console.log('selectedMarker::' , selectedMarker)
    const { price, living_space, area, first_image, location } = selectedMarker;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="HomeCard">
            <Card sx={{ maxWidth: 300, minWidth: 200 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={Home1}
                    alt="Home image"
                    className='figure'
                />
                {/* <span className='PriceCard'>1500$</span> */}
                <CardContent>

                    <div className='InfoCard'>
                        <div className='CardTitle'>
                            <span className='CardTitle'>{price}$</span>
                            {/* <span className='PriceCard'>1500$</span> */}
                        </div>
                        <div className='CardLocationDiv'>
                            <span><LocationOnOutlinedIcon sx={{ fontSize: 20 }} color="disabled" /></span>
                            <span>{location.address}</span>
                        </div>

                        <div className='CardFeatures'>
                            <div className='FeaturesDiv'>
                                <span>{living_space.bathrooms}</span>
                                <span>Bathrooms</span>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <div className='FeaturesDiv'>
                                <span>{living_space.bedrooms}</span>
                                <span>Rooms</span>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem />

                            <div className='FeaturesDiv'>
                                <span>{area}</span>
                                <span>Area</span>
                            </div>

                        </div>
                    </div>
                    {/* <Typography gutterBottom variant="h5" component="div">
                        {address}, {city}, {state}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography> */}

                </CardContent>
            </Card>
        </div>
    )
}

