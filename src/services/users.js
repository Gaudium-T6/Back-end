const { UserModel } = require('../models/user');

class UsersService {
  constructor() {
    this.model = UserModel;
  }

  async getUsers() {
    const users = await this.model.findAll();
    return users || [];
  }

}

module.exports = UsersService;
