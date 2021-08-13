import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentService";

class CreateComplimenteController {
  async handle(request: Request, response: Response) {
    const { message, tag_id, user_reciver } = request.body
    const { user_id } = request

    const createComplimenteService = new CreateComplimenteService()

    const compliment = await createComplimenteService.execute({
      message,
      tag_id,
      user_reciver,
      user_sender: user_id
    })

    return response.json(compliment)
  }
}

export { CreateComplimenteController }