import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
/*-------------common------------ */
import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Footer from "./Common/footer/Footer"
/*-------------common------------ */
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Rooms from "./Components/Rooms/Rooms"
import Gallery from "./Components/Gallery/Gallery"
import Messages from "./Components/Messages/Messages"
import Contact from "./Components/Contact/Contact"
import Login from "./Components/Login/Login"
/*-------------auth------------ */
import { AuthProvider } from './Components/Auth/AuthContext'
import ProtectedRoute from './Components/Auth/ProtectedRoute'
import Dashboard from './Components/Auth/Dashboard'
import Profile from './Components/Auth/Profile'
import Stats from './Components/Auth/Stats'
/*-------------auth------------ */

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/rooms' exact component={Rooms} />
          <Route path='/messages' component={Messages} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/stats" component={Stats} />
        </Switch>
        <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
