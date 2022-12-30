enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

interface Coord {
  x: number
  y: number
}

class Individual {
  id: number
  gender: Gender
  age: number
  intro: string
  habits: string[]
  coord: Coord
}

export default Individual
