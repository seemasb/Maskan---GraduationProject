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
import Panorama from "../../Components/Panorama";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



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


const StyledDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-bottom: 43px;

  /* Media query to make the div responsive */
//   @media (max-width: 768px) {
//     width: 90%;
//   }
`;


export default function PropertyDetails() {
  let { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState();
  
  useEffect(() => {
    const getPropertyDetails = async () => {
      try {
        const userToken = localStorage.getItem('Token')
        let header;
        userToken ? header = {
          'Authorization': 'Token ' + userToken
        } : header = {};
        const fetchData = await axios.get(`${ROOT_URL}/properties/home/${propertyId}/`, { headers: header })
        setPropertyDetails(fetchData.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPropertyDetails()
  },[])
 
  const images360 = [
    'https://i0.wp.com/www.samrohn.com/wp-content/uploads/50-RSB-360-Virtual-Tour-0001.jpg?fit=600%2C300',
    'https://res.insta360.com/static/49fcf323b6d04cb8f6a1a81fa6ec0436/3.jpg',
    'https://thumbs.dreamstime.com/b/360-virtual-tour-photo-house-bedroom-165152107.jpg'
  ]
  return (
    <DescriptionContainer>

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <BackButtonWrapper>
            <BackButtonIcon onClick={() => { window.location.href = '/Properities' }} >
              <ArrowBack />
            </BackButtonIcon>
            <BackButtonText variant="body1" cursor='alise'>Back to Search</BackButtonText>
          </BackButtonWrapper>
        </Grid>
        {propertyDetails ? (
          <Grid item md={8} sm={12}>
            <PropertyGallary propertyDetails={propertyDetails} />
            <StyledDiv>
              <h2>360 Property view </h2>
              <Carousel
                plugins={['arrows']}
                slidesPerPage={3}
                slidesPerScroll={1}
                draggable={false}
                infinite
              >
                {images360.map((item, index) =>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Panorama image={item} index={index} />
                  </div>
                )}
              </Carousel>
            </StyledDiv>
            <PropertyDetailsS1 propertyDetails={propertyDetails} />
            {/* <Grid item md={8} sm={12}> */}
            {/* <Carousel
                plugins={['arrows']}
                slidesPerPage={3}
                slidesPerScroll={1}
                draggable={false}
                infinite
              >
                {images360.map((item, index) =>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Panorama image={item} index={index} />
                  </div>
                )}
              </Carousel> */}
            {/* </Grid> */}
          </Grid>


        )
          : <Loading />}


        {propertyDetails ? (
          <Grid item md={4} sm={12}>
            <PropertyDetailsS2 propertyDetails={propertyDetails} />
            {/* <Button onClick={handleClickOpen} className="SignInBtn" startIcon={<ViewInArIcon />}>
              360 View
            </Button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}

            >
              <Panorama />
            </Dialog> */}
          </Grid>

        )
          : <Loading />}



      </Grid>
    </DescriptionContainer >
  )
}