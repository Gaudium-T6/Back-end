const { TypeModel } = require('../models/type');

class TypeService {
  constructor() {
    this.model = TypeModel;
  }

  async getTypes() {
    const types = await this.model.findAll();
    return types || [];
  }
}

module.exports = TypeService;
