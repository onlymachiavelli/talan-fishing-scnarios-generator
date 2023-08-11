import * as React from "react"
import * as Router from "react-router-dom"
import Home from "./pages/home"
const App = () => {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
      </Router.Routes>
    </Router.BrowserRouter>
  )
}
export default App
