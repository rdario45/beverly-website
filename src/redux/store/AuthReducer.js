const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'phone':
      return { ...state, phone: action.payload };
    case 'accessToken':
      return { ...state, accessToken: action.payload };   
    case 'waitingOTP':
      return { ...state, waitingOTP: action.payload }; 
    case 'code':
      return { ...state, code: action.payload };
    default:
      throw new Error();
  }
}

export default AuthReducer;