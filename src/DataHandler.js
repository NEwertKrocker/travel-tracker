class DataHandler {
  constructor(dataset) {
    this.dataset = dataset;
    this.filteredDataByID;
  }
  getDataByID(id) {
    this.filteredDataByID = this.dataset.filter((data) => {
      return data.id === id
    })
    return this.filteredDataByID;
  }
  getDataByUserID(userID) {
    this.filteredDataByUserID = this.dataset.filter((data) => {
      return data.userID === userID
    })
    return this.filteredDataByID;
  }
}

export default DataHandler;
