const fs = require('fs')

const configFileLocation = process.env.CONFIG_FILE_LOCATION || './config.json'
const serversFileLocation = process.env.SERVERS_FILE_LOCATION || './servers.json'
const databaseFileLocation = process.env.DATABASE_FILE_LOCATION || 'database.sql'

const config = JSON.parse(fs.readFileSync(configFileLocation).toString())
const servers = JSON.parse(fs.readFileSync(serversFileLocation).toString())

module.exports = {
  configFileLocation,
  serversFileLocation,
  databaseFileLocation,
  config,
  servers
}
