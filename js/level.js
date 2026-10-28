const levelWidth = 11520;

const levelGround = [
  { x: 0, width: 1470 },
  { x: 1620, width: 460 },
  { x: 2790, width: 260 },
  { x: 3700, width: 250 },
];

const levelPlatforms = [
  { x: 1490, rise: 90, width: 180 },
  { x: 1690, rise: 170, width: 170 },
  { x: 1890, rise: 240, width: 180 },
  { x: 2110, rise: 140, width: 170 },
  { x: 2320, rise: 80, width: 180 },
  { x: 2510, rise: 170, width: 165 },
  { x: 2695, rise: 245, width: 175 },
  { x: 2890, rise: 180, width: 165 },
  { x: 3080, rise: 90, width: 180 },
  { x: 3270, rise: 185, width: 165 },
  { x: 3460, rise: 250, width: 175 },
  { x: 3655, rise: 190, width: 165 },
  { x: 3845, rise: 100, width: 180 },
  { x: 4035, rise: 195, width: 165 },
  { x: 4225, rise: 250, width: 175 },
];

const levelTrees = [
  { x: 1780, width: 190 }, { x: 3180, width: 215 },
];

const levelSmallGraves = [
  { x: 1420, width: 80 }, { x: 1810, width: 73 },
  { x: 2210, width: 86 }, { x: 2780, width: 76 },
  { x: 3310, width: 83 }, { x: 3810, width: 72 },
];

const levelTallGraves = [
  { x: 1580, width: 65 }, { x: 2000, width: 74 },
  { x: 2520, width: 68 }, { x: 3020, width: 72 },
  { x: 3580, width: 65 }, { x: 4050, width: 75 },
];