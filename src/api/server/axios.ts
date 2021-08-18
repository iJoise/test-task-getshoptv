import {DataType, RequestDataType, ResponseDataType} from "./types";
import {Status} from "../../constants";
import {randomIntFromInterval, request} from "./utils";

export const axios = {
   _fake(url: string, data: RequestDataType) {
      return new Promise<ResponseDataType>((resolve, reject) => {
         setTimeout(() => {
            let responseData: DataType;

            if (url.indexOf('onlydigital') > 0) {
               if (data.email === 'steve.jobs@example.com' && data.password === 'password') {
                  responseData = {
                     message: 'You are successfully logged in',
                     isAuth: true,
                     email: data.email,
                     rememberMe: data.rememberMe
                  }
                  resolve(request(responseData, Status.OK))
               } else {
                  responseData = {
                     message: `Пользователя ${data.email} не существует`,
                     isAuth: false
                  }
                  reject(request(responseData, Status.FAILED))
               }
            }
         }, randomIntFromInterval(1, 3) * 1000);
      });
   },
   post(url: string, data: RequestDataType) {
      return this._fake(url, data);
   },
}
