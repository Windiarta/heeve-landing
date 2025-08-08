import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import portfolio from './portfolio'
import testimonial from './testimonial'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, portfolio, testimonial, blog],
}
