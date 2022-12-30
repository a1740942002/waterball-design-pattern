class Game {
  start() {
    console.log('Game starting...')
  }
  draw() {
    console.log('Game drawing...')
  }
  play() {
    console.log('Game playing...')
  }
  determine() {
    console.log('Game determining winner...')
  }
}

abstract class Player {
  private cards: Card[]
  private point: number
  private name: string

  abstract choose()
  nameSelf() {}
  addCard(card: Card) {
    this.cards.push(card)
  }
  addPoint() {
    this.point += 1
  }
  showCard() {}
}

class AI extends Player {
  choose() {}
}
class HumanPlayer extends Player {
  choose() {}
}

class Deck {
  private cards: Card[]

  shuffle() {}
  drawCard() {}
}

class Card {
  private rank: Rank
  private suit: Suit
}

enum Rank {
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  J = 11,
  Q = 12,
  K = 13,
  Ace = 14,
}

enum Suit {
  CLUB,
  DIAMOND,
  HEART,
  SPADE,
}

main()

function main() {
  const game = new Game()
  game.start()
  game.draw()
  game.play()
  game.determine()
  console.log('end...')
}
