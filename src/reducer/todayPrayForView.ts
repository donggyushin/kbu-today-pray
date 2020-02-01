import { ReducerTodayPrayForViewType, ReducerTodayPrayForViewPraysType } from "../types/reducer";
import { TODAY_PRAY_FOR_VIEW_GET_PRAYS } from "../actions/types";

interface ActionType {
    type: string
    prays: ReducerTodayPrayForViewPraysType[]
    praysCount: number
}

const initialState: ReducerTodayPrayForViewType = {
    prays: [],
    praysCount: 0
}

export default function (state: ReducerTodayPrayForViewType = initialState, action: ActionType) {
    switch (action.type) {
        case TODAY_PRAY_FOR_VIEW_GET_PRAYS:
            return getPrays(state, action)
        default:
            return state
    }
}

function getPrays(state: ReducerTodayPrayForViewType, action: ActionType): ReducerTodayPrayForViewType {
    const { prays, praysCount } = action
    return {
        ...state,
        prays: [
            ...state.prays,
            ...prays
        ],
        praysCount
    }
}
