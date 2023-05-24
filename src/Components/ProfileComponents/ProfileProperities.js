// import React from "react";
// import { Box, Button, Typography } from "@material-ui/core";
// import { Favorite, HourglassEmpty, PostAdd } from "@material-ui/icons";
// import styled from "styled-components";

// const StyledButton = styled(Button)`
//   && {
//     background-color: #fff;
//     border: 2px solid #45729d;
//     border-radius: 10px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     color: #45729d;
//     margin: 10px;
//     padding: 10px;
//     text-transform: none;

//     &:hover {
//       border-color: #fff;
//       color: #fff;
//       background-color: #45729d;
//     }

//     &.Mui-selected {
//       border-color: #fff;
//       color: #fff;
//       background-color: #45729d;
//     }
//   }
// `;

// const ButtonWithIcon = ({ icon, label, count, selected, onClick }) => (
//   <StyledButton
//     variant="outlined"
//     startIcon={icon}
//     selected={selected}
//     onClick={onClick}
//   >
//     <Box display="flex" flexDirection="column" alignItems="center">
//       <Box display="flex" alignItems="center">
//         {count !== undefined && (
//           <Typography variant="h5" color="textPrimary">
//             {count}{" "}
//           </Typography>
//         )}
//         <Typography variant="h6" color="textPrimary">
//           {label}
//         </Typography>
//       </Box>
//       <Typography variant="body2" color="textSecondary">
//         {count !== undefined && `${count} ${label.toLowerCase()}`}
//       </Typography>
//     </Box>
//   </StyledButton>
// );

// const ProfileProperities = () => (
//   <Box display="flex" flexWrap="wrap">
//     <ButtonWithIcon
//       icon={<Favorite />}
//       label="Favorite Properties"
//       count={7}
//       selected={false}
//       onClick={() => console.log("Favorite Properties clicked")}
//     />
//     <ButtonWithIcon
//       icon={<HourglassEmpty />}
//       label="Pending Properties"
//       count={3}
//       selected={true}
//       onClick={() => console.log("Pending Properties clicked")}
//     />
//     <ButtonWithIcon
//       icon={<PostAdd />}
//       label="Posted Properties"
//       count={12}
//       selected={false}
//       onClick={() => console.log("Posted Properties clicked")}
//     />
//   </Box>
// );

// export default ProfileProperities;


import React from 'react';
import Button from '@mui/material/Button';
import AddHomeWorkTwoToneIcon from '@mui/icons-material/AddHomeWorkTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import styled from 'styled-components';
// import { useState } from 'react';
import Card from '../Card/Card';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from "react";
import axios from "axios";
import ROOT_URL from '../../config';
const ProfileProperitiesContainer = styled('div')`
// margin: 0 0 0 50px;
display: flex;
flex-direction: column;
row-gap: 70px;
`


const ButtonsDiv = styled('div')`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 70%;
justify-content: space-between;
// margin: 0 0 0 50px;
row-gap: 30px;
// margin-top: 10vh;
`

const StyleTitle = styled('span')`
font-size: 16px;
`

const StyledButton = styled(Button)`
display: flex;
flex-direction: column;
background-color: white !important;
justify-content: space-evenly !important;
// background-color: rgba(250, 249, 249, 0.623) !important;
color: #3f51b5 !important;
border-radius: 8px !important;
height: 111px;
width: 30%;
transition: border-color 0.2s ease-in-out;
&:hover,
&:focus {
    border: 2px solid #1976d2;
    background-color: #45729d !important;
    color: white !important;
}
`

const StyledNoResult = styled('span')`
    font-size: 22px;
    color: darkgray;
`



