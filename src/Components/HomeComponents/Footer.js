import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography } from '@material-ui/core';
import RoofingIcon from '@mui/icons-material/Roofing';


const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 48px;
`;

const FooterLogo = styled.img`
  height: 64px;
`;

const CopyRightText = styled(Typography)`
  color: #45729d;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Container maxWidth="xl">
                <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                        <div>
                            <RoofingIcon fontSize="large" color='action' />
                            <span className='logoTitle'>Maskan</span>
                        </div>
                        {/* <FooterLogo src="/images/logo.png" alt="logo" /> */}
                    </Grid>
                    <Grid item>
                        <CopyRightText variant="body2" align="right">
                            &copy; 2023 Maskan Co. All rights reserved.
                        </CopyRightText>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
