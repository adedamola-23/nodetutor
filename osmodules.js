const os = require('os')

// info about user
const user = os.userInfo()
console.log(user)

// mehoreturns to the

console.log(`the sysytem uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
