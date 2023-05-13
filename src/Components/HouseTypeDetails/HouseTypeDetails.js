import './HouseTypeDetails.css'
import { useState, forwardRef } from 'react';
import { TextField, Checkbox, FormControlLabel, FormGroup, Button, Grid } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MenuItem, FormControl, InputLabel, Select, CircularProgress } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { FaBath, FaBed } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';
import { TbToolsKitchen2 } from 'react-icons/tb';
import Divider from '@mui/material/Divider';
import { FaDumbbell, FaTree, FaSwimmingPool } from 'react-icons/fa';
import { MdElevator, MdBalcony, MdGarage } from 'react-icons/md';
import { AiFillInfoCircle } from 'react-icons/ai'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import ROOT_URL from '../../config';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styles = {
    formGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '30px',
    },
};

const currencyOptions = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'GBP', label: '£' },
];

const statusOptions = [
    { value: 'sell', label: 'Sell' },
    { value: 'rent', label: 'Rent' },
];

const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #45729d 30%, #94a3b5 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white !important',
    height: 48,
    padding: '0 30px',
    width: '50%',
    // boxShadow: '0 3px 5px 2px #94a3b5',
    '&:hover': {
        boxShadow: '0 6px 10px 5px #94a3b5',
    },
});

export default function HouseTypeDetails({setHomeAddedId}) {
    const [area, setArea] = useState('');
    const [numFloors, setNumFloors] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState({
        lat: 1,
        lng: 1,
    });
    const [numBathrooms, setNumBathrooms] = useState(0);
    const [numBedrooms, setNumBedrooms] = useState(0);
    const [numHalls, setNumHalls] = useState(0);
    const [numKitchens, setNumKitchens] = useState(0);
    const [elevator, setElevator] = useState(false);
    const [balcony, setBalcony] = useState(false);
    const [garage, setGarage] = useState(false);
    const [gym, setGym] = useState(false);
    const [garden, setGarden] = useState(false);
    const [swimmingPool, setSwimmingPool] = useState(false);
    const [mafrog, setMafrog] = useState(false);
    const [builtYear, setBuiltYear] = useState(null);
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [notes, setNotes] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);



    const handleSnackBar = (event) => {
        setOpen(true);
        console.log('hello')
        let featuresArray = [elevator, balcony, garage, gym, garden, swimmingPool, mafrog]
        let featuresArrayFiltered = [];
        featuresArray.map((feature) => {
            if (feature) {
                featuresArrayFiltered.push({
                    key: feature
                    // icon: ''
                })
            }
        })

        // event.preventDefault();
        const PropertyData = {
            price: price,
            area: area,
            state: status,
            description: notes,
            built_year: '2020',
            type: 'AP',
            //owner: '22',

            living_space: {
                bedrooms: numBedrooms,
                bathrooms: numBathrooms,
                kitchens: numKitchens,
                halls: numHalls
            },
            features: {
                data: featuresArrayFiltered
            },
            location: {
                coordinates: {
                    x: location.lat,
                    y: location.lng
                },
                address:address,
                city:city
            },
            apartment: {
                floor: numFloors,
                out_of_floors: '4'
            }
        };
        const userToken =localStorage.getItem('Token')
        let header;
        userToken ? header={
            'Authorization': 'Token '+ userToken
        }: header ={}

        axios.post(`${ROOT_URL}/properties/home_list/`, {
            PropertyData
        }, {
            headers: header
        }
        )
            .then(function (response) {
                console.log(response.data.id);
                setHomeAddedId(response.data.id)
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('in sending');
        console.log(PropertyData);

    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleBuiltYearChange = (date) => {
        setBuiltYear(date);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        setPrice('');
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };


    const handleLocationChange = (location) => {
        setLocation(location);
    };

    // const handleDelete = (chipToDelete: string) => {
    //     setPersonName((chips) => chips.filter((chip) => chip !== chipToDelete));
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to your backend here
        // console.log({
        //     area,
        //     numFloors,
        //     price,
        //     city,
        //     address,
        //     location,
        //     numBathrooms,
        //     numBedrooms,
        //     numHalls,
        //     numKitchens,
        //     elevator,
        //     balcony,
        //     garage,
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Divider>
                        <div style={{ display: 'flex', columnGap: 10, justifyContent: 'center' }}>
                            <h4>General Information</h4>
                            <HelpOutlinedIcon color="primary" sx={{ fontSize: 40, marginTop: '20px' }} />
                        </div>
                    </Divider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard"
                        required
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            value={status}
                            onChange={handleStatusChange}
                            label='Status'
                        >
                            {statusOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {status && (

                        // <FormControl>
                        //     <Select
                        //         labelId="currency-label"
                        //         id="currency"
                        //         value={currency}
                        //         onChange={handleCurrencyChange}
                        //     >
                        //         {currencyOptions.map((option) => (
                        //             <MenuItem key={option.value} value={option.value}>
                        //                 {option.label}
                        //             </MenuItem>
                        //         ))}
                        //     </Select>
                        // </FormControl>
                        <FormControl fullWidth variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">{status === 'rent' ? 'Price per month' : 'Total price'}</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                                value={price}
                                required
                                onChange={handlePriceChange}
                            />
                        </FormControl>

                        // <FormControl fullWidth >
                        //     <InputLabel htmlFor="outlined-adornment-amount">{status === 'rent' ? 'Price per month' : 'Total price'}</InputLabel>
                        //     <OutlinedInput
                        //         id="outlined-adornment-amount"
                        //         startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        //         label="Amount"
                        //         value={price}
                        //         onChange={handlePriceChange}
                        //     />
                        // </FormControl>

                    )}
                </Grid>

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}

                {/* <DatePicker
                                label="Built Year"
                                value={builtYear}
                                onChange={handleBuiltYearChange}
                                renderInput={(params) => <TextField {...params} />}
                            /> */}




                {/* </LocalizationProvider> */}
                {/* </Grid> */}
                <Grid item xs={12} sm={6}>

                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Area</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start">ft</InputAdornment>}
                            required
                            fullWidth
                            label="Area"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        label="Number of floors"
                        value={numFloors}
                        onChange={(e) => setNumFloors(e.target.value)}
                    />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        freeSolo
                        fullWidth
                        required
                        options={['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia']}
                        renderInput={(params) => <TextField {...params} label="City" />}
                        value={city}
                        onChange={(e, value) => setCity(value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Street address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', columnGap: 10, justifyContent: 'center' }}>
                            <h4>Halls details</h4>
                            <InfoRoundedIcon color="primary" sx={{ fontSize: 40, marginTop: '20px' }} />
                        </div>
                    </Divider>
                </Grid>

                <Grid item xs={12} sm={3}>
                    {/* <TextField
                        type="number"
                        required
                        fullWidth
                        label="Number of bathrooms"
                        value={numBathrooms}
                        onChange={(e) => setNumBathrooms(e.target.value)}
                    /> */}
                    <TextField
                        label="Number of Bathrooms"
                        type="number"
                        required
                        fullWidth
                        value={numBathrooms}
                        onChange={(e) => setNumBathrooms(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaBath />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        label="Number of bedrooms"
                        value={numBedrooms}
                        onChange={(e) => setNumBedrooms(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <GiSofa />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        label="Number of halls"
                        value={numHalls}
                        onChange={(e) => setNumHalls(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaBed />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        label="Number of kitchens"
                        value={numKitchens}
                        onChange={(e) => setNumKitchens(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <TbToolsKitchen2 />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', columnGap: 10, justifyContent: 'center' }}>
                            <h4>Select features</h4>
                            <BuildCircleRoundedIcon color="primary" sx={{ fontSize: 40, marginTop: '20px' }} />
                        </div>
                    </Divider>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup style={styles.formGroup}>
                        <FormControlLabel
                            control={<Checkbox checked={elevator} onChange={(e) => setElevator(e.target.checked ? 'elevator' : false)} color='primary' icon={<MdElevator />} />}
                            label="Elevator"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={balcony} onChange={(e) => setBalcony(e.target.checked ? 'balcony' : false)} color='primary' icon={<MdBalcony />} />}
                            label="Balcony"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={garage} onChange={(e) => setGarage(e.target.checked ? 'garage' : false)} color='primary' icon={<MdGarage />} />}
                            label="Garage"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={gym} onChange={(e) => setGym(e.target.checked ? 'gym' : false)} color='primary' icon={<FaDumbbell />} />}
                            label="Gym"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={garden} onChange={(e) => setGarden(e.target.checked ? 'garden' : false)} color='primary' icon={<FaTree />} />}
                            label="Garden"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={swimmingPool} onChange={(e) => setSwimmingPool(e.target.checked ? 'swimming pool' : false)} color='primary' icon={<FaSwimmingPool />} />}
                            label="Swimming Pool"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={mafrog} onChange={(e) => setMafrog(e.target.checked ? 'Mafrosh' : false)} color='primary' icon={<GiSofa />} />}
                            label="Mafrosh"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', columnGap: 10, justifyContent: 'center' }}>
                            <h4>Drop a location</h4>
                            <AddLocationAltRoundedIcon color="primary" sx={{ fontSize: 40, marginTop: '20px' }} />
                        </div>
                    </Divider>
                    <LoadScript
                        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                    >
                        <GoogleMap
                            mapContainerStyle={{ height: '400px', width: '100%' }}
                            center={location}
                            zoom={16}
                            onClick={(e) => handleLocationChange({
                                lat: e.latLng.lat(),
                                lng: e.latLng.lng(),
                            })}
                        >
                            {location && <Marker position={location} />}
                        </GoogleMap>
                    </LoadScript>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField

                        label="Notes"
                        value={notes}
                        onChange={handleNotesChange}
                        multiline
                    />
                </Grid>

                <Grid item xs={6} container justifyContent="flex-end">
                    <StyledButton variant="contained" type="submit" onClick={handleSnackBar}>
                        {isLoading ? <CircularProgress size={24} /> : 'Next'}
                    </StyledButton>
                </Grid>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                    <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
                        Property Information added successfully!
                    </Alert>
                </Snackbar>
            </Grid>
        </form>
    )
}












// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Chip from '@mui/material/Chip';
// import CloseIcon from '@mui/icons-material/Close';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// function SelectedValue({ value, onDelete }) {
//   return (
//     <Chip
//       sx={{ mr: 0.5 }}
//       label={value}
//       onDelete={onDelete}
//       deleteIcon={<CloseIcon />}
//     />
//   );
// }

// export default function MultipleSelectChip() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
//         <Select
//           labelId="demo-multiple-chip-label"
//           id="demo-multiple-chip"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//           renderValue={(selected) => (
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//               {selected.map((value) => (
//                 <SelectedValue
//                   key={value}
//                   value={value}
//                   onDelete={() => {
//                     setPersonName((names) =>
//                       names.filter((name) => name !== value)
//                     );
//                   }}
//                 />
//               ))}
//             </Box>
//           )}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
