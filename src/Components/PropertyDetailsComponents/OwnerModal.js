import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// Import your Card component here
import Card from '../Card/Card';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
                <Typography variant="h4" id="real-estate-owner-modal-title">
                    Real Estate Owner Details
                </Typography>
                {/* Personal info section */}
                {/* Implement personal info section here */}

                <Typography variant="h5">Properties Posted</Typography>
                <Carousel
                    slidesPerPage={3}
                    slidesPerScroll={1}
                    animationSpeed={1000}
                    autoPlay={3000}
                    stopAutoPlayOnHover
                    infinite
                >
                    {/* Carousel */}
                    {/* {properties.map(property => (
            <Card key={property.id} property={property} />
          ))} */}
                    {/* <Card /> */}
                    {/* <Card />
                    <Card /> */}
                </Carousel>
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
