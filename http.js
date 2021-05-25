const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('here is our short history')
  }
  res.end(`
       <h1>oops</h1>
       <p>we cant seem to find the page</p>
       <a href="/">back home</a>
  
   `)
})

server.listen(5000)
