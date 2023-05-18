import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Hero from '../../Images/hero.jpg'
import { Autocomplete,Paper  } from '@mui/material';
import { useState,useEffect } from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url(${Hero}) no-repeat center center fixed;
  background-size: cover;
  // background-size: 80%;
  margin: 30px;
  border-radius: 50px;
`;
const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 16px;
  width: 100%;
`;

const SearchField = styled(TextField)`
  // margin-top: 8px;
  width: 100%;
`;

const SearchIconWrapper = styled(SearchIcon)`
  margin-right: 8px;
`;

const RootContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-left: -16px;
  // margin-right: -16px;
  border-radius: 16px;
  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    border-radius: 0;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  // padding: 32px;
  border-radius: 16px;
  @media (min-width: 600px) {
    // padding: 5px;
  }
`;

const SearchButton = styled(Button)`
  background-color: #45729d;
  color: white;
  margin-top: 16px;
  &:hover {
    background-color: #2e4b66;
  }
`;

const Slogan = styled(Typography)`
  color: darkslategray;
  font-size: 11px;
  text-align: center;
  // margin-top: 32px;
  @media (min-width: 600px) {
    // font-size: 2rem;
    // margin-top: 48px;
  }
`;

const Slogan1 = styled(Typography)`
font-size: 70px !important;
font-weight: bold !important;
color: #2c4a66;
`

function HomeHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [autocompleteOptions,serAutocompleteOptions] = useState([
    'New York',
    'Los Angeles',
    'Philadelphia',
    'Phoenix',
    'San Antonio',
    'Houston'
  ]);
  const navigate = useNavigate();
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    console.log('Search query:', searchQuery);
  }, [searchQuery]);


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/Properities?city=${searchQuery}`);
    console.log('Search query:', searchQuery);
  };
  return (
    <HomeContainer>
      <RootContainer maxWidth="md">
        <Slogan1 variant="h4" align="center" gutterBottom>
          Let's Find A Perfect Home For You !
        </Slogan1>
        <FormContainer>
          <SearchForm noValidate autoComplete="off" onSubmit={handleSearchSubmit}>
            <Autocomplete
              options={autocompleteOptions}
              fullWidth ={true}
              ListboxComponent={Paper}
              renderInput={(params) => (
                <SearchField
                  {...params}
                  variant="outlined"
                  label="Search by city, address"
                  placeholder="Enter city or address"
                  value={searchQuery}
                  onInput={handleSearchQueryChange}
                  onChange={handleSearchQueryChange}
                  fullWidth={true}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <IconButton type="submit" aria-label="search">
                        <SearchIcon fontSize="medium" color="primary" />
                      </IconButton>
                    ),
                  }}
                />
              )}
            />
          </SearchForm>
        </FormContainer>
        {/* <FormContainer>
          <SearchForm noValidate autoComplete="on" onSubmit={handleSearchSubmit}>
            <SearchField
              variant="outlined"
              label="Search by city, address"
              placeholder="Enter city or address"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              InputProps={{
                endAdornment: (
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon fontSize="medium" color="primary" />
                  </IconButton>
                ),
              }}
            />
          </SearchForm>
        </FormContainer> */}
      </RootContainer>
    </HomeContainer>
  );
}

export default HomeHero;

