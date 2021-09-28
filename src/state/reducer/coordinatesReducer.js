const INITIAL_STATE = {
  data: [-23.4009, -51.9678],
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
