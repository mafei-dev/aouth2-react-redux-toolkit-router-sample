import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadUserCreator, getUsers, addUserCreator, getStatus} from "../../app/store/users";

const UserList = () => {

    const dispatch = useDispatch();
    // useSelector(state => state.entities.users.data);
    // or
    const users = useSelector(getUsers);

    const loadingStatus = useSelector(getStatus);

    useEffect(() => {
        dispatch(loadUserCreator());
        console.log("2");
    }, []);

    return (
        <div>
            <button type="submit" onClick={() => dispatch(loadUserCreator())}>Load</button>
            <button type="submit" onClick={() => dispatch(
                addUserCreator(
                    {
                        id: new Date().getTime(),
                        email: "user-" + new Date().getTime(),
                        job: "leader"
                    }
                ))}>Add New
            </button>
            <p>{loadingStatus ? 'Loading...' : ''}</p>
            <ul>
                {users.map(user => (<li key={user.id}>{user.email}</li>))}
            </ul>
        </div>
    );
};
export default UserList;