export default function ProfileProperities() {
  const [selectedButton, setSelectedButton] = useState("favorites");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = localStorage.getItem('Token')
        let header;
        userToken ? header = {
          'Authorization': 'Token ' + userToken
        } : header = {};
        const endpoint = getEndpoint(selectedButton);
        const response = await axios.get(endpoint, {headers:header});
        setData(response.data);
        setCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedButton]);

  const getEndpoint = (selectedButton) => {
    switch (selectedButton) {
      case "favorites":
        return `${ROOT_URL}/properties/favourites_home_list/`;
      case "pending":
        return `${ROOT_URL}/properties/pending_home_list/`;
      case "posted":
        return `${ROOT_URL}/properties/posted_home_list/`;
      default:
        return "";
    }
  };

  return (
    <ProfileProperitiesContainer>
      <ButtonsDiv>
        <StyledButton
          color="primary"
          variant="contained"
          onClick={() => {
            setSelectedButton("favorites");
          }}
        >
          <FavoriteTwoToneIcon style={{ fontSize: "2.5rem" }} />
          <StyleTitle>{(selectedButton === "favorites" && count !== null) &&
            `${count} `}Favorites</StyleTitle>
        </StyledButton>
        <StyledButton
          variant="contained"
          startIcon={<HourglassFullTwoToneIcon style={{ fontSize: "2.5rem" }} />}
          onClick={() => {
            setSelectedButton("pending");
          }}
        >
        <StyleTitle>{(selectedButton === "pending" && count !== null) && `${count} `}Pending</StyleTitle>
        </StyledButton>
        <StyledButton
          variant="contained"
          className="selectProperty"
          startIcon={<AddHomeWorkTwoToneIcon style={{ fontSize: "2.5rem" }} />}
          onClick={() => {
            setSelectedButton("posted");
          }}
        >
        <StyleTitle>{(selectedButton === "posted" && count !== null) && `${count} `}Posted</StyleTitle>
        </StyledButton>
      </ButtonsDiv>
      <div>
        {selectedButton === "favorites" &&
          (
            <div style={{ display: "flex", columnGap: "40px" }}>
                {data.length > 0 ? 
                (
                    data.map((item) => (<Card key={item.id} data={item} />))) : 
                (
                    <StyledNoResult>No Posted properties</StyledNoResult>
                )}
            </div>
        )}
        
        {selectedButton === "pending" && (
            <div style={{ display: "flex", columnGap: "40px" }}>
                {data.length > 0 ? 
                (
                    data.map((item) => (<Card key={item.id} data={item} />))) : 
                (
                    <StyledNoResult>No Posted properties</StyledNoResult>
                )}
            </div>
        )}
        {selectedButton === "posted" && (
          <div style={{ display: "flex", columnGap: "40px" }}>
            {data.length > 0 ? 
            (
                data.map((item) => (<Card key={item.id} data={item} />))) : 
            (
                <StyledNoResult>No Posted properties</StyledNoResult>
            )}
          </div>
        )}
      </div>
    </ProfileProperitiesContainer>
  );
}

// export default function ProfileProperities() {

//     const [selectedButton, setSelectedButton] = useState("favorites")

//     return (
//         <ProfileProperitiesContainer>
//             <ButtonsDiv>
//                 <StyledButton
//                     color='primary'
//                     variant="contained"
//                     // startIcon={<HouseIcon style={{ fontSize: '2.5rem' }} />}
//                     onClick={() => { setSelectedButton("favorites") }}
//                 >
//                     <FavoriteTwoToneIcon style={{ fontSize: '2.5rem' }} />
//                     <StyleTitle>3 Favorites</StyleTitle>
//                 </StyledButton>
//                 <StyledButton
//                     variant="contained"
//                     startIcon={<HourglassFullTwoToneIcon style={{ fontSize: '2.5rem' }} />}
//                     onClick={() => { setSelectedButton("pending") }}
//                 >
//                     <StyleTitle> 1 Pending</StyleTitle>
//                 </StyledButton>
//                 <StyledButton

//                     variant="contained"
//                     className='selectProperty'
//                     startIcon={<AddHomeWorkTwoToneIcon style={{ fontSize: '2.5rem' }} />}
//                     onClick={() => { setSelectedButton("posted") }}
//                 >
//                     <StyleTitle>0 Posted</StyleTitle>
//                 </StyledButton>
//                 {/* </ButtonGroup> */}
//             </ButtonsDiv>
//             <div>
//                 {
//                     selectedButton == "favorites" && <Card />
//                     ||
//                     selectedButton == "pending" &&
//                     <div style={{ display: 'flex', columnGap: '40px' }}>
//                         <Card />
//                         <Card />
//                     </div>
//                     ||
//                     selectedButton == "posted" && <StyledNoResult>No Posted properties</StyledNoResult>
//                     // <Grid spacing={3}> 
//                     //     <Grid item md={4}>
//                     //         <Card />
//                     //     </Grid>
//                     //     <Grid item md={4}>
//                     //         <Card />
//                     //     </Grid>
//                     // </Grid>
//                 }

//             </div>
//         </ProfileProperitiesContainer>
//     )

// }