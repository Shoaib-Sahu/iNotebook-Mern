import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import noteReducer from "./NoteReducer"

export const reducers = combineReducers({ authReducer, noteReducer });