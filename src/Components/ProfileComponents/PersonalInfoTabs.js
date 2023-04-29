import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Typography , TextField , InputAdornment} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DateRangeIcon from '@material-ui/icons/DateRange';
import IDImageCard from "./IDImageCard";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px;
//   color: #45729d;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    indicator: {
      backgroundColor: '#45729d',
    },
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <StyledBox>
                    <Typography>{children}</Typography>
                </StyledBox>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PersonalInfoTabs({email, phoneNumber , birthdate , editMode , handlePhoneChange}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  classes={{ indicator: classes.indicator }}>
                    <Tab label="Personal Info" {...a11yProps(0)} style={{ color: '#45729d' }} />
                    <Tab label="ID Photo" {...a11yProps(1)} style={{ color: '#45729d' }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '24px', width: '60%', marginTop: '24px' }}>
                    <TextField
                        id="email" label="Email" value={email} disabled
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {editMode ?
                        <TextField
                            id="phone-number"
                            label="Phone Number"
                            value={phoneNumber}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        /> : <TextField
                            id="phone-number"
                            label="Phone Number"
                            value={phoneNumber}
                            onChange={(e)=> handlePhoneChange(e.value)}
                            disabled
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />}

                    <TextField
                        id="birthdate"
                        label="Birthdate"
                        value={birthdate}
                        disabled
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DateRangeIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                {/* <StyledImage src="https://via.placeholder.com/200x200" alt="profile" />
        <Typography variant="h6">Name</Typography>
        <Typography>Email: example@example.com</Typography>
        <Typography>Phone: 0123456789</Typography>
        <Typography>Birthdate: January 1st, 1990</Typography>
        <Typography>ID Image:</Typography>
        <StyledImage src="https://via.placeholder.com/200x200" alt="ID" /> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* <StyledBox>
                    <Typography variant="h6">Account Settings</Typography>
                    <Typography>Change Password:</Typography>
                    <Typography>Other Settings:</Typography>
                </StyledBox> */}
                <IDImageCard/>
            </TabPanel>
        </div>
    );
}
