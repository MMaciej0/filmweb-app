export const stringToArray = (string) => {
  return Array.from(string.split(','));
};

export const stringsArraytoObjectsArr = (objectProp, array) => {
  return array.map((item) => ({ [objectProp]: item }));
};
