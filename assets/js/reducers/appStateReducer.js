const initialState = {
  myList: [],
  openInfoBook: {},
  popUpOpen: false,
  listOpen: false
};
let newState;

export const AppStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      var myList = [...state.myList, action.payload];
      newState = Object.assign({}, state, {
        myList
      });
      return newState;
      break;
    case "REMOVE_BOOK":
      var myList = state.myList.filter(item => {
        item.id !== action.payload;
      });
      newState = Object.assign({}, state, {
        myList
      });
      return newState;
      break;
    case "OPEN_INFO_BOOK":
      newState = Object.assign({}, state, {
        openInfoBook: action.payload,
        popUpOpen: true
      });
      console.log('============NEW STATe');
      console.log(newState);
      return newState;
      break;
    case "CLOSE_INFO_BOOK":
        newState = Object.assign({}, state, {
        popUpOpen: false
      });
      return newState;
      break;
    case "OPEN_MY_LIST":
        newState = Object.assign({}, state, {
        listOpen: true
      });
      console.log('============NEW STATe');
      console.log(newState);
      return newState;
      break;
    case "CLOSE_MY_LIST":
    newState = Object.assign({}, state, {
        listOpen: false
      });
      return newState;
      break;

    default:
      return state;
      break;
  }
};
