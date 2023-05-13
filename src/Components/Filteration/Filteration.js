import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Filteration.css'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Button,
  Switch,
  CircularProgress,
  Slider,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from "../Card/Card";
import Loading from "../Loading";

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #45729d 30%, #94a3b5 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  width: '50%',
  // boxShadow: '0 3px 5px 2px #94a3b5',
  '&:hover': {
    boxShadow: '0 6px 10px 5px #94a3b5',
  },
});

const StyledResetFilters = styled(Button)({
  padding: 5
})

const StyledTextField = styled(TextField)({
  margin: '0 8px',
})

const cities = ["Jerusalem", "Ramallah", "Bethlehem", "Nablus", "Hebron"];
const statuses = ["Rent", "Sell"];
const types = ["Home", "Apartment"];

export default function Filteration() {
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [areaRange, setAreaRange] = useState([300, 10000]);
  const [priceRange, setPriceRange] = useState([50000, 1000000]);
  const [features, setFeatures] = useState({
    swimmingPool: false,
    garden: false,
    balcony: false,
    garage: false,
    Elevator: false,
    Gym: false,
    Mafrosh: false,
    accessable: false,
  });
  const [showFeatures, setShowFeatures] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [featuresFinalVersion, setFeaturesFinalVersion] = useState([]);
  const [cardsResponse, setCardsResponse] = useState([]);
  const [dataFlag, setDataFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    var tempFeatures = []
    for (let key in features) {
      if (features[key]) {
        tempFeatures.push(key);
      }
    }
    setFeaturesFinalVersion(tempFeatures);
    // const FilterationReq = {
    //   city: city,
    //   state: status,
    //   type: type,
    //   min_area: areaRange[0],
    //   max_area: areaRange[1],
    //   min_price: priceRange[0],
    //   max_price: priceRange[1],
    //   features: featuresFinalVersion,
    // }

    // try {
    //   // const response = await axios.post('/search', { });
    //   // console.log(response.data);
    //   console.log(FilterationReq);
    // } catch (error) {
    //   console.error(error);
    // }

    // setIsLoading(false);
  };

  useEffect(() => {


    const FilterationReq = {
      city: city,
      state: status,
      type: type,
      min_area: areaRange[0],
      max_area: areaRange[1],
      min_price: priceRange[0],
      max_price: priceRange[1],
      features: featuresFinalVersion,
    }

    const Search = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/houses/', {
          params: {
            city: city,
            state: status,
            type: type,
            min_area: areaRange[0],
            max_area: areaRange[1],
            min_price: priceRange[0],
            max_price: priceRange[1],
            features: featuresFinalVersion.join(','),

          }
        });
        // console.log(response.data);
        console.log(FilterationReq);
        setCardsResponse(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    Search();
    setIsLoading(false);

    console.log(featuresFinalVersion)
  }, [featuresFinalVersion])

  useEffect(() => {

    console.log('im in use effect: ', cardsResponse)
    // if([]){
    //   console.log("trueeeeeeeeeee")
    // }
    if (cardsResponse.length != 0) setDataFlag(true);
    else setDataFlag(false);

  }, [cardsResponse])
  const handleToggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleAreaChange = (event, newValue) => {
    setAreaRange(newValue);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFeatureChange = (event) => {
    setFeatures({
      ...features,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClearFilters = () => {
    setCity("");
    setStatus("")
    setPriceRange([50000, 1000000]);
    setAreaRange([300, 10000]);
    setFeatures({
      swimmingPool: false,
      garden: false,
      balcony: false,
      garage: false,
      Elevator: false,
      Gym: false,
      Mafrosh: false,
      accessable: false,
    });
  };

  const handleApplyFilters = () => {
    // Do something with the selected filters
  };

  return (
    <div>
      <div className="Filteration">
        <form onSubmit={handleSubmit} className="FilterationForm">
          <div className="dropdownsFilters">
            <FormControl variant="outlined" sx={{ minWidth: 150 }} className="dropdownCities" size="small">
              <InputLabel id="city-label">City</InputLabel>
              <Select
                labelId="city-label"
                id="city"
                value={city}
                onChange={handleCityChange}
                label="City"
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 150 }} className="dropdownStatus" size="small">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                value={status}
                onChange={handleStatusChange}
                label="Status"
              >
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* <FormControl variant="outlined" sx={{ m: 1, minWidth: 150, display: 'none' }}>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            value={type}
            onChange={handleTypeChange}
            label="Type"
          >
            {types.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}

          <div className="sliderFilters">
            <div className="areaSlider">
              <span id="area-slider" className="slider">
                Area Range (sq.)
              </span>
              <Slider
                value={areaRange}
                onChange={handleAreaChange}
                valueLabelDisplay="auto"
                aria-labelledby="area-slider"
                min={300}
                max={10000}
                size="small"
              />
            </div>
            <div className="priceSlider">
              <span id="price-slider" className="slider">
                Price Range ($)
              </span>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="price-slider"
                min={50000}
                max={1000000}
                size="small"
              />
            </div>
          </div>


          <div className="featuresANDsearchbtn">
            <div style={{display: 'flex' , justifyContent: 'space-between' , width: '50%'}}>
              <FormControlLabel
                control={<Switch checked={showFeatures} onChange={handleToggleFeatures} />}
                label="Show features"
                // className="features"
                sx={{
                  color: '#94a3b5',
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem', // set the font size to 0.9rem
                  },
                }}
              />

              <StyledResetFilters variant="outlined" onClick={handleClearFilters}>Reset Filters</StyledResetFilters>
            </div>
            <StyledButton variant="contained" type="submit">
              {isLoading ? <CircularProgress size={24} /> : 'Search'}
            </StyledButton>
          </div>

          {showFeatures ?
            <div>
              <FormControl component="fieldset">
                <FormGroup className="featuresBox"
                  sx={{ display: 'flex', flexDirection: 'row' }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.swimmingPool}
                        onChange={handleFeatureChange}
                        name="swimmingPool"
                      />
                    }
                    label="Swimming Pool"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.garden}
                        onChange={handleFeatureChange}
                        name="garden"
                      />
                    }
                    label="Garden"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.balcony}
                        onChange={handleFeatureChange}
                        name="balcony"
                      />
                    }
                    label="Balcony"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.garage}
                        onChange={handleFeatureChange}
                        name="garage"
                      />
                    }
                    label="Garage"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.accessable}
                        onChange={handleFeatureChange}
                        name="accessable"
                      />
                    }
                    label="Accessable"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.Elevator}
                        onChange={handleFeatureChange}
                        name="Elevator"
                      />
                    }
                    label="Elevator"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.Gym}
                        onChange={handleFeatureChange}
                        name="Gym"
                      />
                    }
                    label="Gym"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={features.Mafrosh}
                        onChange={handleFeatureChange}
                        name="Mafrosh"
                      />
                    }
                    label="Furnished"
                    sx={{
                      color: '#94a3b5',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '0.9rem', // set the font size to 0.9rem
                      },
                    }}
                  />
                </FormGroup>
              </FormControl>
            </div>
            : <></>}


        </form>
      </div>



      <div className="filterationHomeCards">
        <div className="FilteredCards">
          {cardsResponse.length ?
            cardsResponse.map((element) =>
              <Card data={element} key={element.id} />
            )
            :
            <Loading />
            // dataFlag ? <div>No data found</div> : <Loading />

          }
        </div>
      </div>
    </div>
  )
}
