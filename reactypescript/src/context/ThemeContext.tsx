import { actionType, StateType } from "../types/types";

const INITIAL_STATE = {
    theme: "dark",
    fontSize: 16,
}

const reducer = (state: StateType, action: actionType) => {
    switch (action.type) {
        case 'CHANGE_FONTSIZE':

            return {
                ... state,
                theme: state.theme === "dark" ? "light" : "dark"
            }
        case 'CHANGE_FONTSIZE':
            return {
                ... state,
                fontSize: action.payload
            }
        default:
            break;
    }
}