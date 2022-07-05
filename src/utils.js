export const isUnique = (array, item) => {
  return array.filter((value) => value.id === item.id).length === 0;
};

export const getRandomValue = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
