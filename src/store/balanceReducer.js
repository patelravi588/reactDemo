const initialState = {
    balance: 100,
    loading: false
  };
  
  function balanceReducer(state = initialState, action) {
    switch (action.type) {
      case "DEPOSIT":
        return { balance: state.balance + action.payload, loading: false};
      case "WITHDRAW":
        return { balance: state.balance - action.payload, loading: false};
      case "LOADING":
        return {...state, loading:true}  
      default:
        return state;
    }
  }
  
  export default balanceReducer;