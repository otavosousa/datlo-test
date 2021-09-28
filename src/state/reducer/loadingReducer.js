const INITIAL_STATE = {
  data: false,
};

function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, data: action.data };
    default:
      return state;
  }
}

export default loadingReducer;
