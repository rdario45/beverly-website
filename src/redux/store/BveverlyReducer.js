const BveverlyReducer = (state, action) => {
  switch (action.type) {
    case 'selectedDate':
        return {...state, selectedDate: action.payload };
    case 'showModal':
      return {...state, showModal: action.payload };
    case 'activeDay':
        return {...state, activeDay: action.payload };
    case 'createForm':
        return {...state, createForm: action.payload };
    case 'currentWeek':
      return {...state, currentWeek: action.payload };
    case 'balance':
      return {...state, balance: action.payload };
    default:
      throw new Error();
  }
}

export default BveverlyReducer;