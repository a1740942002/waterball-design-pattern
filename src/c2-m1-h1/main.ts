import Individual from './Individual'
import { ReverseDecorator } from './Decorator'
import { DistanceBasedMatchingStrategy } from './Strategy'
import MatchingSystem from './MatchingSystem'
import mockData from './mockData/individuals.json'

function main() {
  const matchingSystem = new MatchingSystem(mockData as Individual[])

  const matchingResult = matchingSystem.getMatching(
    1,
    new DistanceBasedMatchingStrategy(),
    [new ReverseDecorator()]
  )

  console.log('matchingResult', matchingResult)
}

main()
