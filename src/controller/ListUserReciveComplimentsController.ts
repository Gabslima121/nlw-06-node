import { Request, Response } from "express";
import { ListUserReciveComplimentsService } from "../services/ListUserReciveComplimentsService";


class ListUserReciveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const listUserReciveComplimentsService = new ListUserReciveComplimentsService()

    const compliments = await listUserReciveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export { ListUserReciveComplimentsController }