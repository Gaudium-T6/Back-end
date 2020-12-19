const { Tech } = require('../models/tech');

class TechsService {
  constructor() {
    this.model = Tech;
  }

  async getTechs() {
    console.log('getting techs');
    const techs = await Tech.findAll();
    return techs || [];
  }

}

module.exports = TechsService;
