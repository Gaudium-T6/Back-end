const { Project } = require('../models/project');
const { TypeModel } = require('../models/type');
class ProjectsService {
  constructor() {
    this.model = Project;
  }

  async getProjects() {
    console.log('getting projects');
    const projects = await Project.findAll({
      include: ['type']
    });
    return projects || [];
  }


}

module.exports = ProjectsService;