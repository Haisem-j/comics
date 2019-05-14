import { combineReducers } from "redux";
import { AppStateReducer } from "./appStateReducer";
import { booksDataReducer } from "./booksDataReducer";


export default combineReducers({
    globalState: AppStateReducer,
    booksData: booksDataReducer
});