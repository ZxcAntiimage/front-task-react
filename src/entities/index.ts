export interface Person {
  id: number
  name: string
  ageInHours: number
}

export interface AppState {
  people: Person[]
  minimumAgeInMonths: number
  updatePersonAge: (id: number, ageInHours: number) => void
  setMinimumAgeInMonths: (months: number) => void
}