import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Service from './Components/Service/Service'
import Skils from './Components/Skils/Skils'
import Work from './Components/Work/Work'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <About />
        <Service />
        <Work />
        <Skils />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
