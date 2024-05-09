"use client"

import React, { useState } from "react";
import './CreateTrip.css';
import GeoNamesService from "../services/GeoNamesService";
import AutocompleteTextField from "../components/AutocompleteTextField/AutocompleteTextField";
import Place from "../models/Place";

function CreateTripPage() {

  const [place, setPlace]  = useState({});

  const placeService = new GeoNamesService();

  async function getPlaces(text){
    return await placeService.getPlacesByText(text);
  }

  function onSelectPlace(item){
    setPlace(item);
  }

  function placeToString(place){
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