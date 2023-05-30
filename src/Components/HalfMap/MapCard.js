import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import NoImage from '../../Images/no-image.jpg';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-top: 7px;
  padding-bottom: 7px;
  // padding: 3px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const MapCard = ({ selectedMarker, setSelectedMarker }) => {
  const { price, living_space, area, first_image, location } = selectedMarker;
  console.log('selectedMarker::::', selectedMarker)


  return (
    <Link to={`/detail/${selectedMarker.id}`} style={{ textDecoration: 'none' }}>
      <StyledCard>
        <CardMedia
          component="img"
          image={first_image || NoImage}
          style={{ borderRadius: 13, width: 120, height: 120 }}
        />
        <StyledCardContent>
          <div>
            <Typography variant="h6">{price}$</Typography>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 15 }} color="disabled" />
              <Typography variant="subtitle2">{location.address}</Typography>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', columnGap: 22 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <ShowerOutlinedIcon className="featureIcon" fontSize="medium" />
              <span>{living_space.bathrooms}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <BedOutlinedIcon className="featureIcon" fontSize="medium" />
              <span>{living_space.bedrooms}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <SquareFootIcon className="featureIcon" fontSize="medium" />
              <span>{area}</span>
            </div>
          </div>
        </StyledCardContent>
        <IconButton onClick={(e) => {
          setSelectedMarker(null)
          e.stopPropagation(); // Stop the event from propagating
          e.preventDefault()
        }}>
          <CloseIcon />
        </IconButton>
      </StyledCard>
    </Link>
  );
};

export default MapCard;
