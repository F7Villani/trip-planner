"use client"

import React, { useState } from "react";
import './ChooseDestiny.css';
import AutocompleteTextField from "../AutocompleteTextField/AutocompleteTextField";
import Place from "../../models/Place";
import PexelsService from "../../services/PexelsService";
import PlaceCard from "../PlaceCard/PlaceCard";
import ForwardButton from "../ForwardButton/ForwardButton";
import OpenMeteoService from "../../services/OpenMeteoService";
import Link from "next/link";

function ChooseDestiny() {

  const [place, setPlace] = useState(new Place());

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
  }

  return (
    <>
      <div className="choose-date-grid">
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

export default ChooseDestiny;