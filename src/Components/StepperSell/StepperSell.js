import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
import StepperSellStep1 from './StepperSellStep1';
import HouseTypeDetails from '../HouseTypeDetails/HouseTypeDetails';
import StepperSellStep3 from './StepperSellStep3';
import Success from './Success';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#1976d2',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#1976d2',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#1976d2',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#1976d2',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};


const steps = ['Property type', 'Property details', 'Upload'];


export default function StepperSell() {
    const [activeStep, setActiveStep] = useState(0);
    const [propertyType , setPropertyType] = useState();
    const [homeAddedId , setHomeAddedId] = useState();

    const handleNext = () => {

        setActiveStep(activeStep + 1);
    };

    function handlePropertyTypeChange(type) {
        setPropertyType(type);
        console.log(propertyType)
        setActiveStep(activeStep + 1);
        // Do something with the selected property type
    }


    function getStepsContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <StepperSellStep1 onChange={handlePropertyTypeChange}/>
            case 1:
                return <HouseTypeDetails setHomeAddedId={setHomeAddedId} handleNext={handleNext}/>
            case 2:
                return <StepperSellStep3 homeAddedId={homeAddedId} handleNext={handleNext}/>

            default: return <Success/>
        }
    }
    return (
        <Stack sx={{ width: '70%', margin: 'auto' , marginTop: '70px' }} spacing={4}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                {getStepsContent(activeStep)}
            </div>
            <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </Stack>
    );
}
