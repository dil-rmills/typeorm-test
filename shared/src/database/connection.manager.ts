import { getConnectionManager }  from 'typeorm'
import * as path from 'path'
import { User } from './entities/user'

const root = path.resolve(__dirname, '..')

const connectionManager = getConnectionManager()

export const getOrCreateConnection = async (clientId = 'test') => {
    if (connectionManager.has(clientId)) {
        const connection = connectionManager.get(clientId)
        if (!connection.isConnected) {
            await connection.connect()
        }
        return connection
    }
    return tryCreateConnection(clientId)
}

const tryCreateConnection = async (clientId) => {
    const connection = connectionManager.create({
        name: clientId,
        type: 'sqlite',
        database: `${root}/data/sample.sqlite`,
        synchronize: true,
        logging: true,
        entities: [User]
    })
    if (!connection.isConnected) {
        await connection.connect()
    }
    return connection
}