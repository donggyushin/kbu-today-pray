import { ReducerUserType } from '../types/reducer'
import { USER_LOGIN } from '../actions/types'

interface ActionType {
    type: string
    token: string
    user: ReducerUserType
}

const initialState: ReducerUserType = {
    isLoggedIn: localStorage.getItem('token') ? true : false,
    email: "",
    name: "",
    phone: "",
    authorities: []
}

export default function (state: ReducerUserType = initialState, action: ActionType) {
    switch (action.type) {
        case USER_LOGIN:
            return userLogin(state, action)
        default:
            return state
    }
}

function userLogin(state: ReducerUserType, action: ActionType): ReducerUserType {
    const { token, user } = action
    const { email, name, phone, authorities } = user
    localStorage.setItem('token', token)
    return {
        ...state,
        isLoggedIn: true,
        email,
        name,
        phone,
        authorities
    }
}