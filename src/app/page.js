"use client";

import { useRouter } from "next/navigation";
import AddTripCard from "./components/AddTripCard/AddTripCard";
import TripCard from "./components/TripCard/TripCard";
import trips from "./trips";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <div className="trip-list">
      {
        trips.map((trip) => {
          return <TripCard
            key={trip.id}
            imgUrl={trip.imgUrl}
            destination={trip.destination}
            cost={trip.cost}
            departureDate={trip.departureDate}
          />
        })
      }
      <AddTripCard onClick={() => router.push('/create-trip')} />
      </div>
      <div className="waves">
        <img src="./waves/wave.svg" ></img>
        <img src="./waves/wave2.svg"></img>
        <img src="./waves/wave3.svg"></img>
      </div>
    </>
  );
}
