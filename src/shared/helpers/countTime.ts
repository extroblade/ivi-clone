const lastHourLetter = (number: number): string => {
  let result: string;
  const lastNum = +String(number).split('').reverse()[0];
  if (lastNum == 1 && (number < 10 || number > 20)) {
    result = '';
  } else if (lastNum < 5 && (number < 10 || number > 20)) {
    result = 'а';
  } else {
    result = 'ов';
  }
  return result;
};

const lastMinuteLetter = (number: number): string => {
  let result;
  const lastNum = +String(number).split('').reverse()[0];
  if (lastNum == 1 && (number < 10 || number > 20)) {
    result = 'а';
  } else if (lastNum < 5 && (number < 10 || number > 20)) {
    result = 'ы';
  } else {
    result = '';
  }
  return result;
};

export const countTime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours && hours + ' час' + lastHourLetter(hours)} ${
    minutes && minutes + ' минут' + lastMinuteLetter(minutes)
  }`;
};
