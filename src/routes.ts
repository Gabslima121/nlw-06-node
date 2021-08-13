import { Router } from 'express'
import { CreateUserController } from './controller/CreateUserController'
import { CreateTagController } from './controller/CreateTagController'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateComplimenteController } from './controller/CreateComplimentController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticate'
import { ListUserSendComplimentsController } from './controller/ListUserSendComplimentsController'
import { ListUserReciveComplimentsController } from './controller/ListUserReciveComplimentsController'
import { ListTagController } from './controller/ListTagController'
import { ListUserController } from './controller/ListUserController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimenteController = new CreateComplimenteController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReciveComplimentsController = new ListUserReciveComplimentsController() 
const listTagsController = new ListTagController()
const listUsersController = new ListUserController()

router.post('/login', authenticateUserController.handle);

router.get('/users', ensureAuthenticated, listUsersController.handle)
router.post('/users', createUserController.handle);

router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/users/compliments/recive', ensureAuthenticated, listUserReciveComplimentsController.handle)
router.post('/compliments', ensureAuthenticated, createComplimenteController.handle)

export { router }