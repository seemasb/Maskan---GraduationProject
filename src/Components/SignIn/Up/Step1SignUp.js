import { Typography, Button,TextField, OutlinedInput, FormControl, InputLabel, Stack } from '@mui/material'
import './ComponentsStyle.css'
import dayjs from 'dayjs';
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendSharp from '@mui/icons-material/SendSharp';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';
import ROOT_URL from '../../../config';

export default function Step1SignUp({ setActiveStep }) {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [UserName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [Password, setPassword] = useState('');
    const [BirthDate, setBirthDate] = useState(dayjs('2023-08-18T21:11:54'));

    const DatehandleChange = (newValue) => {
        setBirthDate(newValue);
    };

    const handleChangePhone = (newPhone) => {
        setPhone(newPhone)
        console.log(phone)
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        axios.post(`${ROOT_URL}/accounts/users/`, {

                first_name: FirstName,
                laset_name: LastName,
                email: Email,
                username: UserName,
                phone_number: phone,
                date_of_birth: BirthDate,
                password:  Password

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div className='mainContainerSignUp'>
            {/* <Typography variant='h5' className='Step1Title'>Sign Up with Email</Typography> */}

            <div className='formContainerSignUp'>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", columnGap: "10px" }}>
                        <TextField label="First name" variant='outlined'
                            style={{ width: "100%", margin: "7px 0" }}
                            required
                            value={FirstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                        <TextField label="Last name" variant='outlined'
                            style={{ width: "100%", margin: "7px 0" }}
                            required
                            value={LastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <TextField label="Email" variant='outlined'
                        style={{ width: "100%", margin: "7px 0" }}
                        required
                        value={Email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField label="Username" variant='outlined'
                        style={{ width: "100%", margin: "7px 0" }}
                        required
                        value={UserName}
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                    />

                    <div style={{ display: "flex", columnGap: "10px" }}>
                        <Stack spacing={3}>
                            <MuiTelInput value={phone} onChange={handleChangePhone}
                                style={{ width: "100%", margin: "9px 0 0 0" }}
                                label="Phone number"
                            />
                        </Stack>


                        <LocalizationProvider dateAdapter={AdapterDayjs}
                        >
                            <DesktopDatePicker
                                required
                                label="Birth Date"
                                inputFormat="MM/DD/YYYY"
                                value={BirthDate}
                                onChange={DatehandleChange}
                                renderInput={(params) => <TextField {...params} />}

                            />
                        </LocalizationProvider>
                    </div>

                    <FormControl variant="outlined" style={{ width: "100%", margin: "7px 0" }}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            endAdornment={
                                <InputAdornment position="end">

                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />

                    </FormControl>

                    <>
                        <Button
                            variant='contained'
                            type='submit'
                            className='SubmitBtn'
                            endIcon={<SendSharp />}
                            style={{marginTop: 15}}
                        >
                            SIGN UP
                        </Button>
                    </>

                </form>
            </div>


        </div>
    )
}
