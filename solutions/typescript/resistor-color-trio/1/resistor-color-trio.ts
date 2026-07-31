const colorCodes:{[key: string]: number} = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}

export function decodedResistorValue(colors:string[]):string {
  const val:number = parseInt(`${colorCodes[colors[0]]}`+`${colorCodes[colors[1]]}`)*Math.pow(10,colorCodes[colors[2]]);
  if (val/Math.pow(10,9)>1) return `${val/Math.pow(10,9)} gigaohms`
  else if (val/Math.pow(10,6)>1) return `${val/Math.pow(10,6)} megaohms`
  else if (val/Math.pow(10,3)>1) return `${val/Math.pow(10,3)} kiloohms`
  else return `${val} ohms`;
}

