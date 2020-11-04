import { createConnection }  from 'typeorm'
import * as path from 'path'
import { User } from './entities/user'

const root = path.resolve(__dirname, '..')

export const getConnection = async () => {
    return await createConnection({
        type: 'sqlite',
        database: `${root}/data/sample.sqlite`,
        synchronize: true,
        logging: true,
        entities: [User]
    })
}