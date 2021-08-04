const input = ["Friday", "Sunday",'Tuesday', 'Wednesday',"Monday"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const sortDays = function (a, b) {
  a = days.indexOf(a);
  b = days.indexOf(b);
  return a < b ? -1 : 1;
};

const myArrayOfDays = input.sort(sortDays);


const getDaysOfOpening = (input) => {
  let indexes = [], message = '';

  // Remove duplicates elements
  input = [...new Set(input)];

  if (input.length === 7) {
    return `${myArrayOfDays[0]} to ${myArrayOfDays[(6)]}`
  } else {
    // Get the index of each given day
    indexes = input.map(e => {
      return days.indexOf(e)
    })

    // Separate array into chunks with "x" 
    for (let i = 0; i < (indexes.length - 1); i++) {
      if (indexes[i + 1] - indexes[i] > 1) {
        indexes.splice(i + 1, 0, "x")
      }
    }
    // Split with 'x' to form sub arrays
    indexes = indexes.join('').split('x');

    // Form the message
    for (let i = 0; i < (indexes.length); i++) {
      if (indexes[i].length === 1) {
        message += days[parseInt(indexes[i][0])] + ','
      } else {
        message += ' ' + days[parseInt(indexes[i][0])] + ' to ' + days[parseInt(indexes[i][indexes[i].length - 1])] + ', '
      }
    }

  }

  // Return the result 
  return message
}

console.log(getDaysOfOpening(myArrayOfDays))
