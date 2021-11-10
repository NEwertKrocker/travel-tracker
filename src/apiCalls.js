import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';

const fetchTravelerRepo = () => {
  return fetch("http://localhost:3001/api/v1/travelers")
    .then((response) => response.json())
    .catch(err => console.log(err))
};

const fetchTraveler = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then((response) => response.json())
    .then(response => new Traveler(response))
    .catch(err => console.log(err))
};

const fetchDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .catch(err => console.log(err))
};

const fetchTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
    .then((response) => response.json())
    .catch(err => console.log(err))
};

export {
  fetchTravelerRepo,
  fetchTraveler,
  fetchDestinations,
  fetchTrips,
};
