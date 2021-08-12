import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentService";

class CreateComplimenteController {
  async handle(request: Request, response: Response) {
    const { message, tag_id, user_reciver, user_sender } = request.body

    const createComplimenteService = new CreateComplimenteService()

    const compliment = await createComplimenteService.execute({
      message,
      tag_id,
      user_reciver,
      user_sender
    })

    return response.json(compliment)
  }
}

export { CreateComplimenteController }