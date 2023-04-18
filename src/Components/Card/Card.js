import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useState } from 'react';
import {
    IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder, Home } from '@mui/icons-material';
import Home1 from '../../Images/pool_1.jpg'
import './Card.css'
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { MdOutlineBed } from 'react-icons/md'


export default function Card({data}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <div className="Card">

            <img src={data.first_image? data.first_image.image : Home1} className="cardImg"></img>
            {/* <IconButton
                        onClick={handleFavoriteClick}
                        sx={{
                            position: 'absolute'
                        }}
                        color="disable"
                    >
                        {isFavorite ? <Favorite /> : <FavoriteBorder />}
                    </IconButton> */}

            <div className='InfoSection'>

                <div>
                    <div className='CardLocationDiv'>
                        <span><LocationOnOutlinedIcon sx={{ fontSize: 20 }} color="disabled" /></span>
                        <span>{data.location.address} , {data.location.city} </span>
                    </div>

                    <span className='CardTitle'>{data.price}$</span>

                </div>

                <div className='featuresSection'>
                    <div className='FeaturesDiv'>
                        <ShowerOutlinedIcon className='featureIcon' fontSize="small" />
                        <span>{data.living_space.bathrooms}</span>
                        <span>Bathrooms</span>
                    </div>

                    <div className='FeaturesDiv'>
                        <BedOutlinedIcon className='featureIcon' fontSize="small" />
                        {/* <MdOutlineBed className='featureIcon'/> */}
                        <span>{data.living_space.bedrooms}</span>
                        <span>Bedrooms</span>
                    </div>


                </div>
                {/* <Divider /> */}
                {/* <div className='footerCard'>
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

                </div> */}
            </div>
        </div>
    )
}