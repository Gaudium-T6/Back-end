const { Project } = require('../models/project');
const { Tech } = require('../models/tech');
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

class TechsService {
  constructor() {
    this.table = 'techs';
    this.model = Tech;
  }

  async getTechs() {
    console.log('getting techs');
    const techs = await Tech.findAll();
    return techs || [];
  }

}

module.exports = { ProjectsService, TechsService};
