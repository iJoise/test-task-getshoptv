export enum Action_Type {
   SET_IS_FETCHING = 'only/login/SET_IS_FETCHING',
   SET_IS_ERROR = 'only/login/SET_IS_ERROR',
   SET_USER_NAME = 'only/login/SET_USER_NAME',
   SET_IS_AUTH = 'only/login/SET_IS_AUTH'
}

export enum Status {
   OK = 200 ,
   FAILED = 401
}

export enum Path {
   LOGIN = '/login',
   PROFILE = '/profile'
}
