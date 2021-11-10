class DataHandler {
  constructor(dataset){
    this.dataset = dataset;
    this.filteredDataByID;
  }
  getDataByID(id){
    this.filteredDataByID = this.dataset.filter((data) => {
      return data.id === id
    })
    return this.filteredDataByID;
  }
}

export default DataHandler;
