
function reducer(state, action) {
  switch (action.type) {
    case 'clients':
      return {...state, clients: action.payload.data };
    default:
      throw new Error();
  }
}

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  return JSON.parse(sessionStorage.getItem('token'));
}

export {
  reducer,
  setToken,
  getToken
};
