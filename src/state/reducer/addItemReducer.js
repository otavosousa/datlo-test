const INITIAL_STATE = {
  data: ['item'],
};

function addItemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, data: [...state.data, action.data] };
    default:
      return state;
  }
}

export default addItemReducer;
