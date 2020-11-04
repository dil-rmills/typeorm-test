import { getConnectionManager } from 'typeorm'
import * as path from 'path'
import { getUsersConnectionSharedSharedRun } from 'typeorm-shared'
import { getUsersLocalConnectionLocalRun, getUsersSharedConnectionLocalRun } from './repositories/user.repository'
const root = path.resolve(__dirname, '..')

const connectionManager = getConnectionManager()

async function start () {
    //create connection in shared, run query in shared
    await getUsersConnectionSharedSharedRun()
    //create connection in app, run query in app
    await getUsersLocalConnectionLocalRun()
    //create connection in shared, run query in app
    await getUsersSharedConnectionLocalRun()
}

(async () => {
    console.log('starting')
    await start()
    console.log('started')
})().catch(error => {
    console.log(`failed to start ${error}`)
})