import React from 'react';
import { styled } from '@mui/material/styles';
import { CheckCircleOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';

const SuccessContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
});

const SuccessIcon = styled(CheckCircleOutline)({
  fontSize: '4rem',
  color: 'green',
});

const SuccessMessage = styled(Typography)({
  marginTop: '10px',
  fontWeight: 'bold',
});

export default function Success () {
  return (
    <SuccessContainer>
      <SuccessIcon />
      <SuccessMessage variant="h4" align="center">
        Thank you!
      </SuccessMessage>
      <Typography variant="body1" align="center">
        Your request has been sent to the admin, once it's aproves you will notified
      </Typography>
    </SuccessContainer>
  );
};

