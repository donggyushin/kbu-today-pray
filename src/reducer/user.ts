import { ReducerUserType } from '../types/reducer'

interface ActionType {
    type: string
}

const initialState: ReducerUserType = {
    isLoggedIn: localStorage.getItem('token') ? true : false,
    email: "",
    name: "",
    phone: ""
}

export default function (state: ReducerUserType = initialState, action: ActionType) {
    switch (action.type) {

        default:
            return state
    }
}