export const GET_PROJECTS = "GET_PROJECTS";
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_FAIL = "CREATE_PROJECT_FAIL";

export const DELETE_PROJECT = "DELETE_PROJECT";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAIL = "DELETE_PROJECT_FAIL";
export const requestProjects = () => {
  return { type: GET_PROJECTS };
};

export const fetchProjectsSuccess = (projectsList) => {
  return { type: GET_PROJECTS_SUCCESS, projectsList };
};

export const fetchProjectsFail = (error) => {
  return { type: GET_PROJECTS_FAIL, error };
};

export const createProject = (name) => {
  return { type: CREATE_PROJECT, name };
};

export const createProjectSuccess = () => {
  return { type: CREATE_PROJECT_SUCCESS };
};

export const createProjectFail = (error) => {
  return { type: CREATE_PROJECT_FAIL, error };
};
export const deleteProject = (id) => {
  return { type: DELETE_PROJECT, id };
};

export const deleteProjectSuccess = (project) => {
  return { type: DELETE_PROJECT_SUCCESS, project };
};

export const deleteProjectFail = (error) => {
  return { type: DELETE_PROJECT_FAIL, error };
};
