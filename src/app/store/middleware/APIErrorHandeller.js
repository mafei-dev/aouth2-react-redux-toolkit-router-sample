import {updateAuthCreator} from "../users";

export const errorHandel = (errorCode, dispatch) => {

    switch (errorCode){
        case 401:
            dispatch(updateAuthCreator(
                {
                    authenticated: false
                }
            ));
    }

}