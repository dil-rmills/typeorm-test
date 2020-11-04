import { getConnection, In } from 'typeorm'
import { User } from '../entities'

export const getUsersConnectionSharedSharedRun = async () => {
    const connection = await getConnection()
    const repository = connection.getRepository(User)
    const users = await repository.find({ id: In(['00f9955c-49e1-4391-b4f8-e4c0bd1d0ce2', '0d3a54cd-116b-4db5-8288-4e8d1ee21946'])})
    console.log(users)
}