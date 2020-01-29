import { ReducerLocationType } from "../types/reducer";

interface ActionType {
    type: string
}

const initialState: ReducerLocationType = {
    current: ""
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {

        default:
            return state
    }
}