import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faCheckCircle } from '@fontawesome/free-solid-svg-icons';
import { FaLock, FaHandHoldingUsd, FaComments, FaStar } from 'react-icons/fa';

const WhatWeDoContainer = styled.div`
//   background-color: #f4f4f4;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const WhatWeDoTitle = styled(Typography)`
  && {
    color: #45729d;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const FeatureBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // column-gap: 5%;
`;

const FeatureBox = styled.div`
  background-color: #fff;
  box-shadow: 0px 7px 20px rgba(11,7,5,0.2);
  border-radius: 16px;
  padding: 40px;
  margin: 20px;
  text-align: center;
  max-width: 200px;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 10px;
  }
  @media (min-width: 1700px) {
    max-width: 250px;
  }
`;

const FeatureIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #efecec;
  margin: 0 auto 20px;

  svg {
    color: #45729d;
    height: 32px;
    width: 32px;
  }
`;

const FeatureTitle = styled(Typography)`
  && {
    color: #45729d;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const FeatureDescription = styled(Typography)`
  && {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

function WhatWeDo() {
    return (
        <WhatWeDoContainer>
            <Container maxWidth="xl">
                <WhatWeDoTitle variant="h4">What We Do?</WhatWeDoTitle>
                <FeatureBoxContainer>
                    <FeatureBox>
                        <FeatureIconWrapper>
                        <FaLock size="35" color="#45729d" />
                            {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                        </FeatureIconWrapper>
                        <FeatureTitle variant="h6">Reliability</FeatureTitle>
                        <FeatureDescription>
                            We are committed to providing reliable and trustworthy.
                        </FeatureDescription>
                    </FeatureBox>
                    <FeatureBox>
                        <FeatureIconWrapper>
                            <FaHandHoldingUsd size="35" color="#45729d"/>
                            {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                        </FeatureIconWrapper>
                        <FeatureTitle variant="h6">Best Price</FeatureTitle>
                        <FeatureDescription>
                            We strive to ensure that our clients get the best .
                        </FeatureDescription>
                    </FeatureBox>
                    <FeatureBox>
                        <FeatureIconWrapper>
                            <FaComments size="35" color="#45729d"/>
                            {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                        </FeatureIconWrapper>
                        <FeatureTitle variant="h6">Communication</FeatureTitle>
                        <FeatureDescription>
                            We strive to ensure that our clients get the best possible price.
                        </FeatureDescription>
                    </FeatureBox>
                    <FeatureBox>
                        <FeatureIconWrapper>
                            <FaStar size="35" color="#45729d"/>
                            {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                        </FeatureIconWrapper>
                        <FeatureTitle variant="h6">Quality</FeatureTitle>
                        <FeatureDescription>
                            We strive to ensure that our clients their properties.
                        </FeatureDescription>
                    </FeatureBox>
                </FeatureBoxContainer>
            </Container>
        </WhatWeDoContainer>
    )
}
export default WhatWeDo;