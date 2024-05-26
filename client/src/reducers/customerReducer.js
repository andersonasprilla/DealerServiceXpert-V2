const initialState = {
    customerCount: 0,
  };
  
  const customerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CUSTOMER_COUNT':
        return {
          ...state,
          customerCount: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default customerReducer;
  