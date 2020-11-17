import axios from "axios";
import React from "react";
import {updateAuthCreator} from "../../app/store/users";
import {errorHandel} from "../../app/store/middleware/APIErrorHandeller";

export const getUser = (dispatch) => {
    axios
        .get("/merchant/contact/type")
        .then(response => {
                console.log("response ", response);
            }
        )
        .catch(error => {
                console.log("error ", error);
                errorHandel(error.response.status, dispatch);
            }
        );
}