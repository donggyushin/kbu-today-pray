import { ReducerTodayPrayDetailType } from "../types/reducer";
import { TODAY_PRAY_DETAIL_OPEN, TODAY_PRAY_DETAIL_CLOSE } from "../actions/types";

interface ActionType {
    type: string
    id: string
}

const initialState: ReducerTodayPrayDetailType = {
    open: false,
    id: ""
}

export default function (state: ReducerTodayPrayDetailType = initialState, action: ActionType) {
    switch (action.type) {

        case TODAY_PRAY_DETAIL_OPEN:
            return open(state, action)
        case TODAY_PRAY_DETAIL_CLOSE:
            return close(state, action)

        default:
            return state
    }
}

function open(state: ReducerTodayPrayDetailType, action: ActionType): ReducerTodayPrayDetailType {

    const { id } = action

    return {
        ...state,
        open: true,
        id
    }
}

function close(state: ReducerTodayPrayDetailType, action: ActionType): ReducerTodayPrayDetailType {
    return {
        ...state,
        open: false,
        id: ""
    }
}