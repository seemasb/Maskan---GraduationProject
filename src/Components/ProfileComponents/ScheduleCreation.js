import React, { useState } from 'react';
import styled from 'styled-components';
import {
    FormControlLabel,
    FormGroup,
    Switch,
    IconButton,
    Button,
    Typography,
    Card
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import ROOT_URL from '../../config';

const ScheduleCreationWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
//   align-items: center;
  padding: 20px;
  width: 40%;
  background-color: #fff;
`;

const DayPickerWrapper = styled.div`
  display: flex;
//   justify-content: space-around;
//   width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
  row-gap: 8px;
`;

const DayPickerItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
//   align-items: center;
`;

const TimePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const DeleteButtonWrapper = styled.div`
  margin-right: 5px;
`;

const TimeInput = styled.input`
//   width: 74px;
  text-align: center;
  color: #45729d;
  border: 1px solid #45729d;
  border-radius: 10px;
  padding: 7px;
`;

const DayElement = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 13px;
  padding: 5px;
  padding-left: 22px;
  cursor: pointer; /* add pointer cursor */
  transition: all 0.2s ease-in-out; /* add transition effect */
  
  &:hover,
  &:focus {
    border-color: #45729d; /* add border color on hover or focus */
    background-color: #fdf9f9;
  }
`;

const UpdateSchedule = styled(Button)`
background-color: #45729d !important;
color: white;
border-radius: 12px !important;
`;

const ScheduleCreation = () => {
    const [days, setDays] = useState([
        {
            label: 'Monday', value: false, times: []
        },
        {
            label: 'Tuesday', value: false, times: []
        },
        {
            label: 'Wednesday', value: false, times: []
        },
        {
            label: 'Thursday', value: false, times: []
        },
        {
            label: 'Friday', value: false, times: []
        },
        {
            label: 'Saturday', value: false, times: []
        },
        {
            label: 'Sunday', value: false, times: []
        },
    ]);

    const handleDayToggle = (index) => (event) => {
        const newDays = [...days];
        newDays[index].value = event.target.checked;
        setDays(newDays);
    };

    const handleTimePickerChange = (dayIndex, timeIndex, value) => {
        const newDays = [...days];
        newDays[dayIndex].times[timeIndex] = value;
        setDays(newDays);
    }

    const handleTimePickerChangeStart = (dayIndex, timeIndex, value) => {
        const newDays = [...days];
        newDays[dayIndex].times[timeIndex].start = value;
        setDays(newDays);
    };

    const handleTimePickerChangeEnd = (dayIndex, timeIndex, value) => {
        const newDays = [...days];
        newDays[dayIndex].times[timeIndex].end = value;
        setDays(newDays);
    };

    const handleAddTimePicker = (dayIndex) => {
        const newDays = [...days];
        // newDays[dayIndex].times.push(null);
        newDays[dayIndex].times.push({
            start: '00:00',
            end: '00:00'
        });
        setDays(newDays);
    };

    const handleDeleteTimePicker = (dayIndex, timeIndex) => {
        const newDays = [...days];
        newDays[dayIndex].times.splice(timeIndex, 1);
        setDays(newDays);
    };

    const handleCreateSchedule = () => {
  
            console.log('days', days)
            let readyScheduleTemp = [];
            // TODO: Implement create schedule functionality
            days.map((day) => {
                day.times.map((timeSlot) => {
                    readyScheduleTemp.push({
                        day: day.label,
                        start: parseInt(timeSlot.start.split(":")[0]),
                        end: parseInt(timeSlot.end.split(":")[0])
                    })
                })
            })


            const userToken = localStorage.getItem('Token')
            let header;
            userToken ? header = {
                'Authorization': 'Token ' + userToken
            } : header = {}

            axios.post(`${ROOT_URL}/reservations/slots/`, {
                list: readyScheduleTemp
            }, {
                headers: header
            }
            )
                .then(function (response) {
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                });
        



    };


    return (
        <ScheduleCreationWrapper>
            {/* <div>hiii</div> */}
            <DayPickerWrapper>
                {days.map((day, index) => (
                    <DayPickerItemWrapper key={day.label}>
                        <DayElement>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={day.value}
                                        onChange={handleDayToggle(index)}
                                        color="primary"
                                    />
                                }
                                label={day.label}
                            />
                            {day.value ?
                                <IconButton>
                                    <AddIcon onClick={() => handleAddTimePicker(index)} color='primary' />
                                    {/* <ArrowDownward onClick={() => handleAddTimePicker(index)} /> */}
                                </IconButton>

                                :
                                // <div>
                                <KeyboardArrowDownIcon style={{ marginTop: 8, color: 'gray', marginRight: 10 }} />
                                // </div>
                            }
                        </DayElement>
                        {day.value && (
                            <div key={day.label}>
                                {day.times.map((time, timeIndex) => (
                                    <TimePickerWrapper key={`${day.label}_${timeIndex}`}>
                                        <div style={{ display: 'flex', columnGap: 20 }}>
                                            <TimeInput type="time" value={time.start} onChange={(e) => handleTimePickerChangeStart(index, timeIndex, e.target.value)} />
                                            <Typography>-</Typography>
                                            <TimeInput type="time" value={time.end} onChange={(e) => handleTimePickerChangeEnd(index, timeIndex, e.target.value)} />
                                        </div>
                                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker
                                            ampm={false}
                                            value={time}
                                            onChange={(value) =>
                                                handleTimePickerChange(dayIndex, timeIndex, value)
                                            }
                                        />
                                    </MuiPickersUtilsProvider> */}
                                        <DeleteButtonWrapper>
                                            <IconButton>
                                                <DeleteIcon
                                                    onClick={() =>
                                                        handleDeleteTimePicker(index, timeIndex)
                                                    }

                                                />
                                            </IconButton>
                                        </DeleteButtonWrapper>
                                    </TimePickerWrapper>
                                )
                                )}
                            </div>
                        )}
                    </DayPickerItemWrapper>
                ))}
            </DayPickerWrapper>

            <UpdateSchedule onClick={handleCreateSchedule} color="primary"
                variant="contained"
            // className={classes.button}
            // style={{ height: '48px', fontSize: '15px' , backgroundColor: "#fff", color: "#45729d" , }}
            >
                Update Schedule
            </UpdateSchedule>
        </ScheduleCreationWrapper>
    )
}
export default ScheduleCreation;
