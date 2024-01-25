import { API } from "../../api/axios";

export const CHANGE_ROLES = "CHANGE ROLES";
export const CHANGE_CATEGORIES = "CHANGE CATEGORIES";
export const CHANGE_THEME = "CHANGE THEME";
export const CHANGE_LANGUAGE = "CHANGE LANGUAGE";

export const changeRoles = (roles) => {
  return {
    type: CHANGE_ROLES,
    payload: roles,
  };
};

export const rolesSuccess = () => (dispatch) => {
  API.get("/roles")
    .then((res) => {
      dispatch(changeRoles(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const changeCategories = (categories) => {
  return {
    type: CHANGE_CATEGORIES,
    payload: categories,
  };
};

export const categoriesSuccess = () => (dispatch) => {
  API.get("/categories")
    .then((res) => {
      dispatch(changeCategories(res.data));
    })
    .catch((err) => {
      console.log(err);
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
