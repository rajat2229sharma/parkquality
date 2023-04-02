export const getUserData = (data) => {
  return {
    type: "GET_USER_DATA",
    payload: {
      userData: data,
    },
  };
};
