export const addToList = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};
export const updateItem = (id, name) => {
  return {
    type: "UPDATE",
    payload: id,
    name,
  };
};

export const removeFromList = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
export const updateList = (id) => {
  return {
    type: "SELECTED",
    payload: id,
  };
};

export const refresh = () => {
  return {
    type: "REFRESH",
  };
};
