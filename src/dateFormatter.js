export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {

  // get number of days without decimals since 1 january 1970
  let sysTime = Math.trunc((((systemDateTimeMillis /1000)/60)/60)/24);
  let formTime = Math.trunc((((dateToFormatTimeMillis /1000)/60)/60)/24);  

  // if one date is bigger than the other
  if ((sysTime - formTime <=-1) || (sysTime - formTime >= 1)) {

    // get new formatted date from miliseconds
    let formDate = new Date(1970, 0, 0, 0, 0, 0, dateToFormatTimeMillis);
    let month = (formDate .getMonth() + 1);
    let day = (formDate .getDate());
    let year = (formDate .getFullYear());
   
    // put formated date in variable in right order
    let result = day + "/" + month + "/" + year;

    return result;

  }
 else {
    return "TODAY";
  }

};