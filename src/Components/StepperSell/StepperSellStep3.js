import { Box, Button, Grid, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { DropzoneArea } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@mui/material/Divider';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DescriptionIcon from '@mui/icons-material/Description';
import UploadIcon from '@mui/icons-material/Upload';
import { styled } from '@mui/material/styles';
import axios from 'axios';

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

    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();
    const [property, setProperty] = useState([]);
    const [ownershipImage, setOwnershipImage] = useState();
    const [Sellfile, setSellfile] = useState()


    function handleOwnershipImageChange(event) {
        const file = event.target.files[0];
        // const formData = new FormData();
        // const OwnerImage = {
        //     preview: URL.createObjectURL(file),
        //     file: file,
        // }
        // formData.append('record', file);
        // formData.append('_method', 'PATCH')
        setSellfile(file);

        if (file) {
            const photoURL = URL.createObjectURL(file);
            setOwnershipImage(photoURL);
        }
        // const files = event.target.files;
        // if (files && files.length > 0) {
        //     const imageUrl = URL.createObjectURL(files[0]);
        // const reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        // reader.onloadend = () => {
        //     const base64data = reader.result;
        //     setOwnershipImage(base64data);
        //     console.log('test data:')
        //     console.log(base64data)
        // };
    }

    const handleDropzoneChange = (files) => {
        const newImages = files.map((file) => ({
            preview: URL.createObjectURL(file),
            file: file,
        }));
        setProperty([...property, ...newImages]);
        console.log(property)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('in submit')
        console.log(ownershipImage)
        console.log('sell form data')
        // console.log(SellFormData)

        // const ownership = {
        //     record: ownershipImage,
        //     is_accepted: true,
        //     is_viewable: true,
        // };
        const formData = new FormData();
        // formData.append('ownershipFormData', SellFormData)
        property.forEach((image) => {
            formData.append('images', image.file);
        });
        formData.append('record' , Sellfile)
        console.log('total form data')
        console.log(formData)
        try {
          const response = await axios.patch('http://127.0.0.1:8001/upload/31/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
    };




    function handlePhotoDelete(imageUrl) {
        URL.revokeObjectURL(imageUrl);
        setOwnershipImage(null);
    }

    // const handleSubmit = () => {

    //     axios.patch('/user', profileFormData ,{
    //         headers:{
    //           'Content-Type' : 'multipart/form-data'
    //         }
    //       })
    //       .then(function (response) {
    //         // console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

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
                    onChange={handleDropzoneChange}
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
                        onChange={handleOwnershipImageChange}
                    />
                    <label htmlFor="photo-upload">
                        <Button variant="contained" component="span">
                            <UploadIcon /> Upload
                        </Button>
                    </label>
                </Box>
            </Grid>
            {/* {ownershipImage.map((photo) => ( */}
            {ownershipImage && (
                <Grid item key={ownershipImage} xs={12} sm={4}>
                    <Box sx={{ position: 'relative' }}>
                        <img src={ownershipImage} alt="Property Photo" style={{ maxWidth: '100%' }} />
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
                            onClick={() => handlePhotoDelete(ownershipImage)}
                        >
                            Delete
                        </Box>
                    </Box>
                </Grid>
            )}
            {/* ))} */}

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
                <StyledButton variant="contained" type="submit" onClick={handleSubmit}>
                    {isLoading ? <CircularProgress size={24} /> : 'Add property'}
                </StyledButton>
            </Grid>
        </Grid>

    )
}
