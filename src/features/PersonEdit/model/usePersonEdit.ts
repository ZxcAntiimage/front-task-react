import { useParams } from 'react-router-dom'
import { useStore } from '@/widgets/store'

export const usePersonEdit = () => {
  const { id } = useParams<{ id: string }>()
  
  const person = useStore((state) => 
    state.people.find((p) => p.id === Number(id))
  )
  const updatePersonAge = useStore((state) => state.updatePersonAge)

  return { person, updatePersonAge }
}