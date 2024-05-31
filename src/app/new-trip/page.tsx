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
import Step from '../enums/Step';
import StepperItem from '../components/StepperItem/StepperItem';

function NewTripPage(){

  const [currentStep, setCurrentStep] = useState<Step>(Step.destiny);
  const [place, setPlace] = useState<Place>(new Place());

  function handleClickForwardButton(){
    let nextStep = getNextStep(currentStep);
    if(isStepEnabled(nextStep)){
        setCurrentStep(nextStep);
    }
  }

  function getNextStep(step: Step) : Step{
    switch (step) {
      case Step.destiny:
        return Step.date;
      case Step.date:
        return Step.transport;
      case Step.transport:
        return Step.accommodation;
      default:
        return step;
    }
  }

  function stepPage(){
    switch(currentStep){
      case Step.destiny:
        return <ChooseDestiny destiny={place} sendDestinty={(place) => setPlace(place)} />;
      case Step.date:
        return <ChooseDate place={place} />;
      default:
        return <p></p>;
    }
  }

  function isStepEnabled(step: Step) : boolean {
    switch(step){
      case Step.destiny:
        return true;
      case Step.date:
        return !place.isEmpty();
      case Step.culture:
        return !place.isEmpty();
      default:
        return false;
    }
  }

  return (
    <div className="new-trip">
      <div className="flex">
        <div className="stepper-menu">
          <ul>
            <StepperItem 
              onClick={setCurrentStep} 
              label="Destino" 
              step={Step.destiny}
              icon={<PlaceRoundedIcon/>}
              enabled={isStepEnabled(Step.destiny)}
              sublabel={!place.isEmpty() ? place.toString() : null}
            />
            <StepperItem 
              onClick={setCurrentStep} 
              label="Data" 
              step={Step.date}
              icon={<TodayRoundedIcon/>}
              enabled={isStepEnabled(Step.date)}
            />
            <StepperItem 
              onClick={setCurrentStep} 
              label="Transporte" 
              step={Step.transport}
              icon={<AirplanemodeActiveRoundedIcon/>}
              enabled={isStepEnabled(Step.transport)}
            />
            <StepperItem 
              onClick={setCurrentStep} 
              label="Acomodação" 
              step={Step.accommodation}
              icon={<HotelRoundedIcon/>}
              enabled={isStepEnabled(Step.accommodation)}
            />
            <StepperItem 
              onClick={setCurrentStep} 
              label="Cultura" 
              step={Step.culture}
              icon={<TheaterComedyIcon/>}
              enabled={isStepEnabled(Step.culture)}
            />
            <StepperItem 
              onClick={setCurrentStep} 
              label="Resumo" 
              step={Step.summary}
              icon={<DescriptionIcon/>}
              enabled={isStepEnabled(Step.summary)}
            />
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