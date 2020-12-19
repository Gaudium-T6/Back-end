const { ProfileModel } = require('../models/profile');

class ProfilesService {
  constructor() {
    this.model = ProfileModel;
  }

  async getProfiles() {
    const profiles = await this.model.findAll();
    return profiles || [];
  }

}

module.exports = ProfilesService;
