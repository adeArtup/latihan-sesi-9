const appStore = {
  user: {
    name: "Udin",
    old: "12"
  },
  count: 0
};

const app = (state = { ...appStore }, action) => {
  switch (action.type) {
    case "INCREMENT":
      
      return {
        ...state,
        count: state.count + action.payload
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload
      }

    case "CHANGENAME":
        return {
          ...state,
          user: {
              ...state.user,
              name: action.payload,
              old: "12"
          }
        };
    default:
      return state;
  }
  
};

export default app;
