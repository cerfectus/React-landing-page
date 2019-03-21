import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  CardLink
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
     <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Lucas Cervantes</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/cerfectus">Github</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/lucas-cervantes-1685a6172">LinkedIn</NavLink>
                </NavItem><NavItem>
                  <NavLink href="https://drive.google.com/file/d/1LVlDUqLCh1h73WxnVAu3068vcYm0keJJ/view?usp=sharing">CV</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects">Projects</NavLink>
                  <CardLink href="https://pick-and-roll.herokuapp.com/home">Space Babies</CardLink>
                  <CardLink href="https://sweetdrink-app.herokuapp.com/">Sweet Drinks</CardLink>
                  <CardLink href="http://space-babies.surge.sh/">Pick-And-Roll</CardLink>
                </NavItem>
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar