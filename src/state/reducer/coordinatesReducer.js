const INITIAL_STATE = {
  data: [-15.7812, -47.9],
};

function coordinatesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_COORDINATES':
      return { ...state, data: action.data };
    default:
      return state;
  }
}

export default coordinatesReducer;
