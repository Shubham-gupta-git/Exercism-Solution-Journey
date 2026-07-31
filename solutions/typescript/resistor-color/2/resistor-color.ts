const colorCodes:{[key: string]: number} = {
  "BLACK": 0,
  "BROWN": 1,
  "RED": 2,
  "ORANGE": 3,
  "YELLOW": 4,
  "GREEN": 5,
  "BLUE": 6,
  "VIOLET": 7,
  "GREY": 8,
  "WHITE": 9
}

export const colorCode = (color: string): number => {
  return colorCodes[color.toUpperCase()];
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
