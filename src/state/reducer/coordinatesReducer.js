const INITIAL_STATE = {
  data: [38.907132, -77.036546],
};

function coordinatesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_COORDINATES':
      return { ...state, data: [action.data] };
    default:
      return state;
  }
}

export default coordinatesReducer;
