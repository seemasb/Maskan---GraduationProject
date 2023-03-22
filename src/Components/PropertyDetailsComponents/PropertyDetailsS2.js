import PropertyDetailsCard from "./PropertyDetailsCard";
import OwnerCard from './OwnerCard'
import avatar from '../../Images/h1.jpg'
import styled from 'styled-components';


const StyledPropertyDetailsS2 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

function PropertyDetailsS2() {
    return (
        <StyledPropertyDetailsS2>
            <PropertyDetailsCard
                price="$500,000"
                location="123 Main St, Anytown USA"
                bedrooms={3}
                bathrooms={2}
                kitchens={1}
                area={2000}
            />
            <OwnerCard avatarUrl={avatar} name={'Seema Sbouh'} bio={'hello my name is seema sbouh im an owner hhhh'} />
        </StyledPropertyDetailsS2>
    );
}

export default PropertyDetailsS2;