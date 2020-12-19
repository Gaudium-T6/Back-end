const { TechModel } = require('../models/tech');

class TechService {
  constructor() {
    this.model = TechModel;
  }

  async getTechs() {
    const techs = await this.model.findAll();
    return techs || [];
  }

}

module.exports = TechService;
