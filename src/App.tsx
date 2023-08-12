import * as React from "react"
import * as Router from "react-router-dom"
import Home from "./pages/home"
import Auto from "./pages/auto"
import Manual from "./pages/manual"
const App = () => {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
        <Router.Route path="/auto" element={<Auto />} />
        <Router.Route path="/manual" element={<Manual />} />
      </Router.Routes>
    </Router.BrowserRouter>
  )
}
export default App
