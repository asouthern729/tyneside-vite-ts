import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppProvider } from "@/context/AppContext"

// Components
import Home from "@/pages/Home"

function App() {

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
