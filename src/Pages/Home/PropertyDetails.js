import PropertyGallary from "../../Components/PropertyDetailsComponents/PropertyGallary"
import Grid from '@mui/material/Grid';
import PropertyDetailsS1 from "../../Components/PropertyDetailsComponents/PropertyDetailsS1";
import PropertyDetailsS2 from "../../Components/PropertyDetailsComponents/PropertyDetailsS2";
import styled from 'styled-components';
import { IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";


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

// {
//   "id": 7,
//   "living_space": {
//       "id": 6,
//       "home": 7,
//       "bedrooms": 1,
//       "bathrooms": 1,
//       "kitchens": 2,
//       "balconies": 0,
//       "halls": 1,
//       "living_rooms": 0
//   },
//   "features": {
//       "data": [
//           {
//               "key": "elevator"
//           },
//           {
//               "key": "gym"
//           }
//       ],
//       "home": 7,
//       "_id": "6435f19cc11ba430eede6bb4"
//   },
//   "ownership": null,
//   "images": [],
//   "apartment": {
//       "id": 1,
//       "home": 7,
//       "floor": 3,
//       "out_of_floors": 4
//   },
//   "house": null,
//   "location": {
//       "id": 6,
//       "home": 7,
//       "coordinates": "SRID=4326;POINT (1.003774925955496 1.006644460973862)",
//       "address": "lkljhgu",
//       "city": "New York",
//       "data": {
//           "latitude": "1.003774925955496",
//           "longitude": "1.006644460973862"
//       }
//   },
//   "price": 250000,
//   "area": 250,
//   "description": "kljfcvhjjkbhj",
//   "add_date": "2023-04-11T23:47:36.641189Z",
//   "built_year": 2020,
//   "views": 4,
//   "type": "AP",
//   "state": "S",
//   "is_pending": true,
//   "owner": 1,
//   "favourite_by": [],
//   "visited_by": []
// }




export default function PropertyDetails() {
  // const [propertyDetails , setPropertyDetails] = useState();

  // useEffect(() => {
  //   const getPropertyDetails = async () => {
  //     try {
  //       const fetchData = await axios.get(API_URI, {
  //         headers: {
  //           authorization: 'Bearer JWT Token',
  //         },
  //       })
  //       setPropertyDetails(fetchData.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // })

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
          <PropertyGallary />
          <PropertyDetailsS1 />
        </Grid>
        <Grid item md={4} sm={12}>
          <PropertyDetailsS2 />
        </Grid>
      </Grid>

    </DescriptionContainer>
  )
}