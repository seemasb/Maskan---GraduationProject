
import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import axios from 'axios';
import SendSharp from '@mui/icons-material/SendSharp';
import {
  Avatar,
  DialogContent,
} from '@mui/material';


export default function Step2SignUp() {
  const [value, setValue] = useState(dayjs(''));
  const [phone, setPhone] = useState('')
  const [profilePicURL, setProfilePicURL] = useState('')
  const [profileFormData, setProfileFormData] = useState()
  const [idURL, setidURL] = useState('')


  const handleChangeProfile = (e) => {
    const file = e.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append('image', file);
    formData.append('_method', 'PATCH')
    // setProfileFormData('_method', 'PATCH');

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


  const Remove_PROF_URL = () => {
    setProfilePicURL('');
  }

  const Remove_ID_URL = () => {
    setidURL('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileFormData)

    // axios.patch('/user', profileFormData ,{
    //     headers:{
    //       'Content-Type' : 'multipart/form-data'
    //     }
    //   })
    //   .then(function (response) {
    //     // console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
}

  return (
    <div className='mainContainerSignUp'>
      <form onSubmit={handleSubmit}>
      <DialogContent>

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
    </div>


  );
}
