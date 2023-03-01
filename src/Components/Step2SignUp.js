
import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import PostAddIcon from '@mui/icons-material/PostAdd';
import axios from 'axios';
import SendSharp from '@mui/icons-material/SendSharp';

import {
  Avatar,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material';


export default function Step2SignUp() {
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  const [phone, setPhone] = useState('')
  const [profilePicURL, setProfilePicURL] = useState('')
  const [profileFormData, setProfileFormData] = useState()
  const [idURL, setidURL] = useState('')


  const handleChangeProfile = (e) => {
    const file = e.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append('image', file);
    setProfileFormData(formData);

    if (file) {
      const photoURL = URL.createObjectURL(file);
      setProfilePicURL(photoURL);
      console.log(photoURL)
      console.log(profileFormData)
    }
  };

  const handleChangeID = (e) => {
    const file = e.target.files[0];
    if (file) {
      const ID_URL = URL.createObjectURL(file);
      setidURL(ID_URL);
    }
  };


  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const Remove_PROF_URL = () => {
    setProfilePicURL('');
  }

  const Remove_ID_URL = () => {
    setidURL('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch('/user', profileFormData ,{
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  return (
    <div className='mainContainerSignUp'>
      <form onSubmit={handleSubmit}>
      <DialogContent>
        {/* <DialogContentText>
          You can update your profile by updating these fields:
        </DialogContentText> */}
        {/* <Typography variant='h5' className='Step1Title'>Fill Personal Information</Typography> */}

        
        <div className='UploadProfile'>
          <label>
            <input
              accept="image/*"
              id="profilePhoto"
              type="file"
              style={{ display: 'none' }}
              onChange={handleChangeProfile}
            />
            <Avatar
              src={profilePicURL}
              sx={{ width: 120, height: 120, cursor: 'pointer' }}
            >
              {/* <FolderIcon /> */}
            </Avatar>
          </label>

          <div className='UploadProfileSection2' >
            <label>Upload Profile Picture</label>
            <Button variant="contained" onClick={Remove_PROF_URL}>
              remove
            </Button>
          </div>

        </div>
      </DialogContent>

      <DialogContent>
        {/* <DialogContentText>
          You can update your profile by updating these fields:
        </DialogContentText> */}
        {/* <Typography variant='h5' className='Step1Title'>Fill Personal Information</Typography> */}


        <div className='UploadProfile'>
          <label>
            <input
              accept="image/*"
              id="IDePhoto"
              type="file"
              style={{ display: 'none' }}
              onChange={handleChangeID}
            />
            <Avatar
              src={idURL}
              sx={{ width: 120, height: 120, cursor: 'pointer' }}
            >
              <PostAddIcon sx={{ fontSize: 80 }} />
            </Avatar>
          </label>

          <div className='UploadProfileSection2' >
            <label>Upload ID Scan</label>
            <Button variant="contained" onClick={Remove_ID_URL}>
              remove
            </Button>
          </div>

        </div>
      </DialogContent>

      <Button
        variant='contained'
        type='submit'
        className='SubmitBtn'
        endIcon={<SendSharp />}
        style={{ marginTop: 15 }}
      >
        SIGN UP
      </Button>
      </form>

      {/* <Stack spacing={3}>
        <label>Phone Number</label>
        <MuiTelInput value={phone} onChange={handleChange}
          style={{ width: "100%", margin: "7px 0" }}
        />
      </Stack> */}




      {/* <Button variant="contained" component="label" onClick={RemoveURL}>
        Upload ID
        <input
          accept="image/*"
          id="IDPhoto"
          type="file"
          style={{ display: 'none' }}
          onChange={handleChangeID}
        />
      </Button>
      <label>{idURL}</label> */}
    </div>


  );
}