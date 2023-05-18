import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignInModal from '../SignIn/Up/SignInModal'
import SignUpModal from '../SignIn/Up/SignUpModal'
import SignOutModal from '../SignIn/Up/SignOutModal'
import './Navbar.css';
import RoofingIcon from '@mui/icons-material/Roofing';
import PersonIcon from '@mui/icons-material/Person';

import { Button, Tooltip } from '@mui/material';
// function check() {
//   const one = document.getElementById('home');
//   one.textContent = 'hi';
// }

export default function Navbar() {
  // const [flag, setFlag] = useState('none');

  // useEffect(() => {
  //   if (flag === 'home') {
  //     console.log('jelooooo');
  //   }
  // });

  return (
    <div className="NavContainer">
      <div>
        <RoofingIcon fontSize="large" color='action' />
        <span className='logoTitle'>Maskan</span>
      </div>
      <div className='Nav'>
        <ul>
          <li>
            <NavLink
              to="/Home"
              className="naving"
              id="home"
              style={{ color: 'gray' }}
              activeStyle={{ color: '#45729d' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Properities"
              className="naving"
              id="Properities"
              style={{ color: 'gray' }}
              activeStyle={{ color: '#45729d' }}

            >
              Properities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sell"
              className="naving"
              id="Sell"
              style={{ color: 'gray' }}
              activeStyle={{ color: '#45729d' }}

            >
              Sell Properity
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="naving"
              id="contact"
              style={{ color: 'gray' }}
              activeStyle={{ color: '#45729d' }}

            >
              Contact-us
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/Profile"
              className="naving"
              id="Profile"
              style={{ color: 'gray' }}
              activeStyle={{ color: '#45729d' }}

            >
              Profile
            </NavLink>
          </li> */}
        </ul>
      </div>

      
      <div className='SigningDiv'>
      {localStorage.getItem('Token')? 
      <>
      <div>
            <Tooltip title="Profile" arrow>
                <Button onClick={()=>{window.location.href = '/Profile';}} className="SignInBtn" startIcon={<PersonIcon fontSize='48' />}>
                    Profile
                </Button>
            </Tooltip>
        </div>
      <SignOutModal/></>:
        <><SignInModal /><SignUpModal /></>}
        
      </div>
    </div>
  );
}
































// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
//             My Website
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer open={isMenuOpen} onClose={closeMenu}>
//         <div
//           // className={classes.list}
//           role="presentation"
//           onClick={closeMenu}
//           onKeyDown={closeMenu}
//         >
//           <List>
//             <ListItem component={Link} to="/">
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem component={Link} to="/about">
//               <ListItemText primary="About" />
//             </ListItem>
//             <ListItem component={Link} to="/contact">
//               <ListItemText primary="Contact" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default Navbar;
