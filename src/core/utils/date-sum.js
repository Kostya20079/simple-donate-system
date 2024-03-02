import moment from "moment";
import 'moment-precise-range'

export const dateFormat = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export const calculateSumOfNumbers = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0)