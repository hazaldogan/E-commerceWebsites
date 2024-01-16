export const SET_STORE = "SET_STORE";

export const setStore = (data) => {
  return {
    type: SET_STORE,
    payload: data,
  };
};
