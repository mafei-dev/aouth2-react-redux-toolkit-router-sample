import {createSlice, createSelector} from '@reduxjs/toolkit';

import {apiCallBegan} from "./middleware/api";

let lastId = 0;
const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [
            {
                "id": 1,
                "email": "mafei.me@gmail.com",
                "first_name": "mafei",
                "last_name": "Lawson",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
            }
        ],
        loading: false,
        lastFetch: null
    },
    reducers: {
        userLoaded: (users, action) => {
            users.loading = true;
        },
        userLoadedFailed: (users, action) => {
            users.loading = false;
        },
        bugAssignToUser: (users, action) => {
            const {bugId, userId} = action.payload;
            const index = users.data.findIndex(bug => bug.id === bugId);
            users.data[index].userId = userId;
        },
        addUser: (users, action) => {
            console.log("payload ", action.payload);
            users.data.push(
                {
                    id: ++lastId,
                    dec: action.payload.dec
                }
            );
            console.log("after bugs ", users.data.length);
        },
        addAll: (users, action) => {
            // console.log("bugs ", bugs);
            users.data = action.payload.data;
            users.loading = false;
            // console.log("new bugs list ", action.payload);
        },
        updateUser: (users, action) => {
            alert(JSON.stringify(users));
            const index = users.data.findIndex(bug => {
                return bug.id === action.payload.id
            });
            users.data[index].resolved = true;
        }
    }
});
const {addUser, updateUser, bugAssignToUser, addAll, userLoaded, userLoadedFailed} = usersSlice.actions;
export default usersSlice.reducer;


//actions creators
export const loadUserCreator = () => apiCallBegan({
    url: "/users?page=2",
    method: "get",
    onStart: userLoaded().type,
    onSuccess: addAll().type,
    onError: userLoadedFailed.type,
});
export const addUserCreator = bug => apiCallBegan({
    url: "/users",
    method: "POST",
    data: bug,
    onSuccess: addUser().type,
    onError: userLoadedFailed.type,
});


//Selectors
export const getUsers = createSelector(
    state => state.entities.users,
    users => users.data
);

export const getBugsBuyUser = userId => createSelector(
    state => state.entities.users,
    users => users.filter(bug => bug.userId === userId)
);

