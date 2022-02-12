import {
  CREATE_PROJECT,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  DELETE_PROJECT,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
} from "./project.action";

const initialState = {
  loading: true,
  loaded: false,
  submitting: false,
  submitted: false,
  error: null,
  projectsList: [],
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        loading: true,
        loaded: false,
        projectsList: [],
        error: null,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        projectsList: action.projectsList,
      };
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
        projectsList: [],
      };
    case CREATE_PROJECT:
      return {
        ...state,
        submitting: true,
        submitted: false,
        error: null,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitted: true,
      };
    case CREATE_PROJECT_FAIL:
      return {
        ...state,
        submitting: false,
        submitted: false,
        error: action.error,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        submitting: true,
        submitted: false,
        error: null,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitted: true,
      };
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        submitting: false,
        submitted: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default projectsReducer;
