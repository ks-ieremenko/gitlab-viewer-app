import axios from "axios";

const token = "glpat-31EhM__pCSswD2xu_1Aq";

export function getProjects() {
  return axios.get("https://gitlab.com/api/v4/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      owned: true,
    },
  });
}

export function createProject(name) {
  return axios.post(
    "https://gitlab.com/api/v4/projects",
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function deleteProject(id) {
  return axios.delete(`https://gitlab.com/api/v4/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
