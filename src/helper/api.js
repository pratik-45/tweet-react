import axios from "axios";
import {SERVER_URLS, AREA} from "./constants";
const APIs = {
  auth: {
    login(User) {
      return {
        url: `${SERVER_URLS.BACKEND}/login`,
        method: "POST",
        data: User,
      };
    },
    signUp(User) {
      return {
        url: `${SERVER_URLS.BACKEND}/createAccount`,
        method: "POST",
        data: User,
      };
    }
  },
  list:{
    getAll(){
      return {
        url: `${SERVER_URLS.BACKEND}/getFeed`,
        method: "GET",
      };
    },
    createTweet(tweet){
      return {
        url: `${SERVER_URLS.BACKEND}/createTweet`,
        method: "POST",
        data: tweet,
      };
    },
  }
};
class APICall {
  /**
   * @param {{ module: any; apiName: any; params: any; area: any; }} [APICall]
   */
  constructor(APICall) {
    this.module = APICall.module;
    this.apiName = APICall.apiName;
    this.params = APICall.params;
    this.area = APICall.area;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  addAuthKey() {
    let user = localStorage["user"] || null;
    if (!user) {
      window.location.href ="/";
    }
    user = JSON.parse(user);
    this.headers = {
      ...this.headers,
      Authorization: "Bearer " + user.token,
    };
  }

  getResponse() {
    if (this.area == AREA.SECURE) {
      this.addAuthKey();
    }
    let payload = APIs[this.module][this.apiName](this.params);
    payload.headers = this.headers;
    return axios(payload);
  }
}

export {APIs, APICall };
