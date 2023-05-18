import * as React from 'react';
import {Button, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import SignInForm from './SignInForm'
import './ComponentsStyle.css'
import LoginIcon from '@mui/icons-material/Login';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function SignInModal() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip  title="Sign In" arrow>
      <Button  onClick={handleClickOpen} className="SignInBtn" startIcon={<LoginIcon fontSize='48'/>}>
        Sign In
      </Button>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

      >
        <SignInForm />
      </BootstrapDialog>
    </div>
  );
}