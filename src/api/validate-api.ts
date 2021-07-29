import axios from "axios";

const ACCESS_KEY = '4f1369e4042c889fe2a91bd98bf8b974';
const baseUrl = 'http://apilayer.net/api/validate';

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
