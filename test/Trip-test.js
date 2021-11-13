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
  it('should be store trips which each have an ID number', () => {
    expect(trips.dataset[0].id).to.equal(1);
    expect(trips.dataset[1].id).to.equal(2);
    expect(trips.dataset[2].id).to.equal(undefined);
  });
  it('should be store trips which each have an associated userID', () => {
    expect(trips.dataset[0].userID).to.equal(44);
    expect(trips.dataset[1].userID).to.equal(35);
    expect(trips.dataset[2].userID).to.equal(undefined);
  });
  it('should be store trips which each have an associated destinationID', () => {
    expect(trips.dataset[0].destinationID).to.equal(49);
    expect(trips.dataset[1].destinationID).to.equal(25);
    expect(trips.dataset[2].destinationID).to.equal(undefined);
  });
  it('should keep track of how many travelers are on each trip', () => {
    expect(trips.dataset[0].travelers).to.equal(1);
    expect(trips.dataset[1].travelers).to.equal(5);
    expect(trips.dataset[2].travelers).to.equal(undefined);
  });
  it('should keep track of each trip\'s start date', () => {
    expect(trips.dataset[0].date).to.equal("2022/09/16");
    expect(trips.dataset[1].date).to.equal("2022/10/04");
    expect(trips.dataset[2].date).to.equal(undefined);
  });
  it('should keep track of how long each trip is in days', () => {
    expect(trips.dataset[0].duration).to.equal(8);
    expect(trips.dataset[1].duration).to.equal(18);
    expect(trips.dataset[2].duration).to.equal(undefined);
  });
  it('should keep track of each trip\'s status', () => {
    expect(trips.dataset[0].status).to.equal("approved");
    expect(trips.dataset[1].status).to.equal("approved");
    expect(trips.dataset[2].status).to.equal(undefined);
  });
  it('should be able to hold an array of suggested activities for each trip', () => {
    expect(trips.dataset[0].suggestedActivities).to.deep.equal([]);
    expect(trips.dataset[1].suggestedActivities).to.deep.equal([]);
    expect(trips.dataset[2].suggestedActivities).to.equal(undefined);
  });
  it('should be able to filter trips by user ID', () => {
    expect(trips.getAllUserTrips(44)).to.deep.equal([trip1]);
    expect(trips.getAllUserTrips(5)).to.deep.equal([]);
  });
  it('should be able to total a user\'s total travel costs for the year', () => {
    expect(trips.calculateTravelCostYTD(35, destinations)).to.equal(4565);
  })
});
