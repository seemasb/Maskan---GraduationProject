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

function PropertyDescription() {
    return (
        <StyledDiv>
            <h2>Property Description</h2>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci euismod, fermentum ipsum nec,
                ultrices orci. Sed rhoncus urna eu leo tincidunt, vel molestie ex efficitur. Nam eget dolor id quam
                congue tincidunt. Sed at eros augue. Fusce eu mollis nisi. Aliquam erat volutpat. Maecenas vitae justo id mauris efficitur faucibus. Integer ut massa euismod, consectetur mi sit amet, venenatis orci. Nulla facilisi. Nam vitae justo non quam aliquam rhoncus. Aenean finibus ex eget augue ultricies, in laoreet ante ultricies. In hac habitasse platea dictumst. Vivamus luctus maximus quam, vitae dignissim magna rhoncus in.
                Vivamus nec velit ullamcorper, ullamcorper velit id, accumsan tortor.
            </div>
        </StyledDiv>
    );
}

export default PropertyDescription;