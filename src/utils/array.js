export const stringToArray = (string) => {
  return Array.from(string.split(','));
};

export const stringsArraytoObjectsArr = (objectProp, array) => {
  return array.map((item) => ({ [objectProp]: item }));
};

export const countAverageFromArray = (array, field) => {
  const total = array.reduce((total, current) => {
    return (total += current[field]);
  }, 0);
  const average = total / array.length;
  return average;
};
