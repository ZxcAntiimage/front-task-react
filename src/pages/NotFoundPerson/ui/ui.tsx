import { usePersonEdit } from "@/features/PersonEdit/model/usePersonEdit"
import { Link } from "react-router-dom"

export default function NotfoundPersonPage(){
    const {person} = usePersonEdit()
    if (!person) {
    return (
      <div>
        <p className="text-gray-600">Person not found</p>
        <Link to="/" className="text-violet-600 hover:underline text-sm">
          Back to list
        </Link>
      </div>
    )
  }
}