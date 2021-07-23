
export enum EUserActions {
    LOAD_REQUEST = "@user/LOAD_REQUEST",
    LOAD_SUCCESS = "@user/LOAD_SUCCESS",
    LOAD_FAILURE = "@user/LOAD_FAILURE",

    SAVE_REQUEST = "@user/SAVE_REQUEST",
    SAVE_SUCCESS = "@user/SAVE_SUCCESS",
    SAVE_FAILURE = "@user/SAVE_FAILURE",

    EDIT_REQUEST = "@user/EDIT_REQUEST",
    EDIT_SUCCESS = "@user/EDIT_SUCCESS",
    EDIT_FAILURE = "@user/EDIT_FAILURE",

    REMOVE_REQUEST = "@user/REMOVE_REQUEST",
    REMOVE_SUCCESS = "@user/REMOVE_SUCCESS",
    REMOVE_FAILURE = "@user/REMOVE_FAILURE",

}


export interface IUser {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone: string
}

export interface IUserState {
    tmp?: IUser
    data: IUser[]
    loading: boolean
    error: boolean
}