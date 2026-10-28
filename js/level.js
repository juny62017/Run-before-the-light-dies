const levelWidth = 11520;

const levelGround = [
  { x: 0, width: 1470 },
  { x: 1620, width: 460 },
  { x: 2790, width: 260 },
  { x: 3700, width: 250 },
  { x: 4540, width: 440 },
  { x: 5480, width: 320 },
  { x: 6340, width: 410 },
  { x: 7350, width: 410 },
  { x: 8350, width: 430 },
  { x: 9450, width: 410 },
  { x: 10540, width: 980 }
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

  { x: 4415, rise: 180, width: 170 },
  { x: 4595, rise: 95, width: 180 },
  { x: 4775, rise: 190, width: 165 },
  { x: 4955, rise: 250, width: 175 },
  { x: 5140, rise: 165, width: 170 },
  { x: 5320, rise: 90, width: 180 },
  { x: 5500, rise: 180, width: 165 },
  { x: 5685, rise: 245, width: 175 },
  { x: 5870, rise: 170, width: 170 },
  { x: 6050, rise: 100, width: 180 },
  { x: 6230, rise: 195, width: 165 },
  { x: 6410, rise: 250, width: 175 },
  { x: 6595, rise: 175, width: 170 },
  { x: 6775, rise: 95, width: 180 },
  { x: 6960, rise: 185, width: 165 },
  { x: 7140, rise: 240, width: 175 },
  { x: 7320, rise: 165, width: 170 },
  { x: 7500, rise: 85, width: 180 },

  { x: 7680, rise: 170, width: 165 },
  { x: 7860, rise: 225, width: 175 },
  { x: 8040, rise: 255, width: 170 },
  { x: 8220, rise: 185, width: 180 },
  { x: 8400, rise: 110, width: 165 },
  { x: 8580, rise: 205, width: 175 },
  { x: 8760, rise: 250, width: 170 },

  { x: 8940, rise: 180, width: 180 },
  { x: 9120, rise: 95, width: 165 },
  { x: 9300, rise: 190, width: 175 },
  { x: 9480, rise: 240, width: 170 },
  { x: 9660, rise: 160, width: 180 },
  { x: 9840, rise: 90, width: 165 },
  { x: 10020, rise: 175, width: 175 },
  { x: 10200, rise: 235, width: 170 },
  { x: 10380, rise: 185, width: 180 },
  { x: 10560, rise: 100, width: 165 },
  { x: 10740, rise: 195, width: 175 },
  { x: 10920, rise: 245, width: 170 },
  { x: 11080, rise: 165, width: 180 },
  { x: 11200, rise: 90, width: 165 },
  { x: 11320, rise: 155, width: 175 },
  { x: 11410, rise: 210, width: 170 },
  { x: 11480, rise: 130, width: 180 }
];

const levelTrees = [
  { x: 1780, width: 190 },
  { x: 3180, width: 215 },
  { x: 4680, width: 205 },
  { x: 5730, width: 185 },
  { x: 6620, width: 220 },
  { x: 7240, width: 195 },
  { x: 9210, width: 210 },
  { x: 9780, width: 190 },
  { x: 10320, width: 215 },
  { x: 10840, width: 195 }
];

const levelSmallGraves = [
  { x: 1420, width: 80 },
  { x: 1810, width: 73 },
  { x: 2210, width: 86 },
  { x: 2780, width: 76 },
  { x: 3310, width: 83 },
  { x: 3810, width: 72 },

  { x: 4480, width: 82 },
  { x: 4870, width: 74 },
  { x: 5350, width: 85 },
  { x: 6110, width: 72 },
  { x: 6810, width: 84 },
  { x: 7290, width: 76 },

  { x: 9070, width: 82 },
  { x: 9670, width: 74 },
  { x: 10140, width: 86 },
  { x: 10710, width: 77 }
];

const levelTallGraves = [
  { x: 1580, width: 65 },
  { x: 2000, width: 74 },
  { x: 2520, width: 68 },
  { x: 3020, width: 72 },
  { x: 3580, width: 65 },
  { x: 4050, width: 75 },

  { x: 4620, width: 70 },
  { x: 5120, width: 66 },
  { x: 5590, width: 75 },
  { x: 6490, width: 68 },
  { x: 7030, width: 74 },
  { x: 7480, width: 66 },

  { x: 9340, width: 72 },
  { x: 9890, width: 67 },
  { x: 10420, width: 75 },
  { x: 10960, width: 69 }
];

const levelCryptWalls = [
  { x: 7700, width: 320 },
  { x: 8020, width: 320 },
  { x: 8340, width: 320 },
  { x: 8660, width: 320 }
];

const levelGate = [
  { x: 10980, width: 420 }
];