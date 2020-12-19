const { StatusModel } = require('../models/status');

class StatusesService {
  constructor() {
    this.model = StatusModel;
  }

  async getStatuses() {
    const statuses = await this.model.findAll();
    return statuses || [];
  }


}

module.exports = StatusesService;