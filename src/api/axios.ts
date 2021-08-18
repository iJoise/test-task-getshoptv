type Status = 200 | 401


export type RequestDataType = {
   email: string | null
   password: string | null
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
                  resolve(request(responseData, 200))
               } else {
                  responseData = {
                     message: `Пользователя ${data.email} не существует`,
                     isAuth: false
                  }
                  reject(request(responseData, 401))
               }
            }
         }, randomIntFromInterval(1, 3) * 1000);
      });
   },
   post(url: string, data: RequestDataType) {
      return this._fake(url, data);
   },
}

const request = (responseData: DataType, status: Status) => ({
   request: {},
   status: status,
   headers: {},
   config: {},
   data: responseData
})

function randomIntFromInterval(min: number, max: number) { // min and max included
   return Math.floor(Math.random() * (max - min + 1) + min);
}