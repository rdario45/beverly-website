
function reducer(state, action) {
  switch (action.type) {
    case 'clients':
      return {...state, clients: action.payload.data };
    case 'signin':
      return {...state, token: action.payload };
    default:
      throw new Error();
  }
}

export default reducer;