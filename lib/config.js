const fs = require('fs')

const defaultConfigFileLocation = './config.json'
const configFileLocation = process.env.CONFIG_FILE_LOCATION || defaultConfigFileLocation
const defaultServersFileLocation = './servers.json'
const serversFileLocation = process.env.SERVERS_FILE_LOCATION || defaultServersFileLocation
const databaseFileLocation = process.env.DATABASE_FILE_LOCATION || 'database.sql'

if (!fs.existsSync(configFileLocation) && fs.existsSync(defaultConfigFileLocation)) {
  try {
    fs.copyFileSync(defaultConfigFileLocation, configFileLocation)
  } catch (e) {
    console.error(e)
  }
}

if (!fs.existsSync(serversFileLocation) && fs.existsSync(defaultServersFileLocation)) {
  try {
    fs.copyFileSync(defaultServersFileLocation, serversFileLocation)
  } catch (e) {
    console.error(e)
  }
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
