import { Router } from 'express'
import { CreateUserController } from './controller/CreateUserController'
import { CreateTagController } from './controller/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateComplimenteController } from './controller/CreateComplimentController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimenteController = new CreateComplimenteController()

router.post('/login', authenticateUserController.handle);

router.post('/users', createUserController.handle);

router.post('/tags', ensureAdmin, createTagController.handle);

router.post('/compliments', createComplimenteController.handle)

export { router }