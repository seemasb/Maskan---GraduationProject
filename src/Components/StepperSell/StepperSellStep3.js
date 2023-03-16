import { Box, Button, Grid, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { DropzoneArea } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@mui/material/Divider';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DescriptionIcon from '@mui/icons-material/Description';
import UploadIcon from '@mui/icons-material/Upload';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4),
        margin: "auto",
        maxWidth: 600,
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    dropzone: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #45729d 30%, #94a3b5 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white !important',
    height: 48,
    padding: '0 30px',
    width: '30%',
    // boxShadow: '0 3px 5px 2px #94a3b5',
    '&:hover': {
        boxShadow: '0 6px 10px 5px #94a3b5',
    },
});

export default function StepperSellStep3() {


    const [property, setProperty] = useState({
        photos: [],
    });

    const [Ownership, setOwnership] = useState([]);
    const classes = useStyles();
    const [ownershipImage, setOwnershipImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleOwnershipImageChange = (newImage) => {
        setOwnershipImage(newImage);
        console.log(ownershipImage)
    };


    const handlePhotoUpload = (event) => {
        const files = event.target.files;
        const photosArray = Array.from(files).map((file) => URL.createObjectURL(file));

        setProperty((prevProperty) => ({
            ...prevProperty,
            photos: [...prevProperty.photos, ...photosArray],
        }));
    };

    const handlePhotoUploadOwner = (event) => {
        const files = event.target.files;
        const photosArray = Array.from(files).map((file) => URL.createObjectURL(file));

        setOwnership(
            [...Ownership, ...photosArray]
        );
    };

    const handlePhotoDelete = (photoUrl) => {
        setProperty((prevProperty) => ({
            ...prevProperty,
            photos: prevProperty.photos.filter((photo) => photo !== photoUrl),
        }));
    };





    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Divider sx={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', columnGap: 10, justifyContent: 'center' }}>
                        <h4>Upload Property gallary</h4>
                        <InsertPhotoIcon color="primary" sx={{ fontSize: 40, marginTop: '20px' }} />
                    </div>
                </Divider>
            </Grid>
            <Grid item xs={12}>
                <DropzoneArea
                    acceptedFiles={["image/*"]}
                    dropzoneClass={classes.dropzone}
                    filesLimit={10}
                    onChange={handleOwnershipImageChange}
                />
            </Grid>

            <Grid item xs={12}>
                <Divider sx={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', columnGap: 10, justifyContent: 'center' }}>
                        <h4>Upload Ownership documents</h4>
                        <DescriptionIcon color="primary" sx={{ fontSize: 40, marginTop: '20px' }} />
                    </div>
                </Divider>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <input
                        accept="image/*"
                        id="photo-upload"
                        multiple
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handlePhotoUpload}
                    />
                    <label htmlFor="photo-upload">
                        <Button variant="contained" component="span">
                            <UploadIcon /> Upload
                        </Button>
                    </label>
                </Box>
            </Grid>
            {property.photos.map((photo) => (
                <Grid item key={photo} xs={12} sm={4}>
                    <Box sx={{ position: 'relative' }}>
                        <img src={photo} alt="Property Photo" style={{ maxWidth: '100%' }} />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '4px 8px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handlePhotoDelete(photo)}
                        >
                            Delete
                        </Box>
                    </Box>
                </Grid>
            ))}

            {/* <Grid item xs={12}>
                <Box>
                    <input
                        accept="image/*"
                        id="photo-upload"
                        multiple
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handlePhotoUploadOwner}
                    />
                    <label htmlFor="photo-upload">
                        <Button variant="contained" component="span">
                            Upload Ownership proof
                        </Button>
                    </label>
                </Box>
            </Grid> */}

            {/* {Ownership.map((photo) => (
                <Grid item key={photo} xs={12} sm={4}>
                    <Box sx={{ position: 'relative' }}>
                        <img src={photo} alt="Property Photo" style={{ maxWidth: '100%' }} />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '4px 8px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handlePhotoDelete(photo)}
                        >
                            Delete
                        </Box>
                    </Box>
                </Grid>
            ))} */}
            <Grid item xs={12} container justifyContent="flex-end">
                <StyledButton variant="contained" type="submit">
                    {isLoading ? <CircularProgress size={24} /> : 'Add property'}
                </StyledButton>
            </Grid>
        </Grid>

    )
}

