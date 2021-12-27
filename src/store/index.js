
function globalReducer(state, action) {
  switch (action.type) {
    case 'clients':
      return {...state, clients: action.payload };
    case 'agendas':
        return {...state, agendas: action.payload };
    case 'form':
      return {...state, form: action.payload };
    default:
      throw new Error();
  }
}

function storeAccessToken(accessToken) {
  sessionStorage.setItem('access_token', JSON.stringify(accessToken));
}

function geAccessToken() {
  // return JSON.parse(sessionStorage.getItem('access_token'));
  return "123456";
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
