import * as React from 'react';
import {Button, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import StepperSignUp from './StepperSignUp'
import './ComponentsStyle.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function SignUnModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip  title="Sign Up" fontSize='48' arrow>
      <Button onClick={handleClickOpen} className='SignUpButton' startIcon={<PersonAddIcon fontSize='48'/>}>
        Sign Up
      </Button>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        

      >
        <StepperSignUp />
      </BootstrapDialog>
    </div>
  );
}