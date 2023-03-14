
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


export default function HomeCard(props) {
    const { State, Price, LivingSpace, Views, Area, Image, Location } = props;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="HomeCard">
            <Card sx={{ maxWidth: 300, minWidth:200}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={Home1}
                    alt="Home image"
                    className='figure'
                />
                <Chip label="FOR RENT" 
                sx={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    color: 'white',
                    backgroundColor: 'darkgray',
                    fontWeight: 300,
                    fontSize: '12px',
                    height: '25px',
                  }}
                />
                {/* <span className='PriceCard'>1500$</span> */}
                <CardContent>

                    <div className='InfoCard'>
                        <div className='CardTitle'>
                            <span className='CardTitle'>1500$</span>
                            {/* <span className='PriceCard'>1500$</span> */}
                        </div>
                        <div className='CardLocationDiv'>
                            <span><LocationOnOutlinedIcon sx={{ fontSize: 20 }} color="disabled" /></span>
                            <span>Rafedia street</span>
                        </div>

                        <div className='CardFeatures'>
                            <div className='FeaturesDiv'>
                                <span>3</span>
                                <span>Bathrooms</span>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <div className='FeaturesDiv'>
                                <span>2</span>
                                <span>Rooms</span>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem />

                            <div className='FeaturesDiv'>
                                <span>180</span>
                                <span>Area</span>
                            </div>

                        </div>
                        <Divider />
                        <div className='footerCard'>
                            <IconButton
                                onClick={handleFavoriteClick}
                            // sx={{ marginLeft: 'auto' }}
                            >
                                {isFavorite ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                            <div className='ViewsCard'>
                                <RemoveRedEyeOutlinedIcon color="disabled" sx={{ fontSize: 20 }} />
                                <span>332</span>
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

