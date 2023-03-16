import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Divider from '@mui/material/Divider';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useState } from 'react';
import {
    IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Home1 from '../../Images/pool_1.jpg'
import './Card.css'
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import {MdOutlineBed} from 'react-icons/md'


export default function Card() {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <div className="Card">

            <img src={Home1} className="cardImg"></img>
            <IconButton
                        onClick={handleFavoriteClick}
                        sx={{
                            position: 'absolute'
                        }}
                        color="disable"
                    >
                        {isFavorite ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>

            <div className='InfoSection'>

                <div className='CardLocationDiv'>
                    <span><LocationOnOutlinedIcon sx={{ fontSize: 20 }} color="disabled" /></span>
                    <span>Rafedia street</span>
                </div>

                <span className='CardTitle'>1500$</span>



                <div className='featuresSection'>
                    <div className='FeaturesDiv'>
                        <ShowerOutlinedIcon className='featureIcon' fontSize="small"/>
                        <span>3</span>
                        <span>Bathrooms</span>
                    </div>

                    <div className='FeaturesDiv'>
                        <BedOutlinedIcon className='featureIcon' fontSize="small"/>
                        {/* <MdOutlineBed className='featureIcon'/> */}
                        <span>2</span>
                        <span>Rooms</span>
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