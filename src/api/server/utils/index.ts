import {DataType} from "../types";
import {Status} from "../../../constants";

export const request = (responseData: DataType, status: Status) => ({
   request: {},
   status: status,
   headers: {},
   config: {},
   data: responseData
})

export const randomIntFromInterval = (min: number, max: number) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
