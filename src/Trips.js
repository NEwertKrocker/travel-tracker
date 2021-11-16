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
    return this.filteredDataByUserID;
  }
  calculateTravelCostYTD(userID, destinations){
    this.getAllUserTrips(userID);
    let currentYearTrips = this.filteredDataByUserID.filter((trip) => {
      return dayjs(trip.date).isAfter(dayjs("2021-01-01"));
    })
    let yearlyCost = currentYearTrips.reduce((totalCost, trip) => {
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
