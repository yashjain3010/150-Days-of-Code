import Navigation from "./Componets/Navigation/Navigation"
import './App.css'
import ContactHeader from "./Componets/ContactHeader/ContactHeader"
import ContactForm from "./Componets/ContactForm/ContactForm"

const App = () => {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App