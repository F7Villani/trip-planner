"use client"

import React, { useState } from "react";
import './CreateTrip.css';
import GeoNamesService from "../services/GeoNamesService";
import AutocompleteTextField from "../components/AutocompleteTextField/AutocompleteTextField";
import Place from "../models/Place";

function CreateTripPage() {

  const [place, setPlace]  = useState(new Place());

  const placeService = new GeoNamesService();

  async function getPlaces(text: string){
    return await placeService.getPlacesByText(text);
  }

  function onSelectPlace(place: Place){
    setPlace(place);
  }

  function placeToString(place: Place){
    return place.city + ', ' + place.country;
  }

  return (
    <>
      <h1>Hello World!</h1>
      <AutocompleteTextField 
        delay={500}
        itemToString={placeToString} 
        handleItemClick={onSelectPlace}
        getItems={getPlaces} />
      <h1>{place.city}</h1>
    </>
  );
}

export default CreateTripPage;