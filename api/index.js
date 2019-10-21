import Server from './lib/Server'

const PORT = 3000

Server.listen(PORT).then(({ url }) => console.log(`Nahual courses API listening on ${url}`))
