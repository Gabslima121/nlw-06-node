import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest {
  user_reciver: string;
  user_sender: string;
  tag_id: string;
  message: string;
}

class CreateComplimenteService {
  async execute({ message, tag_id, user_reciver, user_sender }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if(user_sender === user_reciver){
      throw new Error('Incorrect user reciver!')
    }

    const userReciverExists = await usersRepositories.findOne(user_reciver)

    if(!userReciverExists){
      throw new Error('User reciver does not exists!')
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_reciver,
      message
    })


    await complimentsRepositories.save(compliment)

    return compliment;
  }
}

export { CreateComplimenteService }