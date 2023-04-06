import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  searchButton: {
    backgroundColor: '#45729d',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#305f83',
    },
  },
}));

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://example.com/real-estate-background.jpg');
  background-size: cover;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
`;

const Slogan = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const HomeHero = () => {
  const classes = useStyles();

  return (
    <HomeContainer>
      <SearchContainer>
        <Slogan variant="h1">Find Your Dream Home</Slogan>
        <FormControl className={classes.formControl}>
          <InputLabel id="property-type-label">Property Type</InputLabel>
          <Select labelId="property-type-label" id="property-type-select">
            <MenuItem value="house">House</MenuItem>
            <MenuItem value="apartment">Apartment</MenuItem>
            <MenuItem value="condo">Condo</MenuItem>
            <MenuItem value="townhouse">Townhouse</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Location" variant="outlined" margin="normal" />
        <Button variant="contained" className={classes.searchButton}>
          Search
        </Button>
      </SearchContainer>
    </HomeContainer>
  );
};

export default HomeHero;


// generate a home coponent for a real estate website using react , material ui and styled components with the following: 
// - responsive design
// - image back ground related to real estate
// - search component at the middle , drop down for property type , search button
// - use color #45729d for styling
// - add slogan related to real estate