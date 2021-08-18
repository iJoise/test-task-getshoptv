import {axios} from "./server/axios";
import {RequestDataType} from "./server/types";

export const api = {
   login(data: RequestDataType) {
      return axios.post("https://onlydigital.ru/", data);
   }
}
