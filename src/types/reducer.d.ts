export interface ReducerUserType {
    isLoggedIn: boolean
    email: string
    name: string
    phone: string
}

export interface ReducerStateType {
    user: ReducerUserType
}