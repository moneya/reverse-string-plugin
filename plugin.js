function run() {
  const input = Host.inputString()
  // Host.outputString(`Hello, ${name}`)
  const reversedString = input.split('').reverse().join('');
  // Return the reversed string
  // return reversedString;
  Host.outputString(reversedString)
}

module.exports = {run}