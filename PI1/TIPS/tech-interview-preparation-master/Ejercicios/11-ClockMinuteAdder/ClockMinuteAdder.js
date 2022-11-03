function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
}

module.exports = clockMinuteAdder;

// function clockMinuteAdder(time, minutesToAdd) {
//   // Your code here:
//   //que nos esta llegando
// ​
//   //time --> string
//   // minutos a agregar --> int
//   // el reloj debe ser en formato 12 hrs
// ​
//   console.log(time)
// ​
//   const [ hour, minutes ] = time.split(":")
//   console.log(hour)
//   console.log(minutes);
//   let totalMinutes = minutesToAdd + parseInt(minutes)
//   console.log(totalMinutes)
//   let totalHours = parseInt(hour) + Math.floor(totalMinutes / 60)
//   if(totalHours >12){
//     const division = totalHours % 12
//     totalHours = division === 0 ? 12 : division;
// ​
//   }
//   totalMinutes = totalMinutes % 60
//   console.log(totalMinutes);
//   console.log(totalHours);
//   if(totalHours < 10 ) totalHours = "0" + totalHours
//   if (totalMinutes < 10) totalMinutes = "0" + totalMinutes;
//   return totalHours + ":" + totalMinutes;
// ​
// }
// ​
// ​
// console.log(clockMinuteAdder("23:00", 60))
// // "09:20";
// ​
// console.log(clockMinuteAdder("01:30", 30))
// // "02:00";
// ​
// console.log(clockMinuteAdder("12:05", 100))
// // "01:45";
// module.exports = clockMinuteAdder;
