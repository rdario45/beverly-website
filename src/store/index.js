
function globalReducer(state, action) {
  switch (action.type) {
    case 'form':
      return {...state, form: action.payload };
    case 'fecha':
        return {...state, fecha: action.payload };
    case 'week':
        return {...state, week: action.payload };
    case 'show':
      return {...state, show: action.payload };
    case 'activeDay':
      return {...state, activeDay: action.payload };
    case 'balance':
      return {...state, balance: action.payload };
    default:
      throw new Error();
  }
}

function storeAccessToken(accessToken) {
  sessionStorage.setItem('access_token', JSON.stringify(accessToken));
}

function geAccessToken() {
  return JSON.parse(sessionStorage.getItem('access_token'));
}

function cleanAccessToken() {
  sessionStorage.removeItem('access_token');
}

function storeUserPhone(userPhone) {
  sessionStorage.setItem('phone', JSON.stringify(userPhone));
}

function getUserPhone() {
  return JSON.parse(sessionStorage.getItem('phone'));
}

function cleanUserPhone() {
  sessionStorage.removeItem('phone');
}


export {
  globalReducer,
  geAccessToken,
  storeAccessToken,
  cleanAccessToken,
  storeUserPhone,
  getUserPhone,
  cleanUserPhone
};
