import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Page Components
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WhyChooseUs from './pages/WhyChooseUs'
import Contact from './pages/Contact'

// Scroll to top on route change
import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  // Initialize scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active')
        }
      })
    }
    
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
