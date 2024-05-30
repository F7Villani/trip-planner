"use client"

import React, { Suspense, useEffect, useState } from "react";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import IWeatherService from "../services/interfaces/IWeatherService";
import OpenMeteoService from "../services/OpenMeteoService";
import WeatherChart from "../components/WeatherChart/WeatherChart";
import { useSearchParams } from "next/navigation";
import "./ChooseDate.css";
import dayjs from "dayjs";
import Place from "../models/Place";

function ChooseDate() {

  const [departureDay, setDepartureDay] = useState(dayjs());
  const [leaveDay, setLeaveDay] = useState(departureDay.add(10, 'day'));
  const [weathers, setWeathers] = useState([]);

  const searchParams = useSearchParams();
  const place : Place = Place.fromJson(searchParams.get('place'));

  const weatherService: IWeatherService = new OpenMeteoService();

  useEffect(() => {
    const fetchData = async () => {
      let weathers = await weatherService.getHistoricalWeatherByPeriodAndYears(place.latitude, place.longitude, departureDay.toDate(), leaveDay.toDate(), 3);
      setWeathers(weathers);
    };

    if(!place.isEmpty()){
      fetchData();
    }

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
            {
              !place.isEmpty() ?
              <div>
                <h2>Histórico do clima</h2>
                <p>Aqui você consegue ter uma ideia de como é o clima em {place.toString()}</p>
                <WeatherChart weathers={weathers[0]} />
              </div>
              :
              <div className=""></div>
            }
          </div>
        </LocalizationProvider>
      </div>
  );
}

export default ChooseDate;