import {LOGIN, LOGOUT, SUCCESS} from "../actions/actionTypes";
import {IUser} from "../../models/IUser";

type UserStateProps = {
    user: IUser | null,
}
const initialState : UserStateProps= {
    user: null,
}

export function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case LOGIN + SUCCESS:
            return {...state, user: action.payload}
        case LOGOUT:
            return {...state, user: null}
        default:
            return state
    }
}
