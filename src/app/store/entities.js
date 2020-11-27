import {combineReducers} from "@reduxjs/toolkit";
import counterSlice from "../../features/counter/counterSlice";
import usersSlice from "./users";

export default combineReducers({
    counter: counterSlice,
    users: usersSlice
});
