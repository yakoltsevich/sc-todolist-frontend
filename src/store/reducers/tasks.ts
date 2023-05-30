import {GET_TASKS, REQUEST, SUCCESS} from "../actions/actionTypes";
import {ITask} from "../../models/ITask";

type TasksStateProps = {
    tasks: ITask[],
    isFetching: boolean,
}
const initialState: TasksStateProps = {
    tasks: [],
    isFetching: false,
}
export const tasksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_TASKS + REQUEST:
            return {...state, isFetching: true}
        case GET_TASKS + SUCCESS:
            return {...state, tasks: action.payload, isFetching: false}
        default:
            return state
    }
}
