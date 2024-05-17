"use client"

import React, { useState } from "react";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Loader from '../components/Loader/Loader';
import "./ChooseDate.css";
import dayjs from "dayjs";

function ChooseDate() {

  const [departureDay, setDepartureDay] = useState(dayjs());
  const [leaveDay, setLeaveDay] = useState(departureDay);

  function onChangeDepartureDay(newDate: dayjs.Dayjs){
    setDepartureDay(newDate); 
    if(newDate.isAfter(leaveDay)){
      setLeaveDay(newDate.add(1, "day"));
    }
  }

  return (
    <div className="choose-date">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="grid">
          <div className="calendars">
            <div className="calendar">
              <h2>Dia da Ida</h2>
              <DateCalendar disablePast={true} value={departureDay} onChange={onChangeDepartureDay}/>
            </div>
            <div className="calendar">
              <h2>Dia da Volta</h2>
              <DateCalendar disablePast={true} value={leaveDay} onChange={(newDate) => setLeaveDay(newDate)}/>
            </div>
          </div>
          <Loader />
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default ChooseDate;