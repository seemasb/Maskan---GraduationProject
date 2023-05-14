import PropertyDetailsCard from "./PropertyDetailsCard";
import OwnerCard from './OwnerCard'
import ScheduleTour from "./ScheduleTour";
import avatar from '../../Images/h1.jpg'
import styled from 'styled-components';

const StyledPropertyDetailsS2 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

function PropertyDetailsS2({propertyDetails}) {
    return (
        <StyledPropertyDetailsS2>
            <PropertyDetailsCard
               propertyDetails={propertyDetails}
            />
            <OwnerCard avatarUrl={avatar} name={'Seema Sbouh'} bio={''} />
            <ScheduleTour />
        </StyledPropertyDetailsS2>
    );
}

export default PropertyDetailsS2;