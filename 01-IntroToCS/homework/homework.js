"use strict";

function BinarioADecimal(num) {
    let digits = num.split('').reverse();
    let decimal = 0;
    for (let i = 0; i < digits.length; i++) {
      let digit = parseInt(digits[i]);
      decimal += digit * Math.pow(2, i);
    }
    return decimal;
  }
  

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  const digitoBinario = [];

  while (num > 0) {
    digitoBinario.push(num % 2);
    num = Math.trunc(num / 2);
  }

  if (digitoBinario.length === 0) {
    digitoBinario.push(0);
  }

  return digitoBinario.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
