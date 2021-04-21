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

export const addToLocations = (item) => {
  return {
    type: "ADD_TO_LOCATIONS",
    payload: item,
  };
};

export const updateLocation = (id, name) => {
  return {
    type: "UPDATE_LOCATION",
    payload: id,
    name,
  };
};
export const removeLocation = (id) => {
  return {
    type: "REMOVE_LOCATION",
    payload: id,
  };
};
export const updateLocations = (id) => {
  return {
    type: "SELECTED_LOCATIONS",
    payload: id,
  };
};

export const sortLocations = () => {
  return {
    type: "SORT_LOCATIONS",
  };
};

export const groupByLocations = () => {
  return {
    type: "GROUP_BY_LOCATIONS",
  };
};
