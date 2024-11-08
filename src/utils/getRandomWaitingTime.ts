const getRandomWaitingTime = (min = 250, max = 1000) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomWaitingTime;
