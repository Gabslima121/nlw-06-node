import { EntityRepository, Repository } from 'typeorm'
import { Tags } from '../entities/Tags'

@EntityRepository(Tags)
class TagsRepositories extends Repository<Tags> { }

export { TagsRepositories }