import chai from 'chai';
import Trips from '../src/Trips.js';
import Destinations from '../src/Destinations.js';
const expect = chai.expect;

describe('Trips', () => {

  let trip1;
  let trip2;
  let trip3;
  let trips;
  let destination1;
  let destinations;

  beforeEach(() => {
    trip1 = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    };
    trip2 = {
      "id": 2,
      "userID": 35,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
    };
  trip3 = {};
    trips = new Trips([trip1, trip2, trip3]);

  destination1 = {
    "id": 25,
    "destination": "New York, New York",
    "estimatedLodgingCostPerDay": 175,
    "estimatedFlightCostPerPerson": 200,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
  }
  destinations = new Destinations([destination1]);
  })
  it('should be a function', () => {
    expect(Trips).to.be.a('function');
  });
  it('should be able to filter trips by user ID', () => {
    expect(trips.getAllUserTrips(44)).to.deep.equal([trip1]);
    expect(trips.getAllUserTrips(5)).to.deep.equal([]);
  });
  it('should be able to total a user\'s total travel costs for the year', () => {
    expect(trips.calculateTravelCostYTD(35, destinations)).to.equal(4150);
  })
});
