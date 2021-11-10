
const fetchTravelerRepo = () => {
  return fetch("http://localhost:3001/api/v1/travelers")
    .then((response) => response.json())
    .catch(err => console.log(err))
};

const fetchTraveler = () => {
  return fetch("http://localhost:3001/api/v1/traveler/id")
    .then((response) => response.json())
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
