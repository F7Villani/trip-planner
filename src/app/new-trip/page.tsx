"use client"

import './NewTrip.css'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import { useState } from 'react';
import ForwardButton from '../components/ForwardButton/ForwardButton';
import ChooseDestiny from '../components/ChooseDestinty/ChooseDestiny';
import ChooseDate from '../components/ChooseDate/ChooseDate';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DescriptionIcon from '@mui/icons-material/Description';
import Place from '../models/Place';

enum Step {
  destiny,
  date,
  trasport,
  accommodation,
  culture,
  summary
}

function NewTripPage(){

  const [step, setStep] = useState<Step>(Step.destiny);
  const [place, setPlace] = useState<Place>(new Place());

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

  function stepPage(){
    switch(step){
      case Step.destiny:
        return <ChooseDestiny destiny={place} sendDestinty={(place) => setPlace(place)} />;
      case Step.date:
        return <ChooseDate place={place} />;
      default:
        return <p></p>;
    }
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
            <li className='stepper-item' onClick={() => setStep(Step.culture)}>
              <TheaterComedyIcon className='icon' />
              <p>Cultura</p>
            </li>
            <li className='stepper-item' onClick={() => setStep(Step.summary)}>
              <DescriptionIcon className='icon' />
              <p>Resumo</p>
            </li>
          </ul>
        </div>
        <div className="step-page">
          { stepPage()}
        </div>
      </div>
      <div className="button">
        <ForwardButton onClick={handleClickForwardButton} />
      </div>
    </div>
  );
}

export default NewTripPage;