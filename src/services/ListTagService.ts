import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"

import { TagsRepositories } from "../repositories/TagsRepositories"


class ListTagService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagsRepositories.find()

    return classToPlain(tags);
  }
}

export { ListTagService }