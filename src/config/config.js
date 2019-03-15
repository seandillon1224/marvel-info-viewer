import md5 from "md5";
import moment from "moment";

const PRIVATE_API_KEY = "1409eda78d6ae05393d634f785eb9ad726869d12";
const TIMESTAMP = moment().format();
const API_KEY = "0f0c374767bf51692d57e7cf0966f769";
const HASH = md5(`${TIMESTAMP}${PRIVATE_API_KEY}${API_KEY}`);
export const VALIDATION = `&ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`;
export const API_ROUTE = `https://cors-anywhere.herokuapp.com/http://gateway.marvel.com`;
export { TIMESTAMP };
