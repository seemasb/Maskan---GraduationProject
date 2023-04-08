import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

const localizer = momentLocalizer(moment);

const response= [
  {
    id: 42,
    start_time: 9,
    end_time: 10,
    date: '2023-04-10',
    user: 1
  }
]

const events = [
  // {
  //   id: response.id,
  //   title: 'John visit',
  //   start: new Date(2023, 3, 5, response.start_time, 0),
  //   end: new Date(2023, 3, 5, response.end_time, 0),
  //   name: 'hiba sbouh'
  // },
  {
    id: 2,
    title: 'Meeting 2',
    start: new Date(2023, 3, 5, 11, 0),
    end: new Date(2023, 3, 5, 12, 0),
  },
  {
    id: 4,
    title: 'Hiba visit',
    start: new Date(2023, 3, 11, 14, 0),
    end: new Date(2023, 3, 11, 15, 0),
  }
];

const StyledCalendar = styled(Calendar)`
  height: 560px;
  background-color: white;
  width: 100%;
`;

const EventWrapper = styled.div`
  background-color: #45729d;
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #3b5f8a;
  }
`;

export default function ProfileCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDialog = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <StyledCalendar
        localizer={localizer}
        events={events}
        components={{
          eventWrapper: (props) => (
            <EventWrapper onClick={() => handleSelectEvent(props.event)}>
              {props.children}
            </EventWrapper>
          ),
        }}
        onSelectEvent={handleSelectEvent}
      />
      <Dialog open={Boolean(selectedEvent)} onClose={handleCloseDialog}>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <p>Start: {moment(selectedEvent?.start).format('MMMM Do YYYY, h:mm a')}</p>
          <p>End: {moment(selectedEvent?.end).format('MMMM Do YYYY, h:mm a')}</p>
          {selectedEvent?.name && <p>Name: {selectedEvent.name}</p>}
        </DialogContent>
      </Dialog>
    </>
  );
}
