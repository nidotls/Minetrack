const fs = require('fs')

const defaultConfigFileLocation = './config.json'
const configFileLocation = process.env.CONFIG_FILE_LOCATION || defaultConfigFileLocation
const defaultServersFileLocation = './servers.json'
const serversFileLocation = process.env.SERVERS_FILE_LOCATION || defaultServersFileLocation
const databaseFileLocation = process.env.DATABASE_FILE_LOCATION || 'database.sql'

if (!fs.existsSync(configFileLocation) && fs.existsSync(defaultConfigFileLocation)) {
  fs.copyFileSync(defaultConfigFileLocation, configFileLocation)
}

if (!fs.existsSync(serversFileLocation) && fs.existsSync(defaultServersFileLocation)) {
  fs.copyFileSync(defaultServersFileLocation, serversFileLocation)
}

const config = JSON.parse(fs.readFileSync(configFileLocation).toString())
const servers = JSON.parse(fs.readFileSync(serversFileLocation).toString())

module.exports = {
  configFileLocation,
  serversFileLocation,
  databaseFileLocation,
  config,
  servers
}
