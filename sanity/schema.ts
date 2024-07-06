import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { tag } from './schemas/tags'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
