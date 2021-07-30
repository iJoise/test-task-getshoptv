import axios from "axios";

const ACCESS_KEY = '7b742308524043a3f9e3ae42aab26a02';
const baseUrl = 'https://apilayer.net/api/validate';

export const validateApi = {
   async checkPhone(value: string) {
      return axios.get<ResponseSuccessType>
      (`${baseUrl}?access_key=${ACCESS_KEY}&number=${value}&country_code=RU&format=1`);
   }
}

type ResponseSuccessType = {
   valid: boolean
   number: string
   local_format: string
   international_format: string,
   country_prefix: string,
   country_code: string,
   country_name: string,
   location: string,
   carrier: string,
   line_type: string
}
