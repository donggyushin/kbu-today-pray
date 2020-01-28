import { ReducerLeftNavigationBar } from "../types/reducer";
import { LEFT_NAV_OPEN, LEFT_NAV_CLOSE } from "../actions/types";

interface ActionType {
    type: string
}

const initialState: ReducerLeftNavigationBar = {
    open: true,
    first: true
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case LEFT_NAV_OPEN:
            return openNav(state, action)
        case LEFT_NAV_CLOSE:
            return closeNav(state, action)

        default:
            return state
    }
}

function openNav(state: ReducerLeftNavigationBar, action: ActionType): ReducerLeftNavigationBar {
    return {
        ...state,
        open: true,
        first: false
    }
}

function closeNav(state: ReducerLeftNavigationBar, action: ActionType): ReducerLeftNavigationBar {
    return {
        ...state,
        open: false,
        first: false
    }
}


