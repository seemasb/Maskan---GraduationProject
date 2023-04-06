import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ReportIcon from '@material-ui/icons/Report';
import MessageIcon from '@material-ui/icons/Message';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';

const OwnerContainer = styled.div`
  background-color: white;
//   box-shadow: 0px 0px 10px ${grey[400]};
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
//   flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    // justify-content: center;
    text-align: left;
  }
`;

const AvatarImage = styled(Avatar)`
//   margin-bottom: 8px;
    width: 60px;
    height: 60px;


  @media (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0px;
  }
`;

const OwnerInfo = styled.div`
  
`;

const OwnerName = styled.h3`
  margin: 0;
`;

const OwnerBio = styled.p`
  margin: 8px 0;
`;

// const MessageButton = styled(Button)`
//   margin-right: 8px;
// `;

const MessageButtonStyled = styled(Button)`
//   margin-right: 8px;
  background-color: #FFFFFF !important;
  color: #45729d !important;
  border-radius: 8px !important;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #45729d !important;
    color: #FFFFFF !important;
    // color: #FFFFFF;
  }
`;

const StyledMessageButton = styled(Button)`
  background-color: #45729d !important;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: white !important;
  min-width: fit-content !important;
  border-radius: 100% !important;
//   width: 48px;
//   height: 48px;
  border-radius: 100%;
  &:hover {
    background-color: white !important;
    color: #45729d !important;
  }
`;


const ReportButton = styled(IconButton)`
  margin-left: 8px;
`;

const Section1 = styled('div')({
    display: 'flex'
})

const ButtonsContainer = styled('div')({
    display: 'flex',
    columnGap: '15px'
})

const OwnerSpan = styled('span')({
    color: 'lightgrey',
    fontSize: 'small',
})


///////////test/////////////
const StyledButton = styled(Button)`
  background-color: #45729d;
  border-radius: 50%;
  color: #fff;
  height: 64px;
  min-width: 64px;
  padding: 0;
  &:hover {
    background-color: #305d7b;
  }
`;

const StyledIcon = styled(MessageIcon)`
  font-size: 32px;
`;

const OwnerCard = ({ avatarUrl, name, bio }) => {
    return (
        <OwnerContainer>
            <Section1>
                <AvatarImage alt={name} src={avatarUrl} />
                <OwnerInfo>
                    <OwnerName>{name}</OwnerName>
                    <OwnerSpan>Owner</OwnerSpan>
                    {/* <OwnerBio>{bio}</OwnerBio> */}
                </OwnerInfo>
            </Section1>
            <ButtonsContainer>
                {/* <MessageButtonStyled variant="contained" startIcon={<MessageIcon />} size="small">
                    Message
                </MessageButtonStyled> */}

                <StyledMessageButton>
                    <MessageIcon fontSize="small"/>
                </StyledMessageButton>
                <MessageButtonStyled aria-label="report" size="small" variant="contained" startIcon={<ReportIcon />}>
                    Report
                </MessageButtonStyled>
            </ButtonsContainer>
        </OwnerContainer>
    );
};

export default OwnerCard;

// import React from 'react';
// import styled from 'styled-components';
// import { Avatar, Button, Paper } from '@material-ui/core';
// import { Report, Message } from '@material-ui/icons';

// const OwnerCard = ({ avatar , name , bio }) => {
//   return (
//     <StyledPaper>
//       <TopSection>
//         <Avatar src={avatar} alt={`${name}'s Profile Picture`} />
//         <OwnerName>{name}</OwnerName>
//         <OwnerBio>{bio}</OwnerBio>
//       </TopSection>
//       <BottomSection>
//         <MessageButton variant="contained" startIcon={<Message />} color="primary">
//           Message
//         </MessageButton>
//         <ReportButton variant="contained" startIcon={<Report />} color="secondary">
//           Report
//         </ReportButton>
//       </BottomSection>
//     </StyledPaper>
//   );
// };

// const StyledPaper = styled(Paper)`
//   background-color: white;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 1rem;
//   height: fit-content;
// `;

// const TopSection = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const OwnerName = styled.h3`
//   margin: 0 1rem;
// `;

// const OwnerBio = styled.p`
//   margin: 0;
// `;

// const BottomSection = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const MessageButton = styled(Button)`
//   margin-right: 1rem;
// `;

// const ReportButton = styled(Button)`
// `;

// export default OwnerCard;







// import styled from "styled-components";

