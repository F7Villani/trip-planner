import TripCard from "./components/TripCard";
import trips from "./trips";

export default function Home() {
  return (
    <>
      <header>
        <img className="logo" src="./trip-planner-logo.png"></img>
        <h1>Trip Planner</h1>
      </header>
      <div className="trip-list">
      {
        trips.map((trip) => {
          return <TripCard
            key={trip.id}
            imgUrl={trip.imgUrl}
            destination={trip.destination}
            cost={trip.cost}
          />
        })
      }
      </div>
      <div className="waves">
        <img src="./waves/wave.svg"></img>
        <img src="./waves/wave2.svg"></img>
        <img src="./waves/wave3.svg"></img>
      </div>
    </>
  );
}
