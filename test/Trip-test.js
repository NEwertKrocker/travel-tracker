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
    expect(trips.getDataByID(1)).to.deep.equal([trip1]);
    expect(trips.getDataByID(5)).to.deep.equal([]);
  });
  it.skip('should store a location as `.trip`', () => {
    expect(trip1.trip).to.equal("Lima, Peru");
    expect(trip2.trip).to.equal("Stockholm, Sweden");
    expect(trip3.trip).to.equal(undefined);
  });
  it.skip('should track the estimated lodging cost per day', () => {
    expect(trip1.estimatedLodgingCostPerDay).to.equal(70);
    expect(trip2.estimatedLodgingCostPerDay).to.equal(100);
    expect(trip3.estimatedLodgingCostPerDay).to.equal(undefined);
  });
  it.skip('should track the estimated flight cost per person', () => {
    expect(trip1.estimatedFlightCostPerPerson).to.equal(400);
    expect(trip2.estimatedFlightCostPerPerson).to.equal(780);
    expect(trip3.estimatedFlightCostPerPerson).to.equal(undefined);
  });
  it.skip('have an associated image', () => {
    expect(trip1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(trip2.image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    expect(trip3.image).to.equal(undefined);
  });
  it.skip('have alt text for its image', () => {
    expect(trip1.alt).to.equal("overview of city buildings with a clear sky");
    expect(trip2.alt).to.equal("city with boats on the water during the day time");
    expect(trip3.alt).to.equal(undefined);
  });
});
