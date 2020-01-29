export type Authorities = "" | "PRAY" | "COOK"

export interface ReducerUserType {
    isLoggedIn: boolean
    email: string
    name: string
    phone: string
    authorities: Authorities[]
}

export interface ReducerDialogType {
    open: boolean
    title: string
    text: string
    callBack: (param?: any) => void
}

export interface ReducerLoadingType {
    open: boolean
}

export interface ReducerLeftNavigationBar {
    open: boolean
    first: boolean
}

export interface ReducerLocationType {
    current: string
}

export interface ReducerWorkspaceType {
    current: CURRENT_TYPE
}

export interface ReducerStateType {
    user: ReducerUserType
    dialog: ReducerDialogType
    loading: ReducerLoadingType
    leftNavigationBar: ReducerLeftNavigationBar
    location: ReducerLocationType
    workspace: ReducerWorkspaceType
}


export type CURRENT_TYPE = "POST" | "VIEW"