export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

type player = Pitcher1 & Batter1;
// & DE TUKAERU
const playerObject: player = {
  throwingSpeed: 300,
  battingAverage: 200,
};
