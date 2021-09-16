import {Status} from "../../../constants";

export type RequestDataType = {
   email: string
   password: string
   rememberMe: boolean
}

export type DataType = {
   message: string
   isAuth: boolean
   email?: string
   rememberMe?: boolean
}

export type ResponseDataType = {
   request: {},
   status: Status,
   headers: {},
   config: {},
   data: DataType
}
