import PropertyDescription from './PropertyDescription'
import PropertyLocation from './PropertyLocation';
import PropertyFeatures from './PropertyFeatures';
import styled from 'styled-components';


const StyledPropertyDetailsS1 = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 26px;F
`

function PropertyDetailsS1() {
    return (
        <StyledPropertyDetailsS1>
            <PropertyDescription />
            <PropertyFeatures />
            <PropertyLocation />

        </StyledPropertyDetailsS1>
    );
}

export default PropertyDetailsS1;