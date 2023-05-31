import React, { useState } from "react";
import styled from "styled-components";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    TextField,
    IconButton
} from "@material-ui/core";
import Carousel from '@brainhubeu/react-carousel';
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ScheduleCreation from './ScheduleCreation'
import PersonalInfoTabs from "./PersonalInfoTabs";
import {Card as propertyCard} from "../Card/Card";
import axios from "axios";
import ROOT_URL from "../../config";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
    },
    button: {
        backgroundColor: "#45729d",
        color: "#ffffff",
        marginTop: theme.spacing(2),
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
//   padding: 25px;
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
const StyledNoResult = styled('div')`
    width: inherit;
    max-height: 100%;
    min-height: 200px;
    display: flex;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    color: darkgray;
`
// const PersonalInfo = ({ profilePictureUrl, idPictureUrl, name, email, phoneNumber, birthdate }) => {
//     const classes = useStyles();

//     const [editMode, setEditMode] = useState(false);
//     const [editableName, setEditableName] = useState(name);
//     const [editablePhone, setEditablePhone] = useState(phoneNumber);
//     const [editableProfilePictureUrl, setEditableProfilePictureUrl] = useState(
//         profilePictureUrl
//     );
//     const [editableIdPictureUrl, setEditableIdPictureUrl] = useState(
//         idPictureUrl
//     );

//     const handleNameChange = (event) => {
//         setEditableName(event.target.value);
//     };
//     const handlePhoneChange = (value) => {
//         // setEditablePhone(event.target.value);
//         setEditablePhone(value)
//     };

//     const handleProfilePictureChange = (event) => {
//         setEditableProfilePictureUrl(URL.createObjectURL(event.target.files[0]));
//     };

//     const handleIdPictureChange = (event) => {
//         setEditableIdPictureUrl(URL.createObjectURL(event.target.files[0]));
//     };

//     const handleSaveChanges = () => {
//         // handle saving changes here
//         setEditMode(false)
//         console.log(
//             "Saved changes to name:",
//             editableName,
//             "profile picture:",
//             editableProfilePictureUrl,
//             "ID picture:",
//             editableIdPictureUrl
//         );
//     };
const PersonalInfo = ({ id }) => {
    const classes = useStyles();

    const [editMode, setEditMode] = useState(false);
    const [editableName, setEditableName] = useState('');
    const [editablePhone, setEditablePhone] = useState('');
    const [editableProfilePictureUrl, setEditableProfilePictureUrl] = useState('');
    const [editableIdPictureUrl, setEditableIdPictureUrl] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [browseData, setBrowseData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ROOT_URL}/accounts/account/${id}/`)
                    .then((response) => {
                        setData(response.data);
                        setEditableName(response.data.username);
                        setEditablePhone(response.data.phone_number);
                        setEditableProfilePictureUrl(response.data.profile.profile_picture);
                        setEditableIdPictureUrl(response.data.profile.ID_card);
                        setBirthdate(response.data.date_of_birth);
                        setEmail(response.data.email);
                    });
                // setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        const fetchBrowseData = async () => {
            try {
              const userToken = localStorage.getItem('Token')
              let header;
              userToken ? header = {
                'Authorization': 'Token ' + userToken
              } : header = {};
              const response = await axios.get(`${ROOT_URL}/properties/visited_home_list/`, { headers: header });
              setBrowseData(response.data);
              console.log(response.data)
            } catch (error) {
              console.log(error);
            }
        };
        fetchBrowseData();
        fetchData();
    }, [id]);

    const handleNameChange = (event) => {
        setEditableName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setEditablePhone(event.target.value);
    };

    const handleProfilePictureChange = (event) => {
        setEditableProfilePictureUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleIdPictureChange = (event) => {
        setEditableIdPictureUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleSaveChanges = async () => {
        try {
            const response = await axios.patch(`${ROOT_URL}/accounts/account/${id}/`, {
                name: editableName,
                phone: editablePhone,
                profilePictureUrl: editableProfilePictureUrl,
                idPictureUrl: editableIdPictureUrl
            });
            setEditMode(false);
            setData(response.data);
            // optionally show a success message to the user
        } catch (error) {
            // handle any errors that occur during the POST request
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // const { name, email, phoneNumber, profilePictureUrl, idPictureUrl } = data;

    return (
        <>
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
                                        id="name" label="Name" value={editableName}
                                        onChange={handleNameChange}
                                    /> : <Name>{editableName}</Name>}

                                <StyledIconButton aria-label="edit" >
                                    {
                                        editMode ? <DoneOutlineIcon onClick={handleSaveChanges} /> : <EditIcon onClick={() => { setEditMode(true) }} />
                                    }
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
                    <PersonalInfoTabs email={email} phoneNumber={editablePhone} birthdate={birthdate} editMode={editMode} handlePhoneChange={handlePhoneChange} />
                </InfoCardContent>
            </InfoCard>
            <ScheduleCreation />
        </Wrapper>
        <Wrapper>
        {
            (browseData.length > 0 ?
                (
                <Carousel
                    plugins={['arrows']}
                    slidesPerScroll={1}
                    infinite
                    itemWidth={280}
                >
                {browseData.map((item) => (<propertyCard key={item.id} data={item} />))}
                  </Carousel>
                )
                :
                (
                  <StyledNoResult>No property browse history available</StyledNoResult>
                )
            )
        }
        </Wrapper>
        </>
    )
}

export default PersonalInfo;