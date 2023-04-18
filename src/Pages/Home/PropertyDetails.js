import PropertyGallary from "../../Components/PropertyDetailsComponents/PropertyGallary"
import Grid from '@mui/material/Grid';
import PropertyDetailsS1 from "../../Components/PropertyDetailsComponents/PropertyDetailsS1";
import PropertyDetailsS2 from "../../Components/PropertyDetailsComponents/PropertyDetailsS2";
import styled from 'styled-components';
import { IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";



const DescriptionContainer = styled('div')({
  padding: '40px 40px 0 40px'
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
  const [propertyDetails , setPropertyDetails] = useState();
  useEffect(() => {
    const getPropertyDetails = async () => {
      try {
        const fetchData = await axios.get('http://127.0.0.1:8001/home/10/')
        setPropertyDetails(fetchData.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPropertyDetails()
  },[])

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
                <Grid item md={8} sm={12}>
                    {propertyDetails?<PropertyGallary propertyDetails={propertyDetails} />:<div>Loading...</div>}
                    {propertyDetails?<PropertyDetailsS1 propertyDetails={propertyDetails} />:<div>Loading...</div>}
                </Grid>
                <Grid item md={4} sm={12}>
                  {propertyDetails?<PropertyDetailsS2 propertyDetails={propertyDetails} />:<div>Loading...</div>}
                </Grid>
            </Grid>

  {/* return (
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
        <Grid item md={8} sm={12}>
          <PropertyGallary />
          <PropertyDetailsS1 />
        </Grid>
        <Grid item md={4} sm={12}>
          <PropertyDetailsS2 />
        </Grid>
      </Grid> */}

    </DescriptionContainer>
  )
}