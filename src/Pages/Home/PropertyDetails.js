import PropertyGallary from "../../Components/PropertyDetailsComponents/PropertyGallary"
import Grid from '@mui/material/Grid';
import PropertyDetailsS1 from "../../Components/PropertyDetailsComponents/PropertyDetailsS1";
import PropertyDetailsS2 from "../../Components/PropertyDetailsComponents/PropertyDetailsS2";
import styled from 'styled-components';
import { IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import axios from "axios";
import ROOT_URL from "../../config";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { useParams } from "react-router-dom";



const DescriptionContainer = styled('div')({
  padding: '40px 40px 0 40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
// #94a3b5
// #45729d
const BackButtonIcon = styled(IconButton)`
  && {
    color: #ffffff;
    background-color: #45729d;
    margin-right: 1rem;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

const BackButtonText = styled(Typography)`
  && {
    color: dimgray;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;



export default function PropertyDetails() {
  let { propertyId } = useParams();
  // console.log('in property details' , propertyId)
  const [propertyDetails, setPropertyDetails] = useState();
  useEffect(() => {
    const getPropertyDetails = async () => {
      try {
        const fetchData = await axios.get(`${ROOT_URL}/properties/home/${propertyId}/`)
        setPropertyDetails(fetchData.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPropertyDetails()
  }, [])

  return (
    <DescriptionContainer>

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <BackButtonWrapper>
            <BackButtonIcon onClick={() => { }}>
              <ArrowBack />
            </BackButtonIcon>
            <BackButtonText variant="body1">Back to Search</BackButtonText>
          </BackButtonWrapper>
        </Grid>
        {propertyDetails ? (
          <Grid item md={8} sm={12}>
            <PropertyGallary propertyDetails={propertyDetails} />
            <PropertyDetailsS1 propertyDetails={propertyDetails} />
          </Grid>

        )
          : <Loading />}


        {propertyDetails ? (
          <Grid item md={4} sm={12}>
            <PropertyDetailsS2 propertyDetails={propertyDetails} />
          </Grid>

        )
          : <Loading />}

      </Grid>
    </DescriptionContainer>
  )
}