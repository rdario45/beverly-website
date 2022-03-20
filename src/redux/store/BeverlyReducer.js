const BveverlyReducer = (state, action) => {
  switch (action.type) {
    case 'selectedDate':
      return { ...state, selectedDate: action.payload };
    case 'showModal':
      return { ...state, showModal: action.payload };
    case 'activeDay':
      return { ...state, activeDay: action.payload };
    case 'createForm':
      return { ...state, createForm: action.payload };
    case 'currentWeek':
      return { ...state, currentWeek: action.payload };
    case 'balance':
      return { ...state, balance: action.payload };
    case 'orientation':
      return { ...state, orientation: action.payload };
    case 'pie':
      return { ...state, pie: action.payload };
    case 'bar':
      return { ...state, bar: action.payload };
    case 'isPhoneAvailable':
      return { ...state, isPhoneAvailable: action.payload };
    case 'isPercentageVisible':
      return { ...state, isPercentageVisible: action.payload };
    case 'error':
      return { ...state, error: action.payload };
    case 'logout':
      return { ...state, logout: action.payload };
    default:
      throw new Error();
  }
}

export default BveverlyReducer;