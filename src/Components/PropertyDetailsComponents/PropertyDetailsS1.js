import PropertyDescription from './PropertyDescription'
import PropertyLocation from './PropertyLocation';
import PropertyFeatures from './PropertyFeatures';
import styled from 'styled-components';


const StyledPropertyDetailsS1 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 26px;F
`

function PropertyDetailsS1({propertyDetails}) {

    return (
        <StyledPropertyDetailsS1>
            <PropertyDescription propertyDetails={propertyDetails}/>
            <PropertyFeatures propertyDetails={propertyDetails}/>
            <PropertyLocation propertyDetails={propertyDetails}/>

        </StyledPropertyDetailsS1>
    );
}

export default PropertyDetailsS1;