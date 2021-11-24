import axios from "axios";

//  const sessionId = localStorage.getItem("sessionId");
const instance = {
  url: axios.create({
    baseURL: "http://127.0.0.1/hmi/",
    // params:{
    //   sessionId
    // }
    // baseURL: "http://localhost:3001
  }),
  path: {
    activeLayout: "layouts?type=active",
    allLayouts: "layouts",
    allScreens: "screens",
    activeScreen: "screens?name=",
    event: "layouts/sendEvent",
    session:'session/sendEvent'
  },
};

export default instance;
