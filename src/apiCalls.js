
const fetchTravelerRepo = () => {
  return fetch("http://localhost:3001/api/v1/users")
    .then((response) => response.json())
    .catch(err => console.log(err))
};

const fetchTraveler = () => {
  return fetch("http://localhost:3001/api/v1/sleep")
    .then((response) => response.json())
    .catch(err => console.log(err))
};

const fetchDestinations = () => {
  return fetch("http://localhost:3001/api/v1/activity")
    .then(response => response.json())
};

const fetchTrips = () => {
  return fetch("http://localhost:3001/api/v1/hydration")
    .then((response) => response.json())
};

export {
  fetchUserData,
  fetchSleepData,
  fetchActivityData,
  fetchHydrationData,
};
