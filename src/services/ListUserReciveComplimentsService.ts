import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReciveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      where: {
        user_reciver: user_id,
      },
      relations: ['userSender', 'userReciver', 'tag']
    })
    return compliments
  }
}

export { ListUserReciveComplimentsService }