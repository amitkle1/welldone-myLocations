const listReducer = (state = { category: [], locations: [] }, action) => {
  //categories
  switch (action.type) {
    case "ADD":
      return { ...state, category: [...state.category, action.payload] };

    case "UPDATE": {
      const newArray = { ...state };
      const categoryName = newArray.category[action.payload].name;

      newArray.category[action.payload].name = action.name;
      newArray.locations.map((location) => {
        if (location.category === categoryName) {
          location.category = action.name;
        }
      });
      return newArray;
    }
    case "REMOVE": {
      const newArray = { ...state };
      const removeItem = newArray.category[action.payload];
      newArray.category.map((item) => (item.isSelected = false));

      return {
        ...state,
        category: newArray.category.filter(
          (obj) => obj.name !== removeItem.name
        ),
      };
    }
    case "SELECTED": {
      const newArray = { ...state };
      newArray.category.map((item) => (item.isSelected = false));
      newArray.category[action.payload].isSelected = !newArray.category[
        action.payload
      ].isSelected;
      return newArray;
    }
    case "REFRESH": {
      const newArray = { ...state };
      newArray.category.map((obj) => (obj.isSelected = false));
      newArray.locations.map((obj) => (obj.isSelected = false));
      return newArray;
    }

    // locations
    case "ADD_TO_LOCATIONS": {
      return { ...state, locations: [...state.locations, action.payload] };
    }
    case "UPDATE_LOCATION": {
      const newArray = { ...state };
      newArray.locations[action.payload].name = action.name;
      newArray.locations[action.payload].address = action.address;
      newArray.locations[action.payload].category = action.cat;

      return newArray;
    }
    case "REMOVE_LOCATION": {
      const newArray = { ...state };
      const removeItem = newArray.locations[action.payload];
      newArray.locations.map((item) => (item.isSelected = false));

      return {
        ...state,
        locations: newArray.locations.filter(
          (obj) => obj.name !== removeItem.name
        ),
      };
    }
    case "SELECTED_LOCATIONS": {
      const newArray = { ...state };
      newArray.locations.map((item) => (item.isSelected = false));
      newArray.locations[action.payload].isSelected = !newArray.locations[
        action.payload
      ].isSelected;
      return newArray;
    }
    case "SORT_LOCATIONS": {
      return {
        ...state,
        locations: state.locations.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        }),
      };
    }
    case "GROUP_BY_LOCATIONS": {
      return {
        ...state,
        locations: state.locations.sort((a, b) => {
          if (a.category.toLowerCase() < b.category.toLowerCase()) return -1;
          if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
          return 0;
        }),
      };
    }
    default:
      return state;
  }
};

export default listReducer;
