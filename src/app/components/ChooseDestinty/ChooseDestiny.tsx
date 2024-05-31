"use client"

import React, { useState } from "react";
import './ChooseDestiny.css';
import AutocompleteTextField from "../AutocompleteTextField/AutocompleteTextField";
import Place from "../../models/Place";
import PexelsService from "../../services/PexelsService";
import PlaceCard from "../PlaceCard/PlaceCard";
import OpenMeteoService from "../../services/OpenMeteoService";

interface ChooseDestinyProps {
  sendDestinty: (place: Place) => void;
  destiny: Place;
}

function ChooseDestiny({sendDestinty, destiny}: ChooseDestinyProps) {

  const [place, setPlace] = useState(destiny);

  const placeService = new OpenMeteoService();
  const photoService = new PexelsService();

  async function getPlaces(text: string) {
    return await placeService.getPlacesByText(text);
  }

  async function onSelectPlace(place: Place) {
    const query = `${place.city} city view ${place.country}`;
    const urlPhoto = await photoService.getUrlPhotoByText(query);
    place.urlPhoto = urlPhoto;
    setPlace(place);
    sendDestinty(place);
  }

  return (
    <div className="choose-date-grid">
      <div className="textfield-wrapper">
        <AutocompleteTextField<Place>
          initialItem={place}
          placeholder="Procure por uma cidade"
          delay={500}
          handleItemClick={onSelectPlace}
          getItems={getPlaces} />
      </div>
      <p></p>
      {place.isEmpty() ? null : <PlaceCard place={place} />}
    </div>
  );
}

export default ChooseDestiny;