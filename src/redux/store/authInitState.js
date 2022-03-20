const authInitialState = {
  accessToken: localStorage.getItem("accessToken"),
  phone: localStorage.getItem("phone") || "+57 ",
  waitingOTP: false,
  code: "",
}

export default authInitialState;