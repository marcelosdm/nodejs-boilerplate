const server = require('./server')

const port = '3000'

server.listen(port || process.env.PORT)
