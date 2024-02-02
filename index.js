const problemX = "sin(2 * var)";
const problemY = "pow(var,2)";
const range = [-2, 2];
const trig = !!!!!!!!!!!!!!!false; // POV: you only want to change 1 character on every problem

/** 
@param {string} piString - the string that is lookin' like pi/5
*/
const evalInnerFunc = (piString) => {
  if (piString === "0") return 0;

  const split = piString.split("/");
  const x = split[0].replace("pi", "");
  const y = split[1];
  let numerator = Number(x === "" || x === "-" ? "1" : x);
  const denominator = Number(typeof y === "undefined" ? "1" : y);
  numerator *= Math.PI;
  numerator /= denominator;
  return numerator;
};

if (trig) {
  const numbers = genArray();

  numbers.forEach((num, _) => {
    const radians = evalInnerFunc(num.toString());
    const x = `Math.${problemX.replace("var", radians)}`;
    const y = `Math.${problemY.replace("var", radians)}`;

    console.log([
      `rad: ${num.replace("pi", "π")}`,
      `x: ${round(eval(x))}`,
      `y: ${round(eval(y))}`,
    ]);
  }); //add stuff to strings that are concatenated to "radians" if necessary
} else {
  for (let t = range[0]; t <= range[1]; t++) {
    const x = `Math.${problemX.replace("var", t)}`;
    const y = `Math.${problemY.replace("var", t)}`;

    console.log([`${t}:`, round(eval(x)), round(eval(y))]);
  }
}

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function GCD(numOne, numTwo) {
  let GCD = 1;
  const min = Math.min(numOne, numTwo);

  for (let i = 0; i <= Math.abs(min); i++) {
    if (numOne % i === 0 && numTwo % i === 0) {
      GCD = i;
    }
  }

  return GCD;
}

function genArray() {
  const arr = [];
  for (let i = -24; i <= 24; i++) {
    const div = GCD(i, 12);

    if (i === 0) {
      arr.push("0");
    } else {
      let top = "";
      switch (i / div) {
        case 1:
          break;
        case -1: {
          top = "-";
          break;
        }
        default: {
          top = i / div;
          break;
        }
      }

      let bottom = "";
      if (!(12 / div === 1)) {
        bottom = `/${12 / div}`;
      }

      arr.push(`${top}pi${bottom}`);
    }
  }

  return arr;
}
