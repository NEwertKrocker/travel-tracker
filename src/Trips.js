import DataHandler from './DataHandler';
import dayjs from 'dayjs';

class Trips extends DataHandler {
  constructor(dataset){
    super(dataset)
  }
  getAllUserTrips(userID){
    this.getDataByUserID(userID);
    this.filteredDataByUserID.sort((a, b) => {
      if (dayjs(a.date).isBefore(dayjs(b.date))) {
        return -1;
      }
      if (dayjs(a.date).isAfter(dayjs(b.date))) {
        return 1;
      }
      return 0;
    })
    console.log(this.filteredDataByUserID);
    return this.filteredDataByUserID;
  }
  calculateTravelCostYTD(userID, destinations){
    this.getDataByUserID(userID);
    let yearlyCost = this.filteredDataByUserID.reduce((totalCost, trip) => {
        const destination = destinations.getDataByID(trip.destinationID);
        const lodgingCosts = destinations.getTotalLodgingCosts(destination[0].id, trip.duration);
        const flightCosts = destinations.getTotalFlightCosts(destination[0].id, trip.travelers);
        totalCost += lodgingCosts + flightCosts
        return totalCost
    }, 0)
    return Math.floor(yearlyCost * 11) / 10;
  }
}

export default Trips;
