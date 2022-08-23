import React, { useState } from "react";
import "./Navigation.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse style={{ justifyContent: "center" }} isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  to="/home"
                  activeClassName="active"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  SERVICES
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  TEAM
                </DropdownToggle>
                <DropdownMenu direction="right">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      WHO BEHIND THE MISSION
                    </DropdownToggle>
                    <DropdownMenu direction="right">
                      <DropdownItem
                        tag={Link}
                        onClick={() => setIsOpen(!isOpen)}
                        to="/sandeep_singh"
                      >
                        Sandeep Kumar Singh
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        onClick={() => setIsOpen(!isOpen)}
                        to="/shailendra_mishra"
                      >
                        Shailendra K Mishra
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* 
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/team/founder"
                  >
                    WHO BEHIND THE MISSION
                  </DropdownItem>*/}
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/team/executives"
                  >
                    EXECUTIVE MEMBERS
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/team/advisory"
                  >
                    ADVISORY MEMBERS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  VOLUNTEER
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to={{
                      pathname: "/volunteer_form",
                    }}
                  >
                    JOIN AS VOLUNTEER
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/volunteers"
                  >
                    VOLUNTEERS NAMES
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  MEMBERS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to={{
                      pathname: "/member_form",
                    }}
                  >
                    JOIN AS MEMBERS
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/members/life"
                  >
                    LIFE MEMBERS
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/members/associate"
                  >
                    ASSOCIATE MEMBERS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  EVENTS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/field_events"
                  >
                    FIELD EVENTS
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/events/covid_drawing"
                  >
                    DRAWING EVENTS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  NEWSLETTER
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={Link}
                    onClick={() => setIsOpen(!isOpen)}
                    to="/newsletter/research_activity"
                  >
                    RESEARCH ACTIVITY
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  exact
                  to="/media_featured"
                  activeClassName="active"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  MEDIA FEATURED
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/collaborators"
                  activeClassName="active"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  COLLABORATORS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="donate-btn"
                  exact
                  to="/donate"
                  activeClassName="active"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  DONATE
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
