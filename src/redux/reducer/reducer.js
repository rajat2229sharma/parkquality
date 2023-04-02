const initialState = [];

const userData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return (state = action.payload.userData);

    default:
      return state;
  }
};

export default userData;
