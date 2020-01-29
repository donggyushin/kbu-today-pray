import { ReducerWorkspaceType, CURRENT_TYPE } from "../types/reducer";
import { WORKSPACE_PUT_CURRENT } from '../actions/types'

interface ActionType {
    type: string
    newCurrent: CURRENT_TYPE
}

const initialState: ReducerWorkspaceType = {
    current: "POST"
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case WORKSPACE_PUT_CURRENT:
            return putCurrent(state, action)
        default:
            return state
    }
}

function putCurrent(state: ReducerWorkspaceType, action: ActionType): ReducerWorkspaceType {
    const { newCurrent } = action
    return {
        ...state,
        current: newCurrent
    }
}