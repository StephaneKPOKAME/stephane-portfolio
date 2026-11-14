import { useLanguage } from './i18n/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

function App() {
  const { t } = useLanguage()
  useReveal()

  return (
    <>
      <title>{t('seo.home.title')}</title>
      <meta name="description" content={t('seo.home.description')} />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
