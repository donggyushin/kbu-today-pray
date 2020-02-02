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

export interface ReducerTodayPrayStudentPrayType {
    name: string
    grade: number
    prays: string[]
}

export interface ReducerTodayPray {
    studentPray: ReducerTodayPrayStudentPrayType[]
    ads: string[]
    todayPrayContent: string[]
}

export interface ReducerDatePickerType {
    open: boolean
}

export interface ReducerTodayPrayForViewWriterType {
    _id: string
    name: string
}

export interface ReducerTodayPrayForViewPraysType {
    studentPray: ReducerTodayPrayStudentPrayType[]
    ads: string[]
    todayPrayContent: string[]
    writer: ReducerTodayPrayForViewWriterType
    date: string
    _id: string
}

export interface ReducerTodayPrayForViewType {
    prays: ReducerTodayPrayForViewPraysType[]
    praysCount: number
}

export interface ReducerTodayPrayDetailType {
    open: boolean
    id: string
}

export interface ReducerStateType {
    user: ReducerUserType
    dialog: ReducerDialogType
    loading: ReducerLoadingType
    leftNavigationBar: ReducerLeftNavigationBar
    location: ReducerLocationType
    workspace: ReducerWorkspaceType
    todayPrayForPost: ReducerTodayPray
    todayPrayForView: ReducerTodayPrayForViewType
    datepicker: ReducerDatePickerType
    todayPrayDetail: ReducerTodayPrayDetailType
}


export type CURRENT_TYPE = "POST" | "VIEW"