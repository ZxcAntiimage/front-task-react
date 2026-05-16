import { usePersonEdit} from '@/features/PersonEdit'
import { NotfoundPersonPage } from '@/pages/NotFoundPerson'
import { Link }  from 'react-router-dom'
import ic from "@/shared/icons/photo.svg"

export default function PersonEdit() {
  const {person, updatePersonAge} = usePersonEdit()
  if (!person) {
    return (
      <NotfoundPersonPage/>
    )
  }
  const displayValue = person?.ageInHours ? person.ageInHours.toLocaleString('ru-RU') : ''
   const inputLength = displayValue.length || 1
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const cleanSting = e.target.value.replace(/\s+/g, "")
    const numericValue = Number(cleanSting) || 0
    updatePersonAge(person.id, numericValue)
  }

  return (
    <div className="flex flex-col gap-4">
      <Link to="/" className="text-violet-600 hover:underline text-sm">
        &larr; Back
      </Link>

      <div className="flex items-center gap-3">
        <img
          src={ic}
          alt={person.name}
          className="w-14 h-14 rounded-full border-2 border-violet-500 object-cover"
        />
        <div>
          <label htmlFor="hours-input" className="block text-sm font-bold tracking-wide text-gray-700">
            {person.name.toUpperCase()} IS
          </label>
          <div className="flex items-center gap-2">
            <input
              id="hours-input"
              type="text"
              size={inputLength}
              value={displayValue}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-lg outline-none min-w-[72px] max-w-[213px] box-content text-lg font-[500] text-[#1E0E4C]"
              placeholder="0"
            />
            <span className="text-gray-600">hours old</span>
          </div>
        </div>
      </div>
    </div>
  )
}
