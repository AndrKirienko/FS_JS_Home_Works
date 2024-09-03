const http = require('node:http')
const app = require('./app.js')

const PORT = process.env.PORT ?? 5000

const server = http.createServer(app)

server.listen(5000, '127.0.0.1', () => {
  console.log('Server is listening')
})