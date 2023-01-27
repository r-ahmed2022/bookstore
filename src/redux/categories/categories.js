const initState = {
  categories: [],
};

// Actions
export const DISPLAY_STATUS = './redux/categories/DISPLAY_STATUS';

// Action creators
const displayStatus = () => ({
  type: DISPLAY_STATUS,
  payload: 'Under construction',
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export { displayStatus };

export default reducer;
