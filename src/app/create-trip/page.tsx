"use client"

import React, { useState } from "react";
import './CreateTrip.css';
import AutocompleteTextField from "../components/AutocompleteTextField/AutocompleteTextField";
import Place from "../models/Place";
import PexelsService from "../services/PexelsService";
import PlaceCard from "../components/PlaceCard/PlaceCard";
import WeatherService from "../services/WeatherService";

function CreateTripPage() {

  const [place, setPlace] = useState(new Place());

  const placeService = new WeatherService();
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

  console.log("RENDERIZOU")

  return (
    <>
      <div className="create-trip-grid">
        <div className="textfield-wrapper">
          <AutocompleteTextField<Place>
            delay={500}
            handleItemClick={onSelectPlace}
            getItems={getPlaces} />
        </div>
        <p></p>
        {place.isEmpty() ? null : <PlaceCard place={place} />}
      </div>
    </>
  );
}

export default CreateTripPage;