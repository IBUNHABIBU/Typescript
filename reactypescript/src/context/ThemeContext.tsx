import { createContext } from "react";
import { actionType, StateType } from "../types/types";

const INITIAL_STATE = {
    theme: "dark",
    fontSize: 16,
}

export const ThemeContext = createContext<{state: StateType, dispatch: React.Dispatch<actionType>}>({
    state: INITIAL_STATE, 
    dispatch: () => {

    }
})

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
            return state;
    }
}

export const ThemeProvder = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}