const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE": {
      const newArray = [...state];
      newArray[action.payload].name = action.name;
      return newArray;
    }
    case "REMOVE": {
      const newArray = [...state];
      const removeItem = newArray[action.payload];
      newArray.map((item) => (item.isSelected = false));
      return newArray.filter((obj) => obj.name !== removeItem.name);
    }
    case "SELECTED": {
      const newArray = [...state];
      newArray.map((item) => (item.isSelected = false));
      newArray[action.payload].isSelected = !newArray[action.payload]
        .isSelected;
      return newArray;
    }
    case "REFRESH": {
      const newArray = [...state];
      newArray.map((obj) => (obj.isSelected = false));
      return newArray;
    }
    default:
      return state;
  }
};

export default listReducer;
