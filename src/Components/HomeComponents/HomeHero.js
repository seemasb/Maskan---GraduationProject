import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Hero from '../../Images/hero.jpg'

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
  return (
    <HomeContainer>
      <RootContainer maxWidth="md">
        <Slogan1 variant="h4" align="center" gutterBottom>
          Let's find a home that's perfect for you !
        </Slogan1>
        {/* <Slogan variant="h5">Your Home, Our Passion</Slogan> */}
        <FormContainer>
          {/* <Typography variant="h4" align="center" gutterBottom>
            Find Your Dream Home
          </Typography> */}
          <SearchForm noValidate autoComplete="off">
            <SearchField
              variant="outlined"
              label="Search by city, address"
              placeholder="Enter city or address"
              InputProps={{
                endAdornment: (
                  <SearchIconWrapper fontSize="small" color="primary" />
                ),
              }}
            />
            {/* <SearchButton variant="contained" size="large" fullWidth>
              Search
            </SearchButton> */}
          </SearchForm>
        </FormContainer>
        {/* <Slogan variant="h5">Your Home, Our Passion</Slogan> */}
      </RootContainer>
    </HomeContainer>
  );
}

export default HomeHero;

