import { useStore } from "@/widgets/store"

export const usePeopleList = () => {
  const people = useStore((state) => state.people)

  const peopleWithYears = people.map((person) => ({
    ...person,
    ageInYears: Math.floor(person.ageInHours / 8760),
  }))

  return { peopleWithYears }
}