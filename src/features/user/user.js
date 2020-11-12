import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadUserCreator, getUsers} from "../../app/store/users";

const UserList = () => {

    const dispatch = useDispatch();
    // useSelector(state => state.entities.users.data);
    // or
    const users = useSelector(getUsers);
    console.log("1");

    useEffect(() => {
        dispatch(loadUserCreator());
        console.log("2");
    }, []);

    return (
        <ul>
            {users.map(user => (<li key={user.id}>{user.email}</li>))}
        </ul>
    );
};
export default UserList;