import { createContext, useReducer } from "react";

export const CalcContext = createContext({
    calc: "",
    result: "",
});

export const calcReducer = (state, action) => {
    switch(action.type) {
        case "SET_CALC":
            return {
                calc: action.payload,
                result: state.result
            }

        case "UPDATE_CALC":
            return {
                calc: state.calc + action.payload,
                result: state.result
            }

        case "UPDATE_RESULT":
            return {
                calc: state.calc,
                result: action.payload
            }

        default:
            return state;
    }
}

export const CalcContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calcReducer, {
        calc: "",
        result: "",
    });

    const context = {
        ...state,
        dispatch
    }

    return (
        <CalcContext.Provider value={context}>
            {children}
        </CalcContext.Provider>
    );
}
