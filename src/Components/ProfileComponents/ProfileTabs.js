import React, { useState } from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText, Grid } from '@material-ui/core';
import { Person, Home, Star, Forum, CalendarToday, BarChart } from '@material-ui/icons';
import PersonalInfo from './PersonalInfo';
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import ProfileCalendar from './ProfileCalendar';
import ProfileProperities from './ProfileProperities';
import ProfilePic from '../../Images/Sima.jpg'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Divider } from '@mui/material';

const SidebarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const MenuList = styled(List)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  margin-top: 48px !important;
  padding: 0px 20px 0 20px !important;
//   margin-top: 20px !important;
//   border-right: 1px solid #ccc;
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(ListItem)`
  border-radius: ${({ selected }) => (selected ? '15px !important' : '10px')};
  margin: 10px 0;
  background-color: ${({ selected }) => (selected ? '#45729d !important' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#45729d')};
  &:hover,
  &:focus {
    background-color: #45729d !important ;
    border-radius: 15px !important;
    color: white !important;
  }
`;

const SidebarContent = styled.div`
    background-color: #fafafa;
    // border-radius: 35px;
    // height: 100vh;
    border-radius: 38px;
    margin: 30px;
    padding: 50px 50px 85px 50px;
    height: 74vh;
    // margin-top: 27px;
    // margin-bottom: 27px;
`

const MenuItemText = styled(ListItemText)`
  color: ${({ selected }) => (selected ? '#fff' : '#45729d')};
  font-weight: bold;
  margin-left: 16px;
  &:hover,
  &:focus {
    color: #fff !important;
  }
`;

const HomeWrapper = styled('div')`
  &:hover {
    color: #fff !important;
    cursor: pointer;
  }
`;

const MenuTitle = styled('span')`
font-size: 20px;
color: #45729d;
font-weight: 600;
`

const ProfileTabs = () => {
    const [selectedItem, setSelectedItem] = useState('Personal Info');

    const handleClick = (text) => {
        console.log(`You clicked on ${text}`);
        setSelectedItem(text);
    };

    return (
        <SidebarContainer>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <MenuList>
                        <div style={{ display: 'flex', columnGap: '10px' }}>
                            <WidgetsOutlinedIcon sx={{ color: '#45729d' }} />
                            <MenuTitle>Profile menu</MenuTitle>
                        </div>
                        {/* <Divider /> */}

                        <MenuItem button selected={selectedItem === 'Personal Info'} onClick={() => handleClick('Personal Info')}>
                            {/* <ListItemIcon> */}
                            <Person style={{ color: selectedItem === 'Personal Info' ? '#fff ' : '#45729d' }} />
                            {/* </ListItemIcon> */}
                            <MenuItemText primary="Personal Info" selected={selectedItem === 'Personal Info'} />
                        </MenuItem>
                        <MenuItem button selected={selectedItem === 'Properties'} onClick={() => handleClick('Properties')}>

                            <Home style={{ color: selectedItem === 'Properties' ? '#fff' : '#45729d' }} />
                            <MenuItemText primary="Properties" selected={selectedItem === 'Properties'} />
                        </MenuItem>
                        {/* <MenuItem button selected={selectedItem === 'Favorite Properties'} onClick={() => handleClick('Favorite Properties')}>

                            <Star style={{ color: selectedItem === 'Favorite Properties' ? '#fff' : '#45729d' }} />
                            <MenuItemText primary="Favorite Properties" selected={selectedItem === 'Favorite Properties'} />
                        </MenuItem> */}
                        {/* <MenuItem button selected={selectedItem === 'Posted Properties'} onClick={() => handleClick('Posted Properties')}>

                            <Home style={{ color: selectedItem === 'Posted Properties' ? '#fff' : '#45729d' }} />
                            <MenuItemText primary="Posted Properties" selected={selectedItem === 'Posted Properties'} />
                        </MenuItem> */}
                        <MenuItem button selected={selectedItem === 'Chat'} onClick={() => handleClick('Chat')}>

                            <Forum style={{ color: selectedItem === 'Chat' ? '#fff' : '#45729d' }} />
                            <MenuItemText primary="Chat" selected={selectedItem === 'Chat'} />
                        </MenuItem>
                        <MenuItem button selected={selectedItem === 'Calendar'} onClick={() => handleClick('Calendar')}>

                            <CalendarToday style={{ color: selectedItem === 'Calendar' ? '#fff' : '#45729d' }} />
                            <MenuItemText primary="Calendar" selected={selectedItem === 'Calendar'} />
                        </MenuItem>
                        <MenuItem button selected={selectedItem === 'Analytics'} onClick={() => handleClick('Analytics')}>

                            <BarChart style={{ color: selectedItem === 'Analytics' ? '#fff' : '#45729d' }} />
                            <MenuItemText primary="Analytics" selected={selectedItem === 'Analytics'} />
                        </MenuItem>
                    </MenuList>
                </Grid>
                <Grid item xs={10}>
                    <SidebarContent>
                        {
                            selectedItem == "Personal Info" && <PersonalInfo email={'seema.sbouh512@gmail.com'} phoneNumber={'0597292545'} birthdate={'5/10/2000'} profilePictureUrl={ProfilePic} name={'Sima Sbouh'}/>
                            ||
                            selectedItem == "Calendar" && <ProfileCalendar />
                            ||
                            selectedItem == "Properties" && <ProfileProperities />
                        }
                    </SidebarContent>
                </Grid>

            </Grid>
        </SidebarContainer>
    )
}


export default ProfileTabs;
