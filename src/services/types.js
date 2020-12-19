const { TypeModel } = require('../models/type');

class TypeService {
  constructor() {
    this.model = TypeModel;
  }

  async getTypes() {
    const types = await this.model.findAll();
    return types || [];
  }

  async newType(req) {
    console.log(req);
    const query = { name: req.body.name };
    console.log(query);
    const type = await this.model.findOne(query);

    return type || [];
  };

}

module.exports = TypeService;
