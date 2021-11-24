import React from "react";
import globalHook from "use-global-hook";
import API_KEY from "../api/index";

const sessionId = Number(localStorage.getItem("sessionId"));

const initialState = {
  layoutData: null,
  screenData: null,
  error: null,
  eventData: null,
  loading: true,
  isLoggedIn: localStorage.getItem("sessionId"),
  logginData:null,
  loginFailed:false
};

const actions = {
  //sign out method
  signout: async (store, data) => {
    store.setState({ loading: true });
    try {
      // const layoutData = await API_KEY.url.get(API_KEY.path.activeLayout);
      //{"event":"logout", "sessionId":1}
      const signoutData = await API_KEY.url.post(
        API_KEY.path.session,
        JSON.stringify({ event: "logout", sessionId })
      );
      console.log(signoutData, "signoutData");
      localStorage.clear();
      store.setState({ isLoggedIn: false, loading: false });
      window.location.replace("/");
      window.location.reload();
    } catch (error) {
      store.setState({ error, loading: false }, () => console.log(error));
    }
  },
  //signin method

  signin: async (store, data) => {
    store.setState({ loading: true });
    try {
      const signinData = await API_KEY.url.post(
        API_KEY.path.session,
        JSON.stringify(data)
      );
      console.log(signinData, "signinData");

      if (signinData.data.success === true) {
        localStorage.setItem("sessionId", signinData?.data?.data?.sessionId);
        store.setState({ isLoggedIn: true, loading: false,loginFailed:false });
      } else {
        let data = signinData.data.message;
        store.setState({ logginData: data, loginFailed: true });

      }
    } catch (error) {
      store.setState({ error, loading: false }, () => console.log(error));
    }
  },

  // get active layout api call
  getActiveLayout: async (store, data) => {
    store.setState({ loading: true });
    try {
      const layoutData = await API_KEY.url.get(API_KEY.path.activeLayout, {
        params: { sessionId: sessionId },
      });
      store.setState({ layoutData: layoutData.data, loading: false });
      if (layoutData.data.success === true) {
        store.setState({layoutData: layoutData.data, loading: false,loginFailed:false });
      } else {
        let data = layoutData.data.message;
        store.setState({ layoutData: data, loginFailed: true });

      }
    } catch (error) {
      store.setState({ error, loading: false }, () => console.log(error));
    }
  },
  // get active screen api call
  getScreen: async (store, data) => {
    store.setState({ loading: true });
    try {
      const screenData = await API_KEY.url.get(
        `${API_KEY.path.activeScreen}${data}`
      );
      store.setState({ layoutData: screenData.data, loading: false }, () => {});
    } catch (error) {
      store.setState({ error, loading: false }, () => console.log(error));
    }
  },
  // send evnet and mouse poistion
  sendEvent: async (store, data) => {
    store.setState({ loading: true });
    try {
      const eventData = await API_KEY.url.post(
        API_KEY.path.event,
        JSON.stringify({ ...data, sessionId: sessionId })
      );
      store.setState({ eventData: eventData, loading: false }, () =>
        console.log(eventData)
      );
    } catch (error) {
      store.setState({ error, loading: false }, () => console.log(error));
    }
  },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
