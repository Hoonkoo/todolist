import { createContext } from 'react'

const date = new Date();
const date_year = date.getFullYear();
const date_month = date.getMonth() + 1;
const date_day = date.getDate() ;
const date_day2 = date.getDate() -1;
const new_date = date_year + ":" + date_month + ":" + date_day;
const new_date2 = date_year + ":" + date_month + ":" + date_day2;
const context_Data = createContext({
    Date : {
    context_today : new_date,
    context_yesterday : new_date2}
});

export default context_Data