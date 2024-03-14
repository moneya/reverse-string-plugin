function run() {
  const input = Host.inputString()
  // reverse the string
  const reversedString = input.split('').reverse().join('');
  // return reversedString;
  Host.outputString(reversedString);
}

module.exports = {run}