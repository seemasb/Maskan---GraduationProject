import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-bottom: 43px;

  /* Media query to make the div responsive */
//   @media (max-width: 768px) {
//     width: 90%;
//   }
`;

function PropertyDescription({propertyDetails}) {
    return (
        <StyledDiv>
            <h2>Property Description</h2>
            <div>
                {propertyDetails?propertyDetails.description:<div>loading...</div>}
            </div>
        </StyledDiv>
    );
}

export default PropertyDescription;