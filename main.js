const getSleepHours = day => {
  switch(day) {
    case 'monday': return 8;
    case 'tuesday': return 8;
    case 'wednesday': return 8;
    case 'thursday': return 8;
    case 'friday': return 8;
    case 'saturday': return 8;
    case 'sunday': return 8;
    default: console.log('Error: Invalid day'); return 0; // It's better to return 0 for an invalid day for calculation purposes.
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours =
  getActualSleepHours();
  const idealSleepHours =
getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep!");
  }

  else if(actualSleepHours > idealSleepHours) {
    console.log("You've got " + (idealSleepHours - actualSleepHours) + " more hours of sleep this week.")
  }

  else if(actualSleepHours < idealSleepHours) {
    console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
  }

  else {
    console.log("Error! Something went wrong, check your code.");
  }
};

calculateSleepDebt();
