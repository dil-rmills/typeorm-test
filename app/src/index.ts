import { In } from 'typeorm'
import { getOrCreateConnection, User } from 'typeorm-shared'

async function start () {
    const connection = await getOrCreateConnection('someone')
    const repository = connection.getRepository(User)
    const users = await repository.find({ id: In(['00f9955c-49e1-4391-b4f8-e4c0bd1d0ce2', '0d3a54cd-116b-4db5-8288-4e8d1ee21946'])})
    console.log(users)
}

(async () => {
    console.log('starting')
    await start()
    console.log('started')
})().catch(error => {
    console.log(`failed to start ${error}`)
})