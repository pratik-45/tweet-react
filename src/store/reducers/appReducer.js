const initState = {
  appState: [],
  tweets:[],
  tweetCreated:false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case "tweetCreated":
      return {
        ...state,
        tweetCreated: true
      };
    case "updateState":
      return {
        ...state,
        tweets: action.value,
        tweetCreated: false
      };
    default:
      return state;
  }
};

export default appReducer;
