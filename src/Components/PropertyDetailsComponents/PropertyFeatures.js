import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { MdElevator, MdBalcony, MdGarage } from 'react-icons/md';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';


const FeaturesContainer = styled(Box)`
  background-color: #fff;
//   box-shadow: 0px 0px 10px ${grey[400]};
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 7px;
`;

const FeatureItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 30%;
`;

const StyledFeatureIcon = styled('div')({
    color: '#45729d',
})

const DisplayFeatures = styled('div')({
    display: 'flex',
    // columnGap: 20,
    flexWrap: 'wrap',
    rowGap: 10,
    justifyContent: 'flex-start'
})

const FeatureTitle = styled('span')({
    margin: '0 0 7px 10px',
    color: 'dimgray',
    fontSize: '17px',
    fontWeight: '600',
})

const featuresArray = [
    {
        feature: 'Elevator',
    },
    {
        feature: 'Garage',
    },
    {
        feature: 'Gym',
    },
    {
        feature: 'Balcony',
    },
    {
        feature: 'Swimming pool',
    }

]

const PropertyFeatures = ({ features }) => {
    return (
        <FeaturesContainer>
            {/* <Typography variant="h6" gutterBottom>
                Features
            </Typography> */}
            <h2>Features</h2>
            <DisplayFeatures>
                {featuresArray.map((feature, index) => (
                    <FeatureItem key={index}>
                        <StyledFeatureIcon>
                            {/* {feature.icon} */}
                            <CheckCircleIcon />
                        </StyledFeatureIcon>
                        <FeatureTitle >{feature.feature}</FeatureTitle>
                    </FeatureItem>
                ))}
            </DisplayFeatures>
        </FeaturesContainer>
    );
};

export default PropertyFeatures;
