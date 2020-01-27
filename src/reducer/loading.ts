import { ReducerLoadingType } from "../types/reducer";
import { LOADING_ON, LOADING_OFF } from "../actions/types";

interface ActionType {
    type: string
}

const initialState: ReducerLoadingType = {
    open: false
}

export default function (state: ReducerLoadingType = initialState, action: ActionType) {
    switch (action.type) {
        case LOADING_ON:
            return loadingOn(state, action)
        case LOADING_OFF:
            return loadingOff(state, action)
        default:
            return state
    }
}

function loadingOn(state: ReducerLoadingType, action: ActionType): ReducerLoadingType {
    return {
        ...state,
        open: true
    }
}

function loadingOff(state: ReducerLoadingType, action: ActionType): ReducerLoadingType {
    return {
        ...state,
        open: false
    }
}