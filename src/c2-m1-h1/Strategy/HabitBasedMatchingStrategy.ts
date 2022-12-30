import MatchingStrategy from '.'
import Individual from '../Individual'

// TODO: Implement HabitBasedMatchingStrategy
class HabitBasedMatchingStrategy implements MatchingStrategy {
  getMatchingResult(individual: Individual, individuals: Individual[]): Individual[] {
    return []
  }
}

export { HabitBasedMatchingStrategy }
