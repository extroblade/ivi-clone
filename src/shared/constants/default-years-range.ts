import dayjs from 'dayjs';

const years = [];

for (let i = 0; i < 60; i++) {
  const val = dayjs().year() - i;
  years.push({ id: val, year: val });
}

export const defaultYearsRange = [...years];
