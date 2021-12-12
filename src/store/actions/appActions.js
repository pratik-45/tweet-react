import { APICall } from "../../helper/api";
import { AREA } from "../../helper/constants";

export const getAllFeed = () => {
  return (dispatch) => {
    if(localStorage['feed']){
      dispatch({
        type: "updateState",
        value: JSON.parse(localStorage['feed']),
      });
    }
    new APICall({
      module: "list",
      apiName: "getAll",
      area: AREA.SECURE,
      params: null,
    })
      .getResponse()
      .then((data) => {
        console.log("data fetched", data);
        localStorage['feed'] = JSON.stringify(data.data);
        dispatch({
          type: "updateState",
          value: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postTweet = (data) => {
  return (dispatch) => {
    new APICall({
      module: "list",
      apiName: "createTweet",
      area: AREA.SECURE,
      params: data,
    })
      .getResponse()
      .then((data) => {
        console.log("data fetched", data);
        dispatch({
          type: "tweetCreated",
          value: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
