import axios from "axios";
import { API } from "../../api/axios";

export const CHANGE_ROLES = "CHANGE ROLES";
export const CHANGE_CATEGORIES = "CHANGE CATEGORIES";
export const CHANGE_THEME = "CHANGE THEME";
export const CHANGE_LANGUAGE = "CHANGE LANGUAGE";

export const changeRoles = () => (dispatch) => {
  API.get("/roles").then((res) => {
    dispatch({ types: CHANGE_ROLES, payload: res.data }).catch((err) => {
      console.log(err);
    });
  });
};
export const changeCategories = () => (dispatch) => {
  API.get("/categories").then((res) => {
    dispatch({ types: CHANGE_CATEGORIES, payload: res.data }).catch((err) => {
      console.log(err);
    });
  });
};
export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};
export const changeLang = (lang) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang,
  };
};
