import { Container } from 'react-bootstrap'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
     <Container className="container-fluid pb-3">
      <footer className='container pb-3'>
        Choice Staff Dashboard - by Han Ming and Peter Jaffray &copy; {year} - Help? dev@choice.marketing
      </footer>
    </Container>
  )
}

export default Footer