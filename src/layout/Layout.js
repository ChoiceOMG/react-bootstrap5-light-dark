// router
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'


const Layout = ({ children }) => {
  return (
    <Router>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </Router>
  )
}

export default Layout