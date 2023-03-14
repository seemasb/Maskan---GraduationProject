import { useState } from "react";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from "@mui/material";

export default function Step3SignUp(){
    const [verified , setVerified] = useState(false);

    return(
        <div className="VerificationBox">
            <div className="VerificationIcon">
                {verified ?  <CheckCircleOutlineIcon sx={{fontSize: 80 }} color="success"/> : <MailOutlineOutlinedIcon sx={{fontSize: 80 }} color="primary" />}
            </div>
            <Typography variant='h6' className='Step1Title'>Verify your email address</Typography>

            <hr></hr>
            <p>A verification email has been sent to your email address, Please verify your email.</p>
        </div>
    )
}