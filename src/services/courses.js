const { CourseModel } = require('../models/course');

class CoursesService {
  constructor() {
    this.model = CourseModel;
  }

  async getCourses() {
    const courses = await this.model.findAll();
    return courses || [];
  }


}

module.exports = CoursesService;