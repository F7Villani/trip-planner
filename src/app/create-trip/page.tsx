"use client"

import React, { useState } from "react";
import './CreateTrip.css';
import GeoNamesService from "../services/GeoNamesService";
import AutocompleteTextField from "../components/AutocompleteTextField/AutocompleteTextField";
import Place from "../models/Place";
import PexelsService from "../services/PexelsService";
import PlaceCard from "../components/PlaceCard/PlaceCard";
import Loader from "../components/Loader/Loader";

function CreateTripPage() {

  const [place, setPlace] = useState(new Place());

  const placeService = new GeoNamesService();
  const photoService = new PexelsService();

  async function getPlaces(text: string) {
    return await placeService.getPlacesByText(text);
  }

  async function onSelectPlace(place: Place) {
    const query = `${place.city} city view ${place.country}`;
    const urlPhoto = await photoService.getUrlPhotoByText(query);
    place.urlPhoto = urlPhoto;
    setPlace(place);
  }

  function placeToString(place: Place) {
    return place.city + ', ' + place.country;
  }

  return (
    <>
      <h2>Escolha seu destino</h2>

      <div className="create-trip-grid">
        <div className="textfield-wrapper">
          <AutocompleteTextField
            delay={500}
            itemToString={placeToString}
            handleItemClick={onSelectPlace}
            getItems={getPlaces} />
        </div>
        <p></p>
        {place.isEmpty() ? null : <PlaceCard place={place}/>}
      </div>      
    </>
  );
}

export default CreateTripPage;