import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import { Button, IconButton, Snackbar } from '@material-ui/core';
import { Schedule } from '@material-ui/icons';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

const response = [
    {
        id: 42,
        start_time: 9,
        end_time: 10,
        date: '2023-04-10',
        day: 'monday',
        user: 1
    },
    {
        id: 43,
        start_time: 4,
        end_time: 5,
        date: '2023-04-12',
        day: 'wednesday',
        user: 1
    },
    {
        id: 45,
        start_time: 7,
        end_time: 8,
        date: '2023-04-12',
        day: 'wednesday',
        user: 1
    }
]

let daysFree = [];
let daysAndDate = [];
let daysCheck = [];
response.map((element) => {
    //  const x = daysAndDate.find((day) => day.name == element.name);
    //  console.log(x)
    if (!daysCheck.includes(element.day)) {
        daysCheck.push(element.day)
        console.log('days check')
        console.log(daysCheck)
        daysAndDate.push({
            name: element.day,
            date: element.date
        })
    }
    console.log(daysAndDate)
    daysFree.push({
        name: element.day,
        date: element.date,
        slotOfTime: element.start_time + ':00 - ' + element.end_time + ':00',
        id: element.id,
        user: element.user
    })
})

console.log(daysFree)

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const days = [
    { name: 'Mon', date: '24' },
    { name: 'Tue', date: '25' },
    { name: 'Wed', date: '26' },
    { name: 'Thu', date: '27' },
    { name: 'Fri', date: '28' },
    { name: 'Sat', date: '29' },
    { name: 'Sun', date: '30' },
];

const timeSlots = [
    '9:00am - 10:00am',
    '10:00am - 11:00am',
    '11:00am - 12:00pm',
    '12:00pm - 1:00pm',
    '1:00pm - 2:00pm',
    '2:00pm - 3:00pm',
    '3:00pm - 4:00pm',
    '4:00pm - 5:00pm',
];

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const StyledDaysScroller = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: hidden;
  padding: 2px;
`;

const StyledDayButton = styled(Button)`
  background-color: ${(props) =>
        props.selected ? '#45729d !important' : 'transparent !important'};
  color: ${(props) => (props.selected ? '#fff !important' : '#000 !important')};
`;

const StyledTimeSlotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTimeSlotButton = styled(Button)`
  background-color: ${(props) =>
        props.selected ? '#45729d !important' : 'transparent !important'};
  color: ${(props) => (props.selected ? '#fff !important' : '#000 !important')};
`;

const StyledScheduleButton = styled(Button)`
  && {
    background-color: #45729d !important;
    color: #fff !important;
    width: 100%;
  }
`;

const ArrowButton = styled(Button)`
  && {
    height: 30px;
    min-width: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #45729d;
    color: white !important;
    margin: 5px;
    margin-top: 17px;
}
`;

const ScheduleBox = styled.div`
display: flex;
width: 100%;
`


// const StyledDaysScroller = styled.div`
//   display: flex;
//   overflow-x: auto;
// `;

// const StyledDayButton = styled(Button)`
//   && {
//     margin-right: 10px;
//   }
// `;
const ScheduleTour = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [ColoredselectedTimeSlot, setColoredSelectedTimeSlot] = useState(null);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const vertical = 'bottom';
    const horizontal = 'left';

    const handleLeftArrowClick = () => {
        const scroller = document.getElementById('days-scroller');
        scroller.scrollBy({ left: -100, behavior: 'smooth' });
        setScrollPosition(scroller.scrollLeft);
    };

    const handleRightArrowClick = () => {
        const scroller = document.getElementById('days-scroller');
        scroller.scrollBy({ left: 100, behavior: 'smooth' });
        setScrollPosition(scroller.scrollLeft);
    };

    const handleDayButtonClick = (day) => {
        if (day == selectedDay) {
            setSelectedDay(null);
            setSelectedTimeSlot(null);
        }
        else {
            setSelectedDay(day);
            console.log(selectedDay)
            setSelectedTimeSlot(null);
        }
    };

    const handleTimeSlotButtonClick = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
        setColoredSelectedTimeSlot(timeSlot.slotOfTime)
    };

    const handleScheduleButtonClick = () => {
        console.log(selectedTimeSlot)
        //////////////////////////////////////////how to send axios with param/////////////////////
        async function sendSlotId() {
            const res = await axios.post(
                'https://fake-api.kindacode.com/tutorials',
                {
                    // data to sent to the server - post body
                    // it can be an empty object
                },
                {
                    // specify query parameters
                    params: {
                        slotId: selectedTimeSlot.id,
                    },
                }
            );
        }

        sendSlotId()
        setShowSnackbar(true);
        //send days
        setSelectedDay(null);
        setSelectedTimeSlot(null);
    };

    const handleSnackbarClose = () => {
        setShowSnackbar(false);
    };

    return (
        <StyledContainer>
            <ScheduleBox>
                <ArrowButton disabled={scrollPosition === 0} onClick={handleLeftArrowClick}>
                    {'<'}
                </ArrowButton>
                <StyledDaysScroller id="days-scroller">
                    {daysAndDate.map((day) => (
                        <StyledDayButton
                            key={day.date}
                            variant="contained"
                            selected={day === selectedDay}
                            onClick={() => handleDayButtonClick(day)}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>{day.name}</span>
                                <span>{day.date.split("-")[2]}</span>
                            </div>
                        </StyledDayButton>
                    ))}
                </StyledDaysScroller>
                <ArrowButton
                    // disabled={
                    //     document.getElementById('days-scroller').scrollWidth - document.getElementById('days-scroller').clientWidth ===
                    //     scrollPosition
                    // }
                    onClick={handleRightArrowClick}
                >
                    {'>'}
                </ArrowButton>
            </ScheduleBox>
            {/* <StyledDaysScroller>
                {days.map((day) => (
                    <StyledDayButton
                        key={day.date}
                        variant="contained"
                        selected={day === selectedDay}
                        onClick={() => handleDayButtonClick(day)}
                    >
                        {day.name} {day.date}
                    </StyledDayButton>
                ))}
            </StyledDaysScroller> */}
            {selectedDay && (
                <StyledTimeSlotsContainer>
                    {daysFree.map((day) =>
                        day.name == selectedDay.name ?
                            <StyledTimeSlotButton
                                key={day.slotOfTime}
                                variant="contained"
                                selected={day.slotOfTime == ColoredselectedTimeSlot}
                                onClick={() => { handleTimeSlotButtonClick(day); }}>
                                {day.slotOfTime}
                                {/* {day.name == selectedDay.name ? day.slotOfTime : <span style={{display: 'none'}}></span>} */}
                            </StyledTimeSlotButton>
                            : <></>
                    )}

                </StyledTimeSlotsContainer>
            )
            }
            <StyledScheduleButton onClick={handleScheduleButtonClick} startIcon={<CalendarMonthIcon />}>
                {/* <Schedule /> */}
                Schedule a tour
            </StyledScheduleButton>

            <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Tour scheduled successfully!
                </Alert>
            </Snackbar>
            {/* <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Tour scheduled successfully!"
            /> */}
            {/* <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                "Tour scheduled successfully!"
                </Alert>
            </Snackbar> */}
        </StyledContainer >
    );
};

export default ScheduleTour;
