const db = require('../../data/dbConfig');

async function get() {
  const projectsInfo = await db("projects");
  const projectInfoUpdated = projectsInfo.map((project) => {
    return {
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed ? true : false,
    };
  });

  return projectInfoUpdated;
      
}

async function add(project) {
   const [id] = await db("projects").insert(project)
   const newProject = {
    project_id: id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed ? true : false,
   }
   return newProject;
}

module.exports = { 
    get,
    add,
}
