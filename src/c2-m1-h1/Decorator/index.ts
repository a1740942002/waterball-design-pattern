import Individual from '../Individual'

interface Decorator {
  decorate(individuals: Individual[]): Individual[]
}

export default Decorator
export { ReverseDecorator } from './ReverseDecorator'
