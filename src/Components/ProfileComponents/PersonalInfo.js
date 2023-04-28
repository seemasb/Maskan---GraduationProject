import React, { useState } from "react";
import styled from "styled-components";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    IconButton
} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import FreeTimeCard from "./FreeTimeCard";
import Grid from '@mui/material/Grid';
// import ScheduleCreation from "./ScheduleCreation";
import ScheduleCreation from './ScheduleCreation'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
    },
    button: {
        backgroundColor: "#45729d",
        color: "#ffffff",
        marginTop: theme.spacing(2),
        // marginRight: theme.spacing(1),
    },
}));

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
//   flex-direction: column;
  width: 100%;
//   margin: auto;

`;

const StyledIconButton = styled(IconButton)`
  color: #45729d;
`;

const Name = styled.span`
    font-size: 19px;
    font-weight: 600;
    color: darkslategray;
    align-self: center;
`

const InfoCard = styled(Card)`
//   margin-top: 16px;
  padding: 25px;
  width: 50%;
//   max-width: 600px;
`;

const InfoCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
//   align-items: center;
row-gap: 32px;
`;

const InfoTextField = styled(TextField)`
  margin-top: 16px;
  width: 100%;
`;

const PersonalInfo = ({ profilePictureUrl, idPictureUrl, name, email, phoneNumber, birthdate }) => {
    const classes = useStyles();

    const [editMode, setEditMode] = useState(false);
    const [editableName, setEditableName] = useState(name);
    const [editableProfilePictureUrl, setEditableProfilePictureUrl] = useState(
        profilePictureUrl
    );
    const [editableIdPictureUrl, setEditableIdPictureUrl] = useState(
        idPictureUrl
    );

    const handleNameChange = (event) => {
        setEditableName(event.target.value);
    };

    const handleProfilePictureChange = (event) => {
        setEditableProfilePictureUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleIdPictureChange = (event) => {
        setEditableIdPictureUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleSaveChanges = () => {
        // handle saving changes here
        setEditMode(false)
        console.log(
            "Saved changes to name:",
            editableName,
            "profile picture:",
            editableProfilePictureUrl,
            "ID picture:",
            editableIdPictureUrl
        );
    };

    return (
        <Wrapper>
            <InfoCard className={classes.root}>
                <InfoCardContent>
                    <div style={{ display: 'flex', columnGap: '20px' }}>
                        <div>
                            <Avatar src={editableProfilePictureUrl} style={{ width: '120px', height: '120px' }} />
                            <input
                                accept="image/*"
                                id="profile-picture-upload"
                                type="file"
                                onChange={handleProfilePictureChange}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {editMode ?
                                    <TextField
                                        id="name" label="Name" value={name}
                                    /> : <Name>Sima Sbouh</Name>}

                                <StyledIconButton aria-label="edit" onClick={() => { setEditMode(true) }}>
                                    <EditIcon />
                                </StyledIconButton>
                            </div>
                            <label htmlFor="profile-picture-upload">
                                <Button
                                    variant="contained"
                                    component="span"
                                    className={classes.button}
                                >
                                    Edit Profile Picture
                                </Button>
                            </label>
                        </div>
                    </div>

                    {/* <input
                        accept="image/*"
                        id="id-picture-upload"
                        type="file"
                        onChange={handleIdPictureChange}
                        style={{ display: "none" }}
                    />
                    <label htmlFor="id-picture-upload">
                        <Avatar src={editableIdPictureUrl} />
                        <Button
                            variant="contained"
                            component="span"
                            className={classes.button}
                        >
                            Edit ID Picture
                        </Button>
                    </label> */}
                    {/* <InfoTextField
                        id="name"
                        label="Name"
                        value={editableName}
                        onChange={handleNameChange}
                    /> */}
                    {/* <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', width: '60%' }}>
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
                    </div> */}
                    {/* <Button
                        variant="contained"
                        className={classes.button}
                        onClick={handleSaveChanges}
                        style={{ height: '48px', fontSize: '17px' }}
                    >
                        Save Changes
                    </Button> */}
                </InfoCardContent>
            </InfoCard>
            {/* <FreeTimeCard /> */}
            <ScheduleCreation/>
        </Wrapper>
    )
}

export default PersonalInfo;