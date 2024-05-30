"use client"

import './NewTrip.css'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import { useState } from 'react';
import ForwardButton from '../components/ForwardButton/ForwardButton';

enum Step {
  destiny,
  date,
  trasport,
  accommodation
}

function NewTripPage(){

  const [step, setStep] = useState(Step.destiny)

  function handleClickForwardButton(){
    setStep((current: Step) => {
      switch (current) {
        case Step.destiny:
          return Step.date;
        case Step.date:
          return Step.trasport;
        case Step.trasport:
          return Step.accommodation;
        default:
          return current;
      }
    })
  }

  return (
    <div className="new-trip">
      <div className="flex">
        <div className="stepper-menu">
          <ul>
            <li className='stepper-item' onClick={() => setStep(Step.destiny)}>
              <PlaceRoundedIcon className='icon' />
              <p>Destino</p>
            </li>
            <li className='stepper-item' onClick={() => setStep(Step.date)}>
              <TodayRoundedIcon className='icon' />
              <p>Data</p>
            </li>
            <li className='stepper-item' onClick={() => setStep(Step.trasport)}>
              <AirplanemodeActiveRoundedIcon className='icon' />
              <p>Transporte</p>
            </li>
            <li className='stepper-item' onClick={() => setStep(Step.accommodation)}>
              <HotelRoundedIcon className='icon' />
              <p>Acomodação</p>
            </li>
          </ul>
        </div>
        <div className="">{step.toString()}</div>
      </div>
      <div className="button">
        <ForwardButton onClick={handleClickForwardButton} />
      </div>
    </div>
  );
}

export default NewTripPage;