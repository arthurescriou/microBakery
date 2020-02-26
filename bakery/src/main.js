const Bakery = require('@frenchpastries/bakery')

const HEARTBEAT_INTERVAL = parseInt(process.env.HEARTBEAT_INTERVAL, 10)
const HEARTBEAT_TIMEOUT = parseInt(process.env.HEARTBEAT_TIMEOUT, 10)

const closeBakery = Bakery.create({
  heartbeatInterval: HEARTBEAT_INTERVAL,
  heartbeatTimeout: HEARTBEAT_TIMEOUT,
})

process.on('SIGINT', () => {
  closeBakery()
})
