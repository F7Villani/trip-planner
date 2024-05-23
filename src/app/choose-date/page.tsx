"use client"

import React, { useEffect, useState } from "react";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./ChooseDate.css";
import dayjs from "dayjs";
import IWeatherService from "../services/interfaces/IWeatherService";
import OpenMeteoService from "../services/OpenMeteoService";
import WeatherChart from "../components/WeatherChart/WeatherChart";


function ChooseDate() {

  const [departureDay, setDepartureDay] = useState(dayjs());
  const [leaveDay, setLeaveDay] = useState(departureDay.add(1, 'day'));
  const [weathers, setWeathers] = useState([]);

  const weatherService: IWeatherService = new OpenMeteoService()

  useEffect(() => {
    const fetchData = async () => {
      let weathers = await weatherService.getHistoricalWeatherByPeriodAndYears(52.52, 13.41, departureDay.toDate(), leaveDay.toDate(), 3);
      setWeathers(weathers);
    };

    fetchData();

  }, [leaveDay]);

  function onChangeDepartureDay(newDate: dayjs.Dayjs) {
    setDepartureDay(newDate);
    if (newDate.isAfter(leaveDay)) {
      setLeaveDay(newDate.add(1, "day"));
    }
  }

  function onChangeLeaveDay(newDate: dayjs.Dayjs) {
    if (newDate.isAfter(departureDay)) {
      setLeaveDay(newDate);
    }
  }

  return (
    <div className="choose-date">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="grid">
          <div className="calendars">
            <div className="calendar">
              <h2>Dia da Ida</h2>
              <DateCalendar disablePast={true} value={departureDay} onChange={onChangeDepartureDay} />
            </div>
            <div className="calendar">
              <h2>Dia da Volta</h2>
              <DateCalendar disablePast={true} value={leaveDay} onChange={onChangeLeaveDay} />
            </div>
          </div>
          <div>
            <WeatherChart weathers={weathers[0]} />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default ChooseDate;