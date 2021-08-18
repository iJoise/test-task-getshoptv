import {axios, RequestDataType} from "./axios";


export const api = {
   login(data: RequestDataType) {
      return axios.post("https://https://onlydigital.ru/", data);
   }
}