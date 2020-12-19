const { Project } = require('../models/project');
class ProjectsService {
  constructor() {
    this.table = 'projects';
    this.model = Project;
  }

  async getProjects() {
    console.log('getting projects');
    const projects = await Project.findAll();
    return projects || [];
  }

}

module.exports = ProjectsService;
