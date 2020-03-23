export const incrementAction = () => {
  return {
    type: "INCREMENT",
    payload: 1
  };
};

export const decrementAction = () => {
  return {
    type: "DECREMENT",
    payload: 1
  };
};

export const changeName = name => {
  return {
    type: "CHANGENAME",
    payload: name
  };
};
