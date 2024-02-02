const problemX = "Math.sin(2*";
const problemY = "Math.pow(";
const range = [-2, 2];
const trig =
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!false; // POV: you only want to change 1 character on every problem

/** 
@param {string} piString - the string that is lookin' like pi/5
*/
const evalInnerFunc = (piString) => {
  // piString = piString.replace("pi", "Math.PI");
  // return eval(piString);
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
    console.log([
      `rad: ${num.replace("pi", "π")}`,
      `x: ${round(eval(problemX + radians + ")"))}`,
      `y: ${round(eval(problemY + radians + ",2)"))}`,
    ]);
  }); //add stuff to strings that are concatenated to "radians" if necessary
} else {
  for (let t = range[0]; t <= range[1]; t++) {
    const xy =
      round(eval(problemX + t + ")")) +
      ", " +
      round(eval(problemY + t + ",2)")); //add stuff to strings that are concatenated to "t" if necessary
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
          // console.log("This is cool", div, i);
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
