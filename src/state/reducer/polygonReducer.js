const INITIAL_STATE = {
  data: [],
};

function coordinatesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_POLYGON':
      return { ...state, data: action.data };
    default:
      return state;
  }
}

export default coordinatesReducer;
