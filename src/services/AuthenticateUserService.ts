import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateService {
  email: string,
  password: string,
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateService) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error('Email/Password Incorrect')
    }

    const passwordMarch = await compare(password, user.password)

    if (!passwordMarch) {
      throw new Error('Email/Password Incorrect')
    }

    const token = sign({
      email: user.email
    }, "af1b56ae749ca9739f953701081214e4",
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

      return token
  }
}

export { AuthenticateUserService }