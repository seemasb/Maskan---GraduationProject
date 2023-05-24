import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Favorite, Share, MailOutline } from '@material-ui/icons';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@mui/material/Divider';
import OwnerCard from './OwnerCard';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import ROOT_URL from '../../config';

// properties/home/<int:pk>/toggle_favorite/



const PropertyDetails = ({ propertyDetails }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  
  async function addToFavorite() {
    const id_home = 1;

    const userToken = localStorage.getItem('Token')
    let header;
    userToken ? header = {
      'Authorization': 'Token ' + userToken
    } : header = {}

    axios.post(`${ROOT_URL}/properties/home/${id_home}/toggle_favorite/`, {}, {
      headers: header
    }
    )
      .then(function (response) {
        console.log(response.data);
        setIsFavourite(response.data.is_favorite)

      })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userToken = localStorage.getItem('Token');
        while (!userToken) {
          // Wait until token is restored from local storage
          await new Promise(resolve => setTimeout(resolve, 100));
          userToken = localStorage.getItem('Token');
        }
        const header = userToken ? {
          'Authorization': 'Token ' + userToken
        } : {};
        axios.get(`${ROOT_URL}/properties/home/${propertyDetails.id}/toggle_favorite/`, {
          headers: header
        })
          .then(function (response) {
            console.log('is fav:', response.data.is_favorite)
            setIsFavourite(response.data.is_favorite);
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
            setIsFavourite(false);
          });
      } catch (error) {
        console.log(error);
        setIsFavourite(false);
      }
    };
    fetchData();
  }, [isFavourite]);

  return (
    <PropertyDetailsContainer>
      <DetailsContainer>
        <div>
          <Price>${propertyDetails.price}/Year</Price>
          <EstimatedPrice>Maskan Estimated: <span style={{color: '#45729d'}}>${propertyDetails.prediction}</span></EstimatedPrice>
          <StyledLocation>
            <LocationOnIcon style={{ color: '#9e9e9e' }} />
            {propertyDetails.location.address}
          </StyledLocation>
        </div>
        <StyledDivider />
        <StyledRow>
          <StyledFeature>
            <LocalHotelIcon style={{ color: '#9e9e9e' }} />
            <div>
              {propertyDetails.living_space.bedrooms} Bedrooms
            </div>
          </StyledFeature>
          <StyledFeature>
            <BathtubIcon style={{ color: '#9e9e9e' }} />
            <div>
              {propertyDetails.living_space.bathrooms} Bathrooms
            </div>
          </StyledFeature>
          <StyledFeature>
            <KitchenIcon style={{ color: '#9e9e9e' }} />
            <div>
              {propertyDetails.living_space.kitchens} Kitchens
            </div>
          </StyledFeature>
          <StyledFeature>
            <AspectRatioIcon style={{ color: '#9e9e9e' }} />
            <div>
              {propertyDetails.area} sqft
            </div>
          </StyledFeature>
        </StyledRow>
      </DetailsContainer>
      {/* <StyledDivider />
      <OwnerCard/> */}
      <ButtonsContainer>
        <ButtonContainer>
          {localStorage.getItem('Token') ?
            <IconButton aria-label="add to favorites" onClick={addToFavorite}>
              <Favorite color={isFavourite ? 'primary' : 'disabled'} />
            </IconButton>
            :

            <></>}

          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </ButtonContainer>
        {/* <Button variant="contained" startIcon={<MailOutline />}>
          Request more info
        </Button> */}

        <InfoButtonStyled variant="contained" startIcon={<MailOutline />}>
          Request more info
        </InfoButtonStyled>
      </ButtonsContainer>
      <StyledBuyButton variant="contained" type="submit" onClick={() => { }}>
        Buy now
      </StyledBuyButton>
    </PropertyDetailsContainer>
  );
};


const InfoButtonStyled = styled(Button)`
//   margin-right: 8px;
  background-color: #FFFFFF !important;
  color: #45729d !important;
  border-radius: 8px !important;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #45729d !important;
    color: #FFFFFF !important;
    // color: #FFFFFF;
  }
`;


const StyledBuyButton = styled(Button)({
  background: 'linear-gradient(45deg, #45729d 30%, #94a3b5 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white !important',
  height: 48,
  padding: '0 30px',
  margin: '32px 0 0 0 !important',
  width: '100%',
  '&:hover': {
    boxShadow: '0 6px 10px 5px #94a3b5',
  },
});

const StyledDivider = styled(Divider)`
  margin: 10px 0;
  background-color: lightgray;
  height: 2px;
  width: 30px;
`;

const StyledLocation = styled.div`
  display: flex;
  align-items: center;
  color: #9e9e9e;
  font-size: 13px;
`;

const PropertyDetailsContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  // box-shadow: 0px 0px 10px ${grey[400]};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  // width: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const EstimatedPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: darkslategray;

`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 12px;
  // margin-bottom: 8px;
`;

const StyledFeature = styled.div`
align-items: flex-start;
margin-right: 16px;
// box-shadow: 0 1px 3px rgba(0,0,0,0.2);
padding: 7px 0px 7px 7px;
border-radius: 4px;
display: flex;
flex-direction: column;
width: 110px;
// width: 40%;

@media (max-width: 1200px) {
  width: 150px;
    }

  `;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;

  &:hover {
    color: #ff9800;
  }
`;

export default PropertyDetails;
