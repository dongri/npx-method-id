const Web3 = require('web3');

const args = process.argv.slice(2);

let method = args.join(" ");

method = extractFunctionSignature(method);

console.log(Web3.utils.sha3(method).substring(0, 10), " ", method);

function extractFunctionSignature(funcStr) {
  const regex = /(\w+)\(([^)]*)\)/;
  const matches = funcStr.match(regex);
  if (!matches) {
    return null;
  }
  const functionName = matches[1];
  const args = matches[2].split(',').map(arg => {
    const [type] = arg.trim().split(' ');
    return type === 'uint' ? 'uint256' : type;
  }).join(',');
  return `${functionName}(${args})`;
}
