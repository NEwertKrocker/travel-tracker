import DataHandler from './DataHandler';

class Trips extends DataHandler {
  constructor(dataset){
    super(dataset)
  }
  getAllUserTrips(userID){
    this.getDataByUserID(userID);
    return this.filteredDataByUserID;
  }
  calculateTravelCostYTD(userID, destinations){
    this.getDataByUserID(userID);
    let yearlyCost = this.filteredDataByUserID.reduce((totalCost, trip) => {
        const destination = destinations.getDataByID(trip.destinationID);
        const lodgingCosts = destinations.getTotalLodgingCosts(destination[0].id, trip);
        const flightCosts = destinations.getTotalFlightCosts(destination[0].id, trip);
        totalCost += lodgingCosts + flightCosts
        return totalCost
    }, 0)
    return Math.floor(yearlyCost * 11) / 10;
  }
}

export default Trips;
