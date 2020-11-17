import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {updateAuthCreator} from "../app/store/users";

const ProfileComponent = () => {
    console.log("ProfileComponent");
    const dispatch = useDispatch();
    return (
        <div>
            <button type="submit" onClick={() => {
                dispatch(updateAuthCreator(
                    {
                        authenticated: false
                    }
                ));
            }}>Remove
            </button>
        </div>
    );
}
export default ProfileComponent;