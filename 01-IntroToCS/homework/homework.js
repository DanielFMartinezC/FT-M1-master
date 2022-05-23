'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arBin= num.split('');
  arBin = arBin.reverse();
  for(let i = 0; i < arBin.length; i++) {
    arBin[i] = arBin[i] * 2**i
  }
  let decimal = arBin.reduce((x, y) => x + y);
  return decimal;
}
function DecimalABinario(num) {
  // tu codigo aca
  let binAr = []
while(num >= 1) {
  if(num % 2 === 0) {
    binAr.push(0)
  } else {
    binAr.push(1)
  };
  num = num / 2
};
binAr.reverse();
let bin = binAr.toString();
let n = bin.replaceAll(',','');
return n;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}