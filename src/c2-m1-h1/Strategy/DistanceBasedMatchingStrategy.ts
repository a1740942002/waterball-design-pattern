import MatchingStrategy from '.'
import Individual from '../Individual'

// TODO: Implement DistanceBasedMatchingStrategy
class DistanceBasedMatchingStrategy implements MatchingStrategy {
  getMatchingResult(
    individual: Individual,
    individuals: Individual[]
  ): Individual[] {
    return []
  }
}

export { DistanceBasedMatchingStrategy }
