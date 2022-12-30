import Individual from '../Individual'

interface Strategy {
  getMatchingResult(
    individual: Individual,
    individuals: Individual[]
  ): Individual[]
}

export default Strategy
export { DistanceBasedMatchingStrategy } from './DistanceBasedMatchingStrategy'
export { HabitBasedMatchingStrategy } from './HabitBasedMatchingStrategy'
