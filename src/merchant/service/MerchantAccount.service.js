import axios from "axios";
import React from "react";
import {LoadingOut} from "../../app/store/users";

/*
* Get All Merchant account for current user
* It can be empty or many or one
* */
/*
export async const getMerchantAccounts = dispatch => {
    dispatch(LoadingOut(true));

    axios.get("/merchant/account")
        .then(response => response)
        .catch(error => {
                console.log("error ", error);

                // errorHandel(error.response.status, dispatch);
            }
        )
        .finally(() => dispatch(LoadingOut(false)));
}*/
