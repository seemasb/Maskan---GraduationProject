import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import h1 from '../../Images/h1.jpg'
import { Typography, TextField, InputAdornment, Avatar  } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DateRangeIcon from '@material-ui/icons/DateRange';
import styled from "styled-components";
import Sima from '../../Images/Sima.jpg'
import Divider from '@mui/material/Divider';


// Import your Card component here
import Card from '../Card/Card';

const data = {
    id: 1,
    location: {
        address: 'mota',
        city: 'loas angelos'
    },
    price: 15000,
    living_space: {
        bathrooms: 2,
        bedrooms: 2
    },
    first_image: {
        image: h1
    }
}
const Name = styled.span`
    font-size: 19px;
    font-weight: 600;
    color: darkslategray;
`

const ProperitiesSectionTitle = styled.span`
font-size: 22px;
color: lightgray;
`
const OwnerInfo = styled.div`
    font-size: 19px;
    font-weight: 600;
    color: darkslategray;
    align-self: center;
`

const useStyles = makeStyles(theme => ({
    modal: {
        marginTop: 50,
        width: '45%',
        margin: 'auto',
        [theme.breakpoints.down('lg')]: {
            width: '60%',
            marginTop: 20,
        },
    },
    paper: {
        padding: 25,
        borderRadius: 8,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
}));

const OwnerModal = ({ owner, properties, isOpen, onClose }) => {
    const classes = useStyles();

    return (
        <Modal
            className={classes.modal}
            open={true}
            //   onClose={onClose}
            aria-labelledby="real-estate-owner-modal-title"
            aria-describedby="real-estate-owner-modal-description"
        >
            <div className={classes.paper}>
                <div style={{ display: 'flex', columnGap: '20px' , marginLeft: 50 }}>
                    <div>
                        <Avatar src={Sima} style={{ width: '120px', height: '120px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 7 }}>
                            <Name>Seema Sbouh</Name>

                            <div style={{ display: 'flex', columnGap: 10, color: 'lightgray', fontSize: 14 }}>
                                <EmailIcon />
                                <span>seema.sbouh512@gmail.com</span>
                            </div>
                            <div style={{ display: 'flex', columnGap: 10, color: 'lightgray', fontSize: 14 }}>
                                <PhoneIcon />
                                <span>0597292545</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Personal info section */}
                {/* Implement personal info section here */}

                <div style={{ marginTop: 30, marginBottom: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 30 }}>
                    <ProperitiesSectionTitle>Related Properities</ProperitiesSectionTitle>
                    <Carousel
                        plugins={['arrows']}
                        // slidesPerPage={3}
                        slidesPerScroll={1}
                        // animationSpeed={1000}
                        // autoPlay={3000}
                        // stopAutoPlayOnHover
                        infinite
                        itemWidth={280}
                    >

                        <Card data={data} />
                        <Card data={data} />
                        <Card data={data} />
                        <Card data={data} />
                        <Card data={data} />
                        {/* <Card />
                    <Card /> */}
                    </Carousel>
                </div>
            </div>
        </Modal>
    );
};

OwnerModal.propTypes = {
    owner: PropTypes.object.isRequired,
    properties: PropTypes.arrayOf(PropTypes.object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default OwnerModal;
