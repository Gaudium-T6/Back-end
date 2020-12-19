const { ToolModel } = require('../models/tool');

class ToolService {
  constructor() {
    this.model = ToolModel;
  }

  async getTools() {
    const tools = await this.model.findAll();
    return tools || [];
  }
}

module.exports = ToolService;