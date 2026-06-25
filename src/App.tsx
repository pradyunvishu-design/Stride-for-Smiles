import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { AdminPage } from './pages/AdminPage'
import { ContactPage } from './pages/ContactPage'
import { DonatePage } from './pages/DonatePage'
import { EventsPage } from './pages/EventsPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { VolunteerPage } from './pages/VolunteerPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="privacy" element={<LegalPage pageId="privacy" />} />
          <Route path="terms" element={<LegalPage pageId="terms" />} />
          <Route path="liability" element={<LegalPage pageId="liability" />} />
          <Route path="photo-release" element={<LegalPage pageId="photoRelease" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
