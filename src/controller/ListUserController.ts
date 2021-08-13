import {Response, Request} from 'express';
import { ListUserService } from '../services/ListUserService';

class ListUserController {
  async handle(request: Request, response: Response){
    const listUserService = new ListUserService()

    const users = await listUserService.execute()
    
    response.json(users)
  }
}

export { ListUserController }