import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Grid, House, PeopleFill, Speedometer2, Table } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as StaffboardLogo } from '../logo.svg';

const TopBar = () => {
  return (
    <>
    <header className="container">
    <div className="py-2">
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <LinkContainer to='/'>
            <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-primary text-decoration-none">
              <StaffboardLogo className="bi me-2" color="royalblue" width={32} />
            </div>
          </LinkContainer> 

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link'>
                  <House className="bi d-block mx-auto mb-1" size={32}/>
                  Home
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link'>
                  <Speedometer2 className="bi d-block mx-auto mb-1" size={32}/>
                  Dashboard
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link'>
                  <Table className="bi d-block mx-auto mb-1" size={32}/>
                  Orders
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link'>
                  <Grid className="bi d-block mx-auto mb-1" size={32}/>
                  Products
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link'>
                  <PeopleFill className="bi d-block mx-auto mb-1" size={32}/>
                  Customers
                 </Nav.Link>
              </LinkContainer>
            </li>
          </ul>
        </div>
      </Container>
    </div>    
  </header>  
  </>
  )
}

export default TopBar