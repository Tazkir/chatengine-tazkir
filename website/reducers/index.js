import { combineReducers } from "redux";

import accountsReducer from "./AccountsReducer.js";
import projectsReducer from "./ProjectsReducer";
import stepsReducer from "./StepsReducer";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  accounts: accountsReducer,
  projects: projectsReducer,
  steps: stepsReducer,
  form: formReducer,
});
