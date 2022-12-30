import Individual from '../Individual'
import Decorator from '../Decorator'
import MatchingStrategy from '../Strategy'

class MatchingSystem {
  constructor(private individuals: Individual[]) {}

  getMatching(
    individualId: number,
    matchingStrategy: MatchingStrategy,
    decorators?: Decorator[]
  ): Individual[] {
    const user = this.individuals.find(
      (individual) => individualId === individual.id
    )
    const individualsExceptUser = this.individuals.filter(
      (individual) => individualId !== individual.id
    )

    const matchingResult = matchingStrategy.getMatchingResult(
      user,
      individualsExceptUser
    )

    if (decorators) {
      // Side Effect
      decorators.forEach((decorator) => {
        decorator.decorate(matchingResult)
      })
    }

    return matchingResult
  }
}

export default MatchingSystem
