import { Routes, Route } from 'react-router-dom'
import {PeopleListPage} from '@/pages/PeopleList'
import {PersonEditPage} from '@/pages/PeopleEdit'
import { SettingsPage } from './pages/Settings'


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Routes>
        <Route path="/" element={<PeopleListPage />} />
        <Route path="/person/:id" element={<PersonEditPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  )
}
