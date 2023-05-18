import * as React from 'react';
import { Button, Tooltip } from '@mui/material';
import './ComponentsStyle.css'
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import ROOT_URL from '../../../config';

const deleteData = () => {
    try {
        const userToken = localStorage.getItem('Token')
        let header;
        userToken ? header = {
            'Authorization': 'Token ' + userToken
        } : header = {}

        axios.get(`${ROOT_URL}/accounts/logout/`, {
            headers: header
        })
        localStorage.removeItem('Token');
        console.log('Data successfully deleted.');
    } catch (error) {
        console.log('Error deleting data:', error);
    }
};

export default function SignOutModal() {

    const handleClick = () => {

        deleteData();
        window.location.href = '/';
    };


    return (
        <div>
            <Tooltip title="Sign Out" arrow>
                <Button onClick={handleClick} className="SignInBtn" startIcon={<LogoutIcon fontSize='48' />}>
                    Sign Out
                </Button>
            </Tooltip>
        </div>
    );
}