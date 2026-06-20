import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import portfolio from './portfolio'
import testimonial from './testimonial'
import blog from './blog'
import pricingPlan from './pricingPlan'
import addOnFeature from './addOnFeature'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, portfolio, testimonial, blog, pricingPlan, addOnFeature],
}
