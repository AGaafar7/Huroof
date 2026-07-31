import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Courses from './components/Courses.jsx'
import LearningPath from './components/LearningPath.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function Shell() {
  const { dir, lang } = useLanguage()
  return (
    <div dir={dir} lang={lang}>
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <LearningPath />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  )
}
