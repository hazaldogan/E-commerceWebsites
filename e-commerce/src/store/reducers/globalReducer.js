import {
  CHANGE_CATEGORIES,
  CHANGE_LANGUAGE,
  CHANGE_ROLES,
  CHANGE_THEME,
} from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "light",
  lang: "tr",
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORIES:
      return { ...state, categories: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, lang: action.payload };
    case CHANGE_ROLES:
      return { ...state, roles: action.payload };
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
