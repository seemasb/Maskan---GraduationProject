import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardContent, IconButton, Snackbar, Typography, Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import ROOT_URL from '../../config';
const StyledCard = styled(Card)`
  background-color: white;
  width: 40%;
`;

const Title = styled(Typography)`
  color: #45729d;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DaySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DayLabel = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
  color: #45729d;
  width: 150px;
`;


const TimeInput = styled.input`
  width: 74px;
  text-align: center;
  color: #45729d;
  border: 1px solid #45729d;
  border-radius: 10px;
  padding: 3px;
`;


// const StyledTimeInput = styled(TimePicker)`
//   && input {
//     color: #45729d;
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const SuccessSnackbar = styled(Snackbar)`
  .MuiSnackbarContent-root {
    background-color: green;
  }
`;

const StyledCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
row-gap: 25px;
`;

const FreeTimeCard = () => {
  const [SaturdayStart, setSaturdayStart] = useState("");
  const [SaturdayEnd, setSaturdayEnd] = useState("");
  const [SundayStart, setSundayStart] = useState("");
  const [SundayEnd, setSundayEnd] = useState("");
  const [mondayStart, setMondayStart] = useState("");
  const [mondayEnd, setMondayEnd] = useState("");
  const [tuesdayStart, setTuesdayStart] = useState("");
  const [tuesdayEnd, setTuesdayEnd] = useState("");
  const [wednesdayStart, setWednesdayStart] = useState("");
  const [wednesdayEnd, setWednesdayEnd] = useState("");
  const [thursdayStart, setThursdayStart] = useState("");
  const [thursdayEnd, setThursdayEnd] = useState("");
  const [fridayStart, setFridayStart] = useState("");
  const [fridayEnd, setFridayEnd] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSaveChanges = () => {
    setIsSnackbarOpen(true);
    let list = [];
    list.push({
      day: 'monday',
      start: parseInt(mondayStart.split(":")[0]),
      end: parseInt(mondayEnd.split(":")[0])
    })

    async function updateFreeTimes() {
      const userToken = localStorage.getItem('Token')
      let header;
      userToken ? header = {
        'Authorization': 'Token ' + userToken
      } : header = {};
      const res = await axios.post(
        `${ROOT_URL}/reservations/reserve/`,
        {
          body:list
        },
        {
          headers: header
        }
      );
    }
    console.log(list)
    updateFreeTimes()
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <Title variant="h6">Available Time</Title>
        <div>
          {/* <DaySelector>
            <DayLabel>Saturday:</DayLabel>
            <TimeInput type="time" value={SaturdayStart} onChange={(e) => setSaturdayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={SaturdayEnd} onChange={(e) => setSaturdayEnd(e.target.value)} />
          </DaySelector> */}
          {/* <InputLabel id="demo-select-small">Age</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={'Monday'}
            label="Age"
            onChange={() => { }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select> */}
          <DaySelector>
            <DayLabel>Sunday:</DayLabel>
            <TimeInput type="time" value={SundayStart} onChange={(e) => setSundayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={SundayEnd} onChange={(e) => setSundayEnd(e.target.value)} />
          </DaySelector>
          <DaySelector>
            <DayLabel>Monday:</DayLabel>
            <TimeInput type="time" value={mondayStart} onChange={(e) => setMondayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={mondayEnd} onChange={(e) => setMondayEnd(e.target.value)} />
          </DaySelector>
          <DaySelector>
            <DayLabel>Tuesday:</DayLabel>
            <TimeInput type="time" value={tuesdayStart} onChange={(e) => setTuesdayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={tuesdayEnd} onChange={(e) => setTuesdayEnd(e.target.value)} />
          </DaySelector>
          <DaySelector>
            <DayLabel>Wednesday:</DayLabel>
            <TimeInput type="time" value={wednesdayStart} onChange={(e) => setWednesdayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={wednesdayEnd} onChange={(e) => setWednesdayEnd(e.target.value)} />
          </DaySelector>
          <DaySelector>
            <DayLabel>Thursday:</DayLabel>
            <TimeInput type="time" value={thursdayStart} onChange={(e) => setThursdayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={thursdayEnd} onChange={(e) => setThursdayEnd(e.target.value)} />
          </DaySelector>
          <DaySelector>
            <DayLabel>Friday:</DayLabel>
            <TimeInput type="time" value={fridayStart} onChange={(e) => setFridayStart(e.target.value)} />
            <Typography>-</Typography>
            <TimeInput type="time" value={fridayEnd} onChange={(e) => setFridayEnd(e.target.value)} />
          </DaySelector>

          <ButtonContainer>
            {/* <IconButton color="primary" aria-label="edit">
                        <Edit />
                    </IconButton> */}
            <Button variant="contained" onClick={handleSaveChanges} style={{ backgroundColor: '#45729d', color: 'white', width: '35%' }}>
              Update
            </Button>
          </ButtonContainer>
        </div>
      </StyledCardContent>
      <SuccessSnackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Changes saved successfully"
      />
    </StyledCard>
  );
};

export default FreeTimeCard;