import Decorator from '.'
import Individual from '../Individual'

class ReverseDecorator implements Decorator {
  decorate(individuals: Individual[]) {
    return individuals.reverse()
  }
}

export { ReverseDecorator }
