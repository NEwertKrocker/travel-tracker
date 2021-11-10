import chai from 'chai';
import Trips from '../src/Trips.js';
const expect = chai.expect;

describe('Trips', () => {

  let trip1;
  let trip2;
  let trip3;
  let trips;

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
  })
  it('should be a function', () => {
    expect(Trips).to.be.a('function');
  });
  it('should be able to filter trips by user ID', () => {
    expect(trips.getAllUserTrips(44)).to.deep.equal([trip1]);
    expect(trips.getAllUserTrips(5)).to.deep.equal([]);
  });
});